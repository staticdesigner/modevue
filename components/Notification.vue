<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="-1"
    :vertical="$vuetify.breakpoint.mdAndDown"
    :dark="$vuetify.theme.dark"
    :light="!$vuetify.theme.dark"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <div class="text-center">
        <v-btn
          color="info"
          class="ml-0"
          small
          v-bind="attrs"
          @click="snackbar = false"
        >
          More info
        </v-btn>
        <v-btn
          color="primary ml-3 mr-auto"
          small
          v-bind="attrs"
          @click="snackbar = false"
        >
          Accept
        </v-btn>
      </div>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: true,
      text: `We use cookies to give you the best user experience.`,
    }
  },
}
</script>

<style></style>
