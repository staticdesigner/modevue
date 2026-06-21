<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="-1"
    :vertical="mdAndDown"
  >
    {{ text }}

    <template v-slot:actions>
      <div class="text-center">
        <v-btn
          color="info"
          class="ml-0"
          size="small"
          @click="snackbar = false"
        >
          More info
        </v-btn>
        <v-btn
          color="primary"
          class="ml-3 mr-auto"
          size="small"
          @click="snackbar = false"
        >
          Accept
        </v-btn>
      </div>
    </template>
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
