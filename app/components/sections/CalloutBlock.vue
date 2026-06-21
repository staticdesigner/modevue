<template>
  <section
    :class="[sectionClass, 'py-16']"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12" sm="7" class="text-center">
              <h2
                class="text-headline-large text-md-display-medium text-center font-weight-black text-capitalize mb-4"
              >
                callout header here
              </h2>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </v-col>
            <v-col class="align-self-center text-center" cols="12" sm="5">
              <v-btn size="x-large" color="primary" rounded>Callout Button</v-btn>
            </v-col>
          </v-row>
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
    ? 'bg-grey-darken-4 text-primary'
    : 'bg-grey-lighten-4 text-primary'
})
</script>

<style scoped>
</style>
