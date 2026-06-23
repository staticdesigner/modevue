// composables/useAppTheme.ts
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const STORAGE_KEY = 'app-theme'

export function useAppTheme() {
  const theme = useTheme()

  // Toggle between light and dark, persist to localStorage
  function toggleTheme() {
    const next = theme.global.name.value === 'dark' ? 'light' : 'dark'
    theme.global.name.value = next
    localStorage.setItem(STORAGE_KEY, next)
  }

  // Call once on app mount (onMounted) to restore saved preference.
  // Must be in onMounted — localStorage is client-only, calling it during
  // SSR would cause a hydration mismatch / build error.
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') {
      theme.global.name.value = saved
    } else {
      // Fall back to OS/system colour-scheme preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.global.name.value = prefersDark ? 'dark' : 'light'
    }
  }

  const isDark = computed(() => theme.global.name.value === 'dark')

  return { toggleTheme, initTheme, isDark }
}
