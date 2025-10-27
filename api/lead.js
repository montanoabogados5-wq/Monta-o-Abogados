export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ ok: false, error: 'Method not allowed' });
    }

    const { nombre, telefono, email, mensaje, serviceTitle, sourcePath } = req.body || {};
    if (!nombre || !telefono) {
      return res.status(400).json({ ok: false, error: 'Nombre y teléfono son requeridos' });
    }

    const subject = `Nuevo contacto – ${serviceTitle || 'Consulta general'}`;
    const textLines = [
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Correo: ${email || '-'}`,
      `Servicio: ${serviceTitle || '-'}`,
      `Mensaje: ${mensaje || '-'}`,
      `Origen: ${sourcePath || '-'}`,
      `Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}`,
    ];

    if (process.env.DRY_RUN === '1' || process.env.DRY_RUN === 'true') {
      return res.json({ ok: true, dryRun: true, preview: textLines.join('\n') });
    }

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
    console.error('lead error:', err);
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el correo' });
  }
}

