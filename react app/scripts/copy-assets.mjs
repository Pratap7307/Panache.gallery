/**
 * Post-build asset copy script.
 * Copies image folders from the parent project root into dist/ so the
 * production build is self-contained (works on Vercel, Netlify, etc.)
 *
 * Run via: npm run build  (see package.json "build" script)
 */
import { cpSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Parent project root (contains all the raw image folders)
const projectRoot = join(__dirname, '..', '..')
// Production output directory
const distRoot = join(__dirname, '..', 'dist')

// Every top-level folder in the parent that contains images served by the React app
const assetFolders = [
  'home.gallery',
  'signature_exhibition_expanded_gallery',
  'events_schedule',
]

console.log('\n📦 Copying static image assets into dist/...')

for (const folder of assetFolders) {
  const src = join(projectRoot, folder)
  const dest = join(distRoot, folder)

  if (!existsSync(src)) {
    console.warn(`  ⚠  Skipped (not found): ${folder}`)
    continue
  }

  try {
    cpSync(src, dest, { recursive: true })
    console.log(`  ✓  ${folder}`)
  } catch (err) {
    console.error(`  ✗  Failed to copy ${folder}: ${err.message}`)
    process.exit(1)
  }
}

console.log('✅ Assets copied successfully.\n')
