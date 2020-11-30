<template>
  <v-footer
    :class="
      $vuetify.theme.dark
        ? 'blue-grey darken-4 grey--text text--lighten-1'
        : 'grey lighten-3 grey--text text--darken-4'
    "
    class="site-footer"
  >
    <v-container>
      <v-divider class="mb-5"></v-divider>
      <v-row>
        <v-col cols="12" md="7"
          ><div
            class="d-flex flex-wrap justify-md-start justify-center justify-md-none"
          >
            <template v-for="(s, i) in menu">
              <a
                :key="i"
                class="text--secondary pa-1 pa-md-0"
                :href="s.link"
                v-text="s.text"
              />

              <v-responsive
                v-if="i < menu.length - 1"
                :key="`divider-${i}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="18"
              >
                <v-divider vertical />
              </v-responsive>
            </template></div
        ></v-col>
        <v-col class="text--secondary text-center text-md-right">
          {{ new Date().getFullYear() }} ©
          <nuxt-link class="primary--text" to="/">ModeVue</nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { text: 'Support', link: '#' },
        { text: 'Contact Us', link: '#' },
        { text: 'Disclaimer', link: '#' },
        { text: 'Covid-19 Operation', link: '#' },
      ],
    }
  },
}
</script>

<style>
.site-footer a {
  text-decoration: none;
}
</style>
