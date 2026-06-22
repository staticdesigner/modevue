<template>
  <v-app :class="isDark ? 'bg-grey-darken-4' : 'bg-white'">
    <section id="error">
      <v-row no-gutters>
        <v-col cols="12">
          <v-container class="py-16 text-center">
            <v-row>
              <v-col cols="12">
                <div v-if="error.statusCode === 404">
                  <span class="text-headline-small text-sm-headline-medium text-disabled">
                    {{ pageNotFound }}
                  </span>
                  <div class="pt-16">
                    <v-img
                      :src="`${baseURL}404.svg`"
                      :lazy-src="`${baseURL}404.svg`"
                      max-width="700"
                      class="mx-auto"
                    >
                    </v-img>
                    <div class="mt-4">
                      <small>
                        <a
                          class="text-disabled text-decoration-none"
                          href="https://www.freepik.com/vectors/business"
                          target="_blank"
                          >Business vector created by pikisuperstar - www.freepik.com</a
                        >
                      </small>
                    </div>
                  </div>
                </div>
                <div v-else class="text-headline-small text-sm-headline-medium text-disabled">
                  {{ otherError }}
                </div>
                <p class="pt-16 text-uppercase">
                  Go to
                  <NuxtLink class="text-decoration-none text-primary" to="/" @click.prevent="handleError">
                    Home page
                  </NuxtLink>
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </section>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useHead, clearError, useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')

const props = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 404, message: '' })
  }
})

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const pageNotFound = 'Page you are looking for could not be found.'
const otherError = 'An error occurred'
const title404 = '404 error'

const errorTitle = computed(() => {
  return props.error.statusCode === 404 ? title404 : otherError
})

useHead({
  title: errorTitle.value
})

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
