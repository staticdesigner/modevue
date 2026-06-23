// plugins/theme.client.ts
// The `.client` suffix means this plugin ONLY runs in the browser,
// never during nuxt generate / SSR — so localStorage is always safe to access.
// It runs before the app is mounted, which is the correct time to set the theme
// without causing a hydration mismatch on static GitHub Pages.

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:beforeMount', () => {
    const saved = localStorage.getItem('app-theme')
    if (saved === 'light' || saved === 'dark') {
      // Access Vuetify's theme through the Vue app's provides
      const vuetify = nuxtApp.vueApp.config.globalProperties.$vuetify
      if (vuetify?.theme) {
        vuetify.theme.global.name.value = saved
      }
    }
  })
})
