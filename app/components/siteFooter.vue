<template>
  <v-footer
    :class="[footerClass, 'site-footer']"
  >
    <v-container>
      <v-divider class="mb-5"></v-divider>
      <v-row>
        <v-col cols="12" md="7">
          <div class="d-flex flex-wrap justify-md-start justify-center">
            <template v-for="(s, i) in menu" :key="i">
              <a
                class="text-secondary pa-1 pa-md-0"
                :href="s.link"
                v-text="s.text"
              />

              <v-responsive
                v-if="i < menu.length - 1"
                class="mx-4 shrink d-none d-md-flex"
                max-height="18"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>
        <v-col class="text-secondary text-center text-md-right">
          {{ new Date().getFullYear() }} ©
          <NuxtLink class="text-primary" to="/">ModeVue</NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const footerClass = computed(() => {
  return isDark.value
    ? 'bg-blue-grey-darken-4 text-grey-lighten-1'
    : 'bg-grey-lighten-3 text-grey-darken-4'
})

interface FooterMenuItem {
  text: string;
  link: string;
}

const menu: FooterMenuItem[] = [
  { text: 'Support', link: '#' },
  { text: 'Contact Us', link: '#' },
  { text: 'Disclaimer', link: '#' },
  { text: 'Covid-19 Operation', link: '#' },
]
</script>

<style>
.site-footer a {
  text-decoration: none;
}
</style>
