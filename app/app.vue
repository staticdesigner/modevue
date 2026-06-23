<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppTheme } from '~/composables/useAppTheme'

const { initTheme } = useAppTheme()

// Must be onMounted — localStorage is client-only.
// This restores the saved theme before the user sees any flicker.
onMounted(() => {
  initTheme()
})
</script>

<style>
/* Global styles can be added here */
</style>
