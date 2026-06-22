<template>
  <div class="settings text-center">
    <v-menu
      v-model="settings"
      max-width="400"
      origin="top right"
      transition="scale-transition"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">
        <v-btn size="large" class="pl-0 btn-settings" v-bind="props">
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn size="small" icon variant="text" @click="settings = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text class="text-center">
          <div class="text-subtitle-2 mt-4 font-weight-bold">
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

          <div class="text-subtitle-2 mb-4 font-weight-bold">
            Switch Theme to Dark/Light
          </div>

          <v-btn
            :variant="isDark ? 'outlined' : 'flat'"
            class="ma-1"
            color="primary"
            @click="toggleMode(1)"
          >
            Light
            <v-icon end>mdi-white-balance-sunny</v-icon>
          </v-btn>

          <v-btn
            :variant="!isDark ? 'outlined' : 'flat'"
            class="ma-1"
            color="primary"
            @click="toggleMode(0)"
          >
            Dark
            <v-icon end>mdi-weather-night</v-icon>
          </v-btn>

          <v-divider class="my-5"></v-divider>

          <v-btn
            variant="outlined"
            class="mb-3"
            :href="downloadUrl"
            target="_blank"
            >Free Download</v-btn
          >
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import pkg from '../../package.json'

const settings = ref(false)
const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

const downloadUrl = computed(() => {
  return `https://github.com/staticdesigner/modevue/archive/refs/tags/${pkg.version}.zip`
})

const toggleMode = (color: number) => {
  theme.global.name.value = color === 1 ? 'light' : 'dark'
}

const themeColor = (color: string) => {
  theme.themes.value.dark.colors.primary = color
  theme.themes.value.light.colors.primary = color
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
