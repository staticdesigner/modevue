<template>
  <section
    id="footer-top"
    :class="sectionClass"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="py-12">
          <v-row no-gutters>
            <v-col cols="12">
              <Logo />
            </v-col>
            <v-col cols="12">
              <p class="mt-8 text-justify" style="max-width: 400px">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                pariatur quidem, quis modi iure nihil commodi suscipit, corporis
                dicta adipisci, voluptatum quia cupiditate. Nulla minus
                voluptatum nostrum deleniti, asperiores facere.
              </p>
            </v-col>
            <v-col cols="12">
              <v-list lines="two" class="bg-transparent">
                <v-list-item
                  prepend-icon="mdi-map-marker"
                  title="ADDRESS"
                  subtitle="1400 Main Street, Orlando, FL 79938"
                ></v-list-item>
                <v-divider></v-divider>
                <v-list-item prepend-icon="mdi-email" title="EMAIL">
                  <template v-slot:subtitle>
                    <div>info@example.com</div>
                    <div>support@example.com</div>
                  </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item prepend-icon="mdi-phone" title="PHONE">
                  <template v-slot:subtitle>
                    <div>(323) 555-6789</div>
                    <div>(650) 555-1234</div>
                  </template>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
              <div class="d-flex justify-center mt-5">
                <v-btn
                  v-for="(socialm, i) in social"
                  :key="`social-${i}`"
                  class="d-flex"
                  icon
                  size="large"
                  color="primary"
                  :href="socialm.link"
                  target="_blank"
                >
                  <v-icon>{{ socialm.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="text-center d-none d-md-flex py-12">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="12" md="5" class="py-12">
          <h3 class="mb-8">SEND YOUR MESSAGE</h3>
          <sectionsFooterContactForm />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const sectionClass = computed(() => {
  return isDark.value
    ? 'bg-blue-grey-darken-4 text-grey-lighten-1'
    : 'bg-grey-lighten-3 text-grey-darken-4'
})

interface SocialLink {
  platform: string
  link: string
  icon: string
}

const social: SocialLink[] = [
  {
    platform: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: 'mdi-facebook',
  },
  {
    platform: 'Twitter',
    link: 'https://twitter.com/',
    icon: 'mdi-twitter',
  },
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: 'mdi-instagram',
  },
  {
    platform: 'Linkedin',
    link: 'https://www.linkedin.com/',
    icon: 'mdi-linkedin',
  },
  {
    platform: 'Github',
    link: 'https://github.com/staticdesigner/modevue',
    icon: 'mdi-github',
  },
]
</script>

<style scoped>
</style>
