// Produces web-optimized portrait assets from the full-size source.
// The portrait renders at ~280px wide (4:5), so 600px covers 2x displays.
// Outputs: public/myself.webp (primary) + public/myself.jpg (fallback).
// Run: node scripts/optimize-portrait.mjs
import sharp from 'sharp'
import { statSync } from 'node:fs'

const SRC = 'app/myself.png'
const WIDTH = 600

const base = sharp(SRC).resize({ width: WIDTH, withoutEnlargement: true })

await base.clone().webp({ quality: 80 }).toFile('public/myself.webp')
await base.clone().jpeg({ quality: 82, mozjpeg: true }).toFile('public/myself.jpg')

const meta = await sharp('public/myself.webp').metadata()
const kb = (p) => (statSync(p).size / 1024).toFixed(1)
console.log(`source      ${SRC}            ${kb(SRC)} KB`)
console.log(`webp        public/myself.webp ${kb('public/myself.webp')} KB  (${meta.width}x${meta.height})`)
console.log(`jpg (fb)    public/myself.jpg  ${kb('public/myself.jpg')} KB`)
