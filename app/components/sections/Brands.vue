<template>
  <section
    id="sponsors"
    :class="sectionClass"
  >
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" class="align-self-center">
          <h3
            :class="[isDark ? 'text-grey' : '', 'text-headline-medium', 'text-center', 'font-weight-light', 'mb-xs-4']"
          >
            OUR SPONSORS
          </h3>
        </v-col>
        <v-col cols="12" sm="8">
          <v-slide-group show-arrows>
            <template v-for="(l, ii) in brandsLogo" :key="l">
              <v-slide-group-item>
                <v-card
                  :class="[isDark ? 'bg-white' : 'bg-grey-lighten-4', 'mx-4', 'pa-0']"
                  height="90"
                  width="140"
                  variant="flat"
                >
                  <v-img
                    height="90"
                    :src="`${baseURL}brands/${l}`"
                  ></v-img>
                </v-card>
              </v-slide-group-item>
              <v-responsive
                v-if="ii < brandsLogo.length - 1"
                :key="`divider-${ii}`"
                height="50"
                class="my-auto"
              >
                <v-divider vertical></v-divider>
              </v-responsive>
            </template>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import { useRuntimeConfig } from '#imports'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const sectionClass = computed(() => {
  return isDark.value ? 'bg-grey-darken-4' : 'bg-grey-lighten-4'
})

const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')

const brandsLogo = ref<string[]>([
  'logo-12.svg',
  'logo-17.svg',
  'logo-25.svg',
  'logo-26.svg',
  'logo-20.svg',
  'logo-11.svg',
  'logo-1.svg',
  'logo-22.svg',
  'logo-23.svg',
  'logo-16.svg',
  'logo-8.svg',
])
</script>

<style scoped>
</style>
