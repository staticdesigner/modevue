<template>
  <section class="bg-primary-darken-1 text-white py-16">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2 class="text-headline-large text-md-display-medium text-center font-weight-black">
            Build your website with this Theme
          </h2>
          <div
            class="text-headline-small text-md-headline-large text-center font-weight-black py-3 mb-10"
          >
            Purchase now. Only $49!
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-avatar
            size="80"
            class="text-h4 bg-white font-weight-bold text-primary mb-5"
            style="opacity: 1"
          >
            {{ card.callout }}
          </v-avatar>
          <div class="text-title-medium text-uppercase mt-1 mb-4" v-text="card.title"></div>

          <p v-text="card.text"></p>
          <v-row no-gutters>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-btn size="x-large" rounded color="white" class="text-primary mx-auto mt-10 px-16">
          <v-icon start>mdi-check-bold</v-icon>Buy It Now
        </v-btn>
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
    title: 'Material Design',
    subtitle: 'Best Productivity',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    callout: '01',
  },
  {
    title: 'Affordable Prices',
    subtitle: 'Special Offers',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    callout: '02',
  },
  {
    title: 'Fast Loading',
    subtitle: 'Income Flow',
    text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
    callout: '03',
  },
])
</script>

<style scoped>
</style>
