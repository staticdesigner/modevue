<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="-1"
    :vertical="mdAndDown"
  >
    <div :class="mdAndDown ? 'd-flex flex-column ga-3 w-100' : 'd-flex align-center justify-space-between w-100'">
      <div class="text-body-1 text-left">
        {{ text }}
      </div>
      <div class="d-flex justify-end ga-3">
        <v-btn
          color="info"
          variant="elevated"
          @click="snackbar = false"
        >
          More Info
        </v-btn>
        <v-btn
          color="primary"
          variant="elevated"
          @click="snackbar = false"
        >
          Accept
        </v-btn>
      </div>
    </div>
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()

const snackbar = ref(true)
const text = ref('We use cookies to give you the best user experience.')
</script>

<style scoped>
</style>
