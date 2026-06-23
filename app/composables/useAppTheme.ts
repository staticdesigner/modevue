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

  const isDark = computed(() => theme.global.name.value === 'dark')

  return { toggleTheme, isDark }
}
