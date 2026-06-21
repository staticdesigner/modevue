import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const moduleJsonPath = path.join(rootDir, 'node_modules', '@invictus.codes', 'nuxt-vuetify', 'dist', 'module.json')
const moduleMjsPath = path.join(rootDir, 'node_modules', '@invictus.codes', 'nuxt-vuetify', 'dist', 'module.mjs')

try {
  if (fs.existsSync(moduleJsonPath)) {
    let jsonContent = fs.readFileSync(moduleJsonPath, 'utf8')
    jsonContent = jsonContent.replace(/"nuxt":\s*"\^3\.0\.0"/g, '"nuxt": "^3.0.0 || ^4.0.0"')
    fs.writeFileSync(moduleJsonPath, jsonContent, 'utf8')
    console.log('Successfully patched nuxt-vuetify module.json')
  } else {
    console.warn('nuxt-vuetify module.json not found at:', moduleJsonPath)
  }

  if (fs.existsSync(moduleMjsPath)) {
    let mjsContent = fs.readFileSync(moduleMjsPath, 'utf8')
    mjsContent = mjsContent.replace(/!isNuxt3\(nuxt\)/g, 'false')
    mjsContent = mjsContent.replace(/nuxt:\s*["']\^3\.0\.0["']/g, 'nuxt: "^3.0.0 || ^4.0.0"')
    fs.writeFileSync(moduleMjsPath, mjsContent, 'utf8')
    console.log('Successfully patched nuxt-vuetify module.mjs')
  } else {
    console.warn('nuxt-vuetify module.mjs not found at:', moduleMjsPath)
  }
} catch (error) {
  console.error('Error patching nuxt-vuetify:', error)
}
