<template>
  <v-form>
    <v-text-field label="Name" density="compact" variant="outlined"></v-text-field>
    <v-text-field label="Email" density="compact" variant="outlined"></v-text-field>
    <v-text-field label="Subject" density="compact" variant="outlined"></v-text-field>
    <v-textarea
      density="compact"
      label="Your Message"
      auto-grow
      variant="outlined"
      rows="8"
      row-height="20"
    ></v-textarea>
    <v-btn variant="outlined" block color="primary">SEND MESSAGE</v-btn>
  </v-form>
</template>

<script setup lang="ts">
// Form logic can be added here
</script>

<style scoped>
</style>
