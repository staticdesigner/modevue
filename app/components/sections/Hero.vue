<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      cycle
      show-arrows="hover"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="`${baseURL}${carousel.src}`"
        cover
        class="gradient-fill"
      >
        <v-container class="fill-height d-flex align-center">
          <div style="max-width: 600px">
            <div
              class="text-md-display-medium mb-3 text-sm-headline-large text-headline-small font-weight-black text-white"
            >
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5 text-white">{{ carousel.subHeading }}</p>
            <v-btn
              :size="smAndUp ? 'x-large' : 'default'"
              class="my-3"
              color="primary"
              >Get Started</v-btn
            >
            <span class="mx-2 my-4"></span>
            <v-btn
              :size="smAndUp ? 'x-large' : 'default'"
              variant="outlined"
              class="my-3 text-white"
            >
              <v-icon start size="large" color="primary">mdi-play</v-icon>
              Learn More
            </v-btn>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useRuntimeConfig } from '#imports'

const { smAndUp } = useDisplay()
const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')

interface CarouselItem {
  src: string
  heading: string
  subHeading: string
}

const carouselsData = ref<CarouselItem[]>([
  {
    src: 'pexels-andrea-piacquadio-3884440.jpg',
    heading: ' PROMOTE YOUR BUSINESS WITH US ',
    subHeading:
      'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem ',
  },
  {
    src: 'pexels-peter-olexa-4012966.jpg',
    heading: ' LOREM IPSUM DOLOR SIT AMET CONSEETU',
    subHeading:
      'Litora a interdum primis. Lectus facilisi sit cum arcu aliquam velit imperdiet sapien suspendisse at vel facilisis. Facilisis metus, curae; nibh mi orci et. Fringilla sociis magna rutrum bibendum arcu.',
  },
  {
    src: 'pexels-thirdman-5961072.jpg',
    heading: ' Build your website with this Theme ',
    subHeading:
      'Tellus cum turpis natoque id justo interdum tincidunt faucibus aptent congue pellentesque. Proin luctus orci netus! Scelerisque parturient cursus donec parturient et, luctus aptent habitant aliquet felis. Sapien placerat ultricies.',
  },
  {
    src: 'pexels-andrea-piacquadio-3830745.jpg',
    heading: ' URNA TINCIDUNT MATTIS TORTOR ',
    subHeading:
      'Dapibus cras, ligula suspendisse potenti himenaeos mus volutpat pulvinar est facilisi. Vehicula malesuada parturient euismod litora mollis penatibus. Penatibus cum nullam facilisi enim nisi ac suspendisse. Ullamcorper ad amet netus.',
  },
])
</script>

<style>
.gradient-fill .v-img__img {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.75),
    rgba(5, 11, 31, 0.65)
  );
}
/* Fallback if v-responsive__content is still used by style */
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.75),
    rgba(5, 11, 31, 0.65)
  );
}
</style>
