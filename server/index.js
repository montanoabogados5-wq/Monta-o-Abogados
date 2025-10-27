import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST /api/lead – send email with form data
app.post('/api/lead', async (req, res) => {
  try {
    const { nombre, telefono, email, mensaje, serviceTitle, sourcePath } = req.body || {};

    if (!nombre || !telefono) {
      return res.status(400).json({ ok: false, error: 'Nombre y teléfono son requeridos' });
    }

    const subject = `Nuevo contacto — ${serviceTitle || 'Consulta general'}`;
    const textLines = [
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Correo: ${email || '—'}`,
      `Servicio: ${serviceTitle || '—'}`,
      `Mensaje: ${mensaje || '—'}`,
      `Origen: ${sourcePath || '—'}`,
      `Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}`,
    ];

    // DRY_RUN mode: log and return without sending email
    if (process.env.DRY_RUN === '1' || process.env.DRY_RUN === 'true') {
      console.log('[DRY_RUN] Email simulado:\n' + textLines.join('\n'));
      return res.json({ ok: true, dryRun: true, preview: textLines.join('\n') });
    }

    // Configure transporter from env vars
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || 'montanoabogados5@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || smtpUser || toEmail;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return res.status(500).json({ ok: false, error: 'SMTP no configurado en el servidor' });
    }

    const { default: nodemailer } = await import('nodemailer');
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      to: toEmail,
      from: fromEmail,
      replyTo: email || undefined,
      subject,
      text: textLines.join('\n'),
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el correo' });
  }
});

// Simple in-memory cache for proxied Instagram images
const IG_CACHE = new Map(); // key -> { buf, type, ts }
const IG_TTL_MS = 6 * 60 * 60 * 1000; // 6h

// GET /api/ig-media?code=SHORTCODE[&size=l|m|t]
// Proxies Instagram post image to avoid hotlink/CORS/referrer issues
// Helper to support Node < 18 (sin fetch nativo)
async function doFetch(url, init) {
  if (typeof fetch !== 'undefined') return fetch(url, init);
  const { default: nodeFetch } = await import('node-fetch');
  return nodeFetch(url, init);
}

app.get('/api/ig-media', async (req, res) => {
  try {
    const code = (req.query.code || '').toString();
    const size = (req.query.size || 'l').toString();
    if (!code || !/^[A-Za-z0-9_-]+$/.test(code)) {
      return res.status(400).json({ ok: false, error: 'Parámetro code inválido' });
    }
    const key = `${code}:${size}`;
    const now = Date.now();
    const cached = IG_CACHE.get(key);
    if (cached && now - cached.ts < IG_TTL_MS) {
      res.set('Content-Type', cached.type || 'image/jpeg');
      res.set('Cache-Control', 'public, max-age=86400');
      return res.end(cached.buf);
    }

    const igUrl = `https://www.instagram.com/p/${code}/media/?size=${encodeURIComponent(size)}`;
    const resp = await doFetch(igUrl, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.instagram.com/',
      },
    });
    if (!resp.ok) {
      return res.status(502).json({ ok: false, error: 'No se pudo obtener imagen de Instagram', status: resp.status });
    }
    const buf = Buffer.from(await resp.arrayBuffer());
    const type = resp.headers.get('content-type') || 'image/jpeg';
    IG_CACHE.set(key, { buf, type, ts: now });
    res.set('Content-Type', type);
    res.set('Cache-Control', 'public, max-age=86400');
    return res.end(buf);
  } catch (err) {
    console.error('ig-media error:', err);
    return res.status(500).json({ ok: false, error: 'Error interno' });
  }
});

// In production, serve the built SPA from /dist
const distDir = path.resolve(__dirname, '..', 'dist');
app.use(express.static(distDir));
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
