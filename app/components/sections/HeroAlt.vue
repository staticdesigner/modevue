<template>
  <section id="hero">
    <v-img
      v-for="(item, i) in heroAlt"
      :key="i"
      width="100%"
      height="30vh"
      :src="`${baseURL}${item.src}`"
      cover
      class="gradient-fill"
    >
      <v-container class="fill-height d-flex align-center">
        <v-row>
          <v-col>
            <h1
              class="text-md-display-medium text-sm-headline-large text-headline-large font-weight-black text-center text-white"
            >
              {{ item.heading.toUpperCase() }}
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRuntimeConfig } from '#imports'

defineProps({
  heroAlt: {
    type: Array as () => { src: string; heading: string }[],
    default: () => [],
  },
})

const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')
</script>

<style>
.gradient-fill .v-img__img {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.7),
    rgba(5, 11, 31, 0.7)
  );
}
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.7),
    rgba(5, 11, 31, 0.7)
  );
}
</style>
