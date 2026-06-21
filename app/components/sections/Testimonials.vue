<template>
  <section
    id="testimonials"
    :class="[isDark ? 'bg-black' : 'bg-white', 'py-16']"
  >
    <h2 class="text-headline-large text-md-display-medium text-center font-weight-black mb-8 my-8">
      Customer Reviews
    </h2>
    <v-carousel
      cycle
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in testimonials" :key="i">
        <v-container class="fill-height d-flex align-center">
          <div style="max-width: 700px" class="mx-auto text-center">
            <v-avatar size="128" class="mb-7">
              <v-img
                :src="`${baseURL}team/${item.avtar}`"
                alt="Avatar"
              />
            </v-avatar>
            <h3
              :class="isDark ? 'text-white' : 'text-grey-darken-2'"
              class="mb-1 font-weight-black text-uppercase"
            >
              {{ item.name }}
            </h3>
            <div class="mb-10 font-weight-light text-grey text-uppercase">
              {{ item.post }}
            </div>
            <v-row>
              <v-col cols="1">
                <v-icon size="x-large" class="text-grey-lighten-1"
                  >mdi-format-quote-open</v-icon
                >
              </v-col>
              <v-col cols="10">
                <div
                  :class="isDark ? 'text-white' : 'text-grey-darken-2'"
                  class="mb-5 font-italic"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam aspernatur, sint recusandae cum temporibus quos saepe
                  repellendus consectetur et reprehenderit. Ratione ipsam
                  consequuntur quo eligendi mollitia veniam facere possimus
                  inventore.
                </div>
              </v-col>
              <v-col cols="1">
                <v-icon size="x-large" class="text-grey-lighten-1"
                  >mdi-format-quote-close</v-icon
                >
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import { useRuntimeConfig } from '#imports'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')

interface Testimonial {
  avtar: string
  name: string
  post: string
}

const testimonials = ref<Testimonial[]>([
  {
    avtar: 'person-4.jpg',
    name: 'Mario Speedwagon',
    post: 'Creative Editor of ABC LTD',
  },
  {
    avtar: 'person-8.jpg',
    name: 'Petey Cruiser',
    post: 'CEO of Json LLC',
  },
  {
    avtar: 'person-7.jpg',
    name: 'Anna Sthesia',
    post: 'Director of Cleaner LTD',
  },
  {
    avtar: 'person-10.jpg',
    name: 'Paul Molive',
    post: 'Manager of Torson LTD',
  },
  {
    avtar: 'person-9.jpg',
    name: 'Gail Forcewind',
    post: 'Human Resource Manager of Humibed LLC',
  },
])
</script>

<style scoped>
</style>
