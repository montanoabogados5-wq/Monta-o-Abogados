import fs from 'fs';
import path from 'path';

const SOCIAL_DIR = path.resolve('public', 'social');

async function main() {
  try {
    const candidates = (await fs.promises.readdir(SOCIAL_DIR))
      .filter(f => /\.(jpe?g|png)$/i.test(f));

    let sharp;
    try {
      sharp = (await import('sharp')).default;
    } catch (e) {
      console.log('[optimize-images] La dependencia "sharp" no está instalada.');
      console.log('  Instala con: npm i -D sharp');
      console.log('  Luego ejecuta: npm run optimize:images');
      process.exit(0);
    }

    for (const file of candidates) {
      const srcPath = path.join(SOCIAL_DIR, file);
      const base = file.replace(/\.[^.]+$/, '');
      const webpPath = path.join(SOCIAL_DIR, `${base}.webp`);

      const img = sharp(srcPath).rotate();
      const meta = await img.metadata();
      const width = Math.min(1200, meta.width || 1200);

      await img
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`✔ ${file} → ${path.basename(webpPath)} (${width}px)`);
    }

    console.log('\nListo. Las <picture> en el frontend usarán .webp si existe.');
  } catch (err) {
    console.error('[optimize-images] Error:', err);
    process.exit(1);
  }
}

main();

