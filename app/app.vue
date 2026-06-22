<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { watch } from 'vue'

const theme = useTheme()
const themeCookie = useCookie('theme', { default: () => 'dark' })

// Set the theme on startup (SSR and CSR compatible)
theme.global.name.value = themeCookie.value

// Watch for changes to the theme and update the cookie
watch(() => theme.global.name.value, (newTheme) => {
  themeCookie.value = newTheme
})
</script>

<style>
/* Global styles can be added here */
</style>
