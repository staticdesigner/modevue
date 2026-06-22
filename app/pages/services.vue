<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <sectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <h2
            class="text-headline-large text-md-display-medium text-center font-weight-black text-capitalize"
          >
            What we do
          </h2>
          <p class="text-title-large text-uppercase font-weight-light text-center my-16">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse
            condimentum porttitor cursumus.
          </p>
          <v-row>
            <v-col
              v-for="(card, index) in cards"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              xl="2"
              class="text-center"
            >
              <v-avatar size="80" class="mb-5" color="primary">
                <v-icon size="large">
                  {{ card.icon }}
                </v-icon>
              </v-avatar>
              <div
                class="text-title-medium text-uppercase mt-1 mb-4"
                v-text="card.title"
              ></div>
              <p v-text="card.text"></p>
            </v-col>
          </v-row>
        </v-container>
        <sectionsPricing />
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'

interface HeroAltItem {
  src: string;
  heading: string;
}

interface Card {
  title: string;
  text: string;
  icon: string;
}

const heroAlt = ref<HeroAltItem[]>([
  {
    src: 'pexels-ekaterina-bolovtsova-4048767.jpg',
    heading: ' Services ',
  },
])

const cards = ref<Card[]>([
  {
    title: 'Material Design',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    icon: 'mdi-material-design',
  },
  {
    title: 'Powerful template',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    icon: 'mdi-flash',
  },
  {
    title: 'Retina Ready',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    icon: 'mdi-eye',
  },
  {
    title: 'Fast Loading',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    icon: 'mdi-rocket',
  },
  {
    title: 'Unlimited Colors',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    icon: 'mdi-infinity',
  },
  {
    title: 'Premium Sliders',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    icon: 'mdi-view-carousel',
  },
])

useHead({
  title: 'Services',
  meta: [
    {
      name: 'description',
      content:
        'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
    },
  ],
})
</script>

<style scoped>
</style>
