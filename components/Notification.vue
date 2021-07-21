<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="-1"
    :dark="$vuetify.theme.dark"
    :light="!$vuetify.theme.dark"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="info" small v-bind="attrs" @click="snackbar = false">
        More info
      </v-btn>
      <v-btn
        color="primary ml-3"
        small
        v-bind="attrs"
        @click="snackbar = false"
      >
        Accept
      </v-btn>
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
