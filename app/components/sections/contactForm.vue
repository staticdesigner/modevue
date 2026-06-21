<template>
  <v-form>
    <v-row class="mb-n6">
      <v-col><v-text-field label="Name" density="compact" variant="outlined"></v-text-field></v-col>
      <v-col><v-text-field label="Email" density="compact" variant="outlined"></v-text-field></v-col>
    </v-row>

    <v-row class="mb-n6">
      <v-col
        ><v-text-field label="Subject" density="compact" variant="outlined"></v-text-field
      ></v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-textarea
          density="compact"
          label="Your Message"
          auto-grow
          variant="outlined"
          rows="8"
          row-height="20"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-btn class="my-2" color="primary">SEND MESSAGE</v-btn
        ><v-btn class="my-2 ml-3">clear</v-btn></v-col
      >
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
// Form logic can be added here
</script>

<style scoped>
</style>
