<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <sectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <v-row>
            <v-col
              v-for="n in 120"
              :key="n"
              class="d-flex child-flex"
              cols="4"
              xl="3"
            >
              <v-img
                :src="`https://picsum.photos/700?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="bg-grey-lighten-2 rounded-lg"
                cover
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0 align-center justify-center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
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

const heroAlt = ref<HeroAltItem[]>([
  {
    src: 'pexels-andrea-piacquadio-3830745.jpg',
    heading: ' Gallery ',
  },
])

useHead({
  title: 'Gallery',
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
