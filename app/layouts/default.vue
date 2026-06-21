<template>
  <v-app>
    <siteHeader />
    <v-main>
      <slot />
      <footerTop />
    </v-main>
    <siteFooter />
    <Notification />
    <Settings />
  </v-app>
</template>

<script setup lang="ts">
// Nuxt 3/4 layout uses <slot /> instead of <nuxt />
// Components like siteHeader, footerTop, siteFooter, Notification, and Settings are auto-imported.
</script>

<style scoped>
</style>
