<template>
  <v-form>
    <v-text-field label="Name" color="primary" density="compact" variant="outlined"></v-text-field>
    <v-text-field label="Email" color="primary"  density="compact" variant="outlined"></v-text-field>
    <v-text-field label="Subject" color="primary" density="compact" variant="outlined"></v-text-field>
    <v-textarea
      color="primary"
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
