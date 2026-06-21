<template>
  <section id="intro" class="py-16">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="600">
        <v-avatar color="primary" size="70" class="mb-8">
          <v-icon size="x-large">mdi-web</v-icon>
        </v-avatar>
        <h2 class="text-headline-large text-md-display-medium text-center font-weight-black mb-7">
          The Perfect Theme for Beginners or Professionals
        </h2>
        <p class="text-title-medium font-weight-light">
          ModeVue — is a carefully crafted multi-purpose, responsive, and
          gorgeous theme. Built with
          <strong>Vue.js</strong>
          and
          <strong>Nuxt.js</strong>, it comes with the features you need to
          quickly start developing your application.
        </p>
      </v-responsive>

      <v-row class="pt-12">
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <v-row no-gutters>
            <v-col :cols="card.callout ? 9 : 12">
              <div class="pr-2">
                <div class="text-disabled" v-text="card.subtitle"></div>
                <h4
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em"
                  v-text="card.title"
                ></h4>
                <p v-text="card.text"></p>
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <span
                class="text-h3 text-grey font-weight-bold pr-8"
                style="opacity: 0.1"
                >{{ card.callout }}</span
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Card {
  title: string
  subtitle: string
  text: string
  callout: string
}

const cards = ref<Card[]>([
  {
    title: 'Best Productivity',
    subtitle: 'Professionally developed',
    text: 'All components and features are developed using the most up-to-date coding practices.',
    callout: '01',
  },
  {
    title: 'Fast & optimized',
    subtitle: 'Performance',
    text: 'Themes are designed for maximum performance and are semantically structured to maximize SEO.',
    callout: '02',
  },
  {
    title: 'Built on Vuetify',
    subtitle: 'Material Design',
    text: "Being developed with Vuetify means you have access to all of the framework's available features.",
    callout: '03',
  },
])
</script>

<style scoped>
</style>
