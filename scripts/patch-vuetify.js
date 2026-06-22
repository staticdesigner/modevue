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
    
    // Patch addPluginTemplate to use dynamic getContents (Nuxt 4 does not support lodash/EJS templates)
    if (mjsContent.includes('getContents:')) {
      mjsContent = mjsContent.replace(
        'src: resolver.resolve(runtimeDir, "templates/plugin.mts"),',
        'filename: "vuetify.plugin.mts",'
      );
    } else {
      const addPluginTemplateRegex = /addPluginTemplate\(\{\s*src:\s*resolver\.resolve\(runtimeDir,\s*['"]templates\/plugin\.mts['"]\),\s*options:\s*vuetifyOptions\s*\}\);?/g
      mjsContent = mjsContent.replace(addPluginTemplateRegex, `addPluginTemplate({
        filename: "vuetify.plugin.mts",
        options: vuetifyOptions,
        getContents: ({ options }) => {
          let contents = \`
import { defineNuxtPlugin } from '#app'
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
    }

    fs.writeFileSync(moduleMjsPath, mjsContent, 'utf8')
    console.log('Successfully patched nuxt-vuetify module.mjs')
  } else {
    console.warn('nuxt-vuetify module.mjs not found at:', moduleMjsPath)
  }
} catch (error) {
  console.error('Error patching nuxt-vuetify:', error)
}
