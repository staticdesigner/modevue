<template>
  <div class="settings text-center">
    <v-menu
      v-model="settings"
      max-width="400"
      origin="top right"
      transition="scale-transition"
      offset-y
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn large dark class="pl-0 btn-settings" v-bind="attrs" v-on="on">
          <v-icon color="white"> mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn small fab depressed text dark @click="settings = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text class="text-center">
          <div class="text-subtitle-2 mt-4 font-weight-black text--primary">
            Theme Colors
          </div>
          <div class="text-center mt-4 d-flex justify-center">
            <v-avatar
              color="pink"
              class="d-inline-flex ma-2"
              style="cursor: pointer"
              size="46"
              @click="themeColor('#e91e63')"
            ></v-avatar>
            <v-avatar
              color="cyan"
              class="d-inline-flex ma-2"
              style="cursor: pointer"
              size="46"
              @click="themeColor('#00bcd4')"
            ></v-avatar>
            <v-avatar
              color="#1976d2"
              class="d-inline-flex ma-2"
              style="cursor: pointer"
              size="46"
              @click="themeColor('#1976d2')"
            ></v-avatar>
            <v-avatar
              color="#4CAF50"
              class="d-inline-flex ma-2"
              style="cursor: pointer"
              size="46"
              @click="themeColor('#4CAF50')"
            ></v-avatar>
            <v-avatar
              color="teal"
              class="d-inline-flex ma-2"
              style="cursor: pointer"
              size="46"
              @click="themeColor('#009688')"
            ></v-avatar>
          </div>

          <v-divider class="my-5"></v-divider>

          <div class="text-subtitle-2 mb-4 font-weight-black text--primary">
            Switch Theme to Dark/Light
          </div>

          <v-btn
            :outlined="$vuetify.theme.dark"
            class="ma-1"
            depressed
            color="primary"
            @click="toggleMode(1)"
          >
            Light
            <v-icon right> mdi-white-balance-sunny </v-icon>
          </v-btn>

          <v-btn
            :outlined="!$vuetify.theme.dark"
            class="ma-1"
            depressed
            color="primary"
            @click="toggleMode(0)"
          >
            Dark
            <v-icon right> mdi-weather-night </v-icon>
          </v-btn>

          <v-divider class="my-5"></v-divider>

          <v-btn
            outlined
            class="mb-3"
            href="https://github.com/staticdesigner/modevue/archive/refs/tags/1.1.0.zip"
            >Free Download</v-btn
          >

          <!-- <br />

          <v-btn large rounded color="error lighten-2" elevation="5">
            Go Premium
            <v-icon right>mdi-rocket-launch</v-icon>
          </v-btn>

          <p class="mx-2 my-5">
            Under <strong>Premium</strong>, we setup your site using this theme
            with the required customization.
          </p> -->
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: false,
    }
  },
  methods: {
    toggleMode(color) {
      if (color === 1) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    },
    themeColor(color) {
      this.$vuetify.theme.themes.dark.primary = color
      this.$vuetify.theme.themes.light.primary = color
    },
  },
}
</script>

<style>
.settings {
  position: fixed;
  top: 150px;
  right: -20px;
  z-index: 500;

  border-radius: 5px 0 0 5px;
}
.settings .btn-settings {
  opacity: 0.45;
}
.settings .btn-settings:hover {
  opacity: 1;
}
/* chat window style */
#titlediv {
  font-family: Roboto, sans-serif;
}
.zsiq_theme1.zsiq_floatmain {
  z-index: 100 !important;
}
</style>
