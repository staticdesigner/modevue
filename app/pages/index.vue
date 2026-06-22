<template>
  <section id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <sectionsHero />
        <sectionsIntro />
        <sectionsCalloutBlock />
        <sectionsFeatures />
        <sectionsBrands />
        <sectionsTestimonials />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'ModeVue - A carefully crafted, multi-purpose, responsive, and gorgeous website theme.'
    }
  ]
})
</script>

<style scoped>
</style>
