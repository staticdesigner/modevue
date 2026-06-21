<template>
  <section
    :class="[isDark ? 'bg-grey-darken-4' : 'bg-grey-lighten-4', 'py-16']"
  >
    <v-container fluid class="text-center">
      <v-row>
        <v-col>
          <h2 class="text-headline-large text-sm-display-medium text-capitalize font-weight-black mb-4">
            Our Core Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in ourTeam" :key="`person-${i}`">
          <v-sheet class="py-12 px-6 rounded-xl" variant="outlined">
            <v-avatar size="240">
              <v-img
                :src="`${baseURL}team/${item.photo}`"
                :lazy-src="`${baseURL}team/${item.photo}`"
                alt="Team member"
              />
            </v-avatar>
            <div class="text-headline-small text-uppercase font-weight-black mt-6 mb-2">
              {{ item.name }}
            </div>
            <div class="text-disabled text-uppercase">
              {{ item.position }}
            </div>
            <div class="text-title-large font-weight-black mt-8">{{ item.phone }}</div>
            <div class="text-subtitle-1 mt-3">{{ item.email }}</div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useRuntimeConfig } from '#imports'

defineProps({
  ourTeam: {
    type: Array as () => { photo: string; name: string; position: string; phone: string; email: string }[],
    default: () => [],
  },
})

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')
</script>

<style scoped>
</style>
