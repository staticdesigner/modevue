import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const moduleJsonPath = path.join(rootDir, 'node_modules', '@invictus.codes', 'nuxt-vuetify', 'dist', 'module.json')
const moduleMjsPath = path.join(rootDir, 'node_modules', '@invictus.codes', 'nuxt-vuetify', 'dist', 'module.mjs')

try {
  const jsonBackup = moduleJsonPath + '.backup'
  if (fs.existsSync(moduleJsonPath)) {
    // Keep a clean backup of the original module.json if not present
    if (!fs.existsSync(jsonBackup)) {
      fs.copyFileSync(moduleJsonPath, jsonBackup)
    }
    // Always restore from clean backup before patching
    fs.copyFileSync(jsonBackup, moduleJsonPath)

    let jsonContent = fs.readFileSync(moduleJsonPath, 'utf8')
    jsonContent = jsonContent.replace(/"nuxt":\s*"\^3\.0\.0"/g, '"nuxt": "^3.0.0 || ^4.0.0"')
    fs.writeFileSync(moduleJsonPath, jsonContent, 'utf8')
    console.log('Successfully patched nuxt-vuetify module.json')
  } else {
    console.warn('nuxt-vuetify module.json not found at:', moduleJsonPath)
  }

  const mjsBackup = moduleMjsPath + '.backup'
  if (fs.existsSync(moduleMjsPath)) {
    // Keep a clean backup of the original module.mjs if not present
    if (!fs.existsSync(mjsBackup)) {
      // Check if the current module.mjs is already corrupted. If so, don't backup a corrupted file!
      const content = fs.readFileSync(moduleMjsPath, 'utf8')
      if (content.includes('getContents:') && !content.includes('import { defineNuxtPlugin, useCookie } from \'#app\'')) {
        console.warn('Skipping backup of potentially corrupted module.mjs. It will be restored by package reinstallation.')
      } else {
        fs.copyFileSync(moduleMjsPath, mjsBackup)
      }
    }
    // If we have a backup, restore from it
    if (fs.existsSync(mjsBackup)) {
      fs.copyFileSync(mjsBackup, moduleMjsPath)
    }

    let mjsContent = fs.readFileSync(moduleMjsPath, 'utf8')
    mjsContent = mjsContent.replace(/!isNuxt3\(nuxt\)/g, 'false')
    mjsContent = mjsContent.replace(/nuxt:\s*["']\^3\.0\.0["']/g, 'nuxt: "^3.0.0 || ^4.0.0"')

    // Patch addPluginTemplate to use dynamic getContents (Nuxt 4 does not support lodash/EJS templates)
    const addPluginTemplateRegex = /addPluginTemplate\(\{\s*src:\s*resolver\.resolve\(runtimeDir,\s*['"]templates\/plugin\.mts['"]\),\s*options:\s*vuetifyOptions\s*\}\);?/g
    mjsContent = mjsContent.replace(addPluginTemplateRegex, `addPluginTemplate({
        filename: "vuetify.plugin.mts",
        options: vuetifyOptions,
        getContents: ({ options }) => {
          let contents = \`
import { defineNuxtPlugin, useCookie } from '#app'
import { createVuetify } from 'vuetify'

const isDev = process.env.NODE_ENV === "development"
const options = \${JSON.stringify(options)}
\`;
          if (!options.treeshaking) {
            contents += \`
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

options.components = components
options.directives = directives
\`;
            if (options.useVuetifyLabs) {
              contents += \`
import * as labs from 'vuetify/labs/components'
options.components = { ...options.components, ...labs }
\`;
            }
          }
          contents += \`
export default defineNuxtPlugin(nuxtApp => {
  const themeCookie = useCookie('theme', { default: () => 'dark' })
  if (options.theme) {
    options.theme.defaultTheme = themeCookie.value
  } else {
    options.theme = { defaultTheme: themeCookie.value }
  }

  const vuetify = createVuetify(options)
  nuxtApp.vueApp.use(vuetify)

  if (!process.server && isDev) {
    console.log('💚 Initialized Vuetify 3', vuetify)
  }

  return {
    provide: {
      vuetify
    }
  }
})
\`;
          return contents;
        }
      });`)

    fs.writeFileSync(moduleMjsPath, mjsContent, 'utf8')
    console.log('Successfully patched nuxt-vuetify module.mjs')
  } else {
    console.warn('nuxt-vuetify module.mjs not found at:', moduleMjsPath)
  }
} catch (error) {
  console.error('Error patching nuxt-vuetify:', error)
}
