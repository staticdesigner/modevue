<template>
  <v-app :theme="themeCookie">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
import { useCookie } from '#imports'

const themeCookie = useCookie('theme', { default: () => 'dark' })
</script>

<style>
/* Global styles can be added here */
</style>
