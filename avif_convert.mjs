import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public', 'gallery');
let total = 0;
for (let i = 1; i <= 14; i++) {
  const jpg = path.join(dir, `faro-marina-${i}.jpg`);
  const avif = path.join(dir, `faro-marina-${i}.avif`);
  const buf = await sharp(jpg).avif({ quality: 58, effort: 4 }).toBuffer();
  await sharp(buf).toFile(avif);
  total++;
  console.log(`converted faro-marina-${i}.jpg -> .avif`);
}
console.log(`done: ${total} files`);
