// Generates the static Open Graph share image (public/og.png) from the brand system.
// Uses @resvg/resvg-js (native, reliable on Node 24) instead of @vercel/og.
// Fonts: Bricolage Grotesque (the site's display face). TTFs live in /fonts
//   (OFL, from github.com/ateliertriay/bricolage). Run: node scripts/gen-og.mjs
import { Resvg } from '@resvg/resvg-js'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'

const PAPER = '#f4efe3'
const INK = '#17140f'
const ACCENT = '#d6371a'
const MUTED = '#5b5348'
const FAM = 'Bricolage Grotesque'

const NAME_TOP = 'MUHAMMAD'
const NAME_BOTTOM = 'ADNAN'
const ROLE = 'FULL-STACK MERN DEVELOPER — PORTFOLIO'
const LOCATION = 'KARACHI, PAKISTAN'
const DECK_1 = 'Shipping production web apps across e-commerce,'
const DECK_2 = 'SaaS, food delivery &amp; healthcare — MERN + Next.js.'

// Faint blueprint grid lines every 40px
let grid = ''
for (let x = 40; x < 1200; x += 40) grid += `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="${INK}" stroke-opacity="0.05" stroke-width="1"/>`
for (let y = 40; y < 630; y += 40) grid += `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="${INK}" stroke-opacity="0.05" stroke-width="1"/>`

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  ${grid}

  <!-- dateline -->
  <text x="72" y="78" font-family="${FAM}" font-weight="600" font-size="21" letter-spacing="4" fill="${MUTED}">${LOCATION}</text>
  <circle cx="838" cy="71" r="7" fill="${ACCENT}"/>
  <text x="856" y="78" font-family="${FAM}" font-weight="600" font-size="21" letter-spacing="3" fill="${ACCENT}">AVAILABLE FOR HIRE</text>
  <rect x="72" y="98" width="1056" height="4" fill="${INK}"/>

  <!-- role eyebrow -->
  <text x="72" y="188" font-family="${FAM}" font-weight="600" font-size="25" letter-spacing="5" fill="${ACCENT}">${ROLE}</text>

  <!-- nameplate -->
  <text x="66" y="332" font-family="${FAM}" font-weight="800" font-size="158" letter-spacing="-6" fill="${INK}">${NAME_TOP}</text>
  <text x="70" y="474" font-family="${FAM}" font-weight="800" font-size="158" letter-spacing="-6" fill="none" stroke="${INK}" stroke-width="2">${NAME_BOTTOM}</text>

  <!-- deck -->
  <rect x="72" y="522" width="4" height="70" fill="${ACCENT}"/>
  <text x="96" y="550" font-family="${FAM}" font-weight="400" font-size="27" fill="${MUTED}">${DECK_1}</text>
  <text x="96" y="586" font-family="${FAM}" font-weight="400" font-size="27" fill="${MUTED}">${DECK_2}</text>
</svg>`

const fontFiles = [
  'fonts/BricolageGrotesque-ExtraBold.ttf',
  'fonts/BricolageGrotesque-SemiBold.ttf',
  'fonts/BricolageGrotesque-Regular.ttf'
].filter(existsSync)

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { fontFiles, loadSystemFonts: false, defaultFontFamily: FAM }
})

const png = resvg.render().asPng()
if (!existsSync('public')) mkdirSync('public', { recursive: true })
writeFileSync('public/og.png', png)
console.log(`og.png written: ${png.length} bytes (${fontFiles.length} font files loaded)`)
