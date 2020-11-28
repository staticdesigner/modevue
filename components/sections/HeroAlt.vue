<template>
  <section id="hero">
    <v-img
      v-for="(item, i) in heroAlt"
      :key="i"
      width="100%"
      height="30vh"
      :src="item.src"
      class="gradient-fill"
      dark
    >
      <v-container fill-height>
        <v-row>
          <v-col>
            <h1
              class="text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"
            >
              {{ item.heading.toUpperCase() }}
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  props: {
    heroAlt: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.7),
    rgba(5, 11, 31, 0.7)
  );
}
</style>
