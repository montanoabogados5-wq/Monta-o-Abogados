// Proxy de imagen de Instagram como función serverless en Vercel
export default async function handler(req, res) {
  try {
    const { code, size = 'l' } = req.query || {};
    if (!code || !/^[A-Za-z0-9_-]+$/.test(String(code))) {
      return res.status(400).json({ ok: false, error: 'Parámetro code inválido' });
    }

    const igUrl = `https://www.instagram.com/p/${code}/media/?size=${encodeURIComponent(size)}`;
    const resp = await fetch(igUrl, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.instagram.com/',
      },
    });
    if (!resp.ok) {
      return res.status(502).json({ ok: false, error: 'No se pudo obtener imagen de Instagram', status: resp.status });
    }
    const arrayBuf = await resp.arrayBuffer();
    const buf = Buffer.from(arrayBuf);
    const type = resp.headers.get('content-type') || 'image/jpeg';
    res.setHeader('Content-Type', type);
    // Cache en CDN 1 día, con SWR 10 min
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=600');
    return res.end(buf);
  } catch (err) {
    console.error('ig-media error:', err);
    return res.status(500).json({ ok: false, error: 'Error interno' });
  }
}

