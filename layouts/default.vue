<template>
  <v-app dark>
    <siteHeader />
    <v-main>
      <nuxt />
      <footerTop />
    </v-main>
    <siteFooter />
    <Notification />
    <Settings />
  </v-app>
</template>

<script>
import siteHeader from '~/components/siteHeader.vue'
import footerTop from '~/components/footerTop.vue'
import siteFooter from '~/components/siteFooter.vue'
export default {
  components: {
    siteHeader,
    footerTop,
    siteFooter,
  },
  head() {
    return {
      script: [
        // Add custom script files for this layout here, e.g.:
        // { src: 'https://example.com/custom-script.js' }
      ],
    }
  },
}
</script>

<style></style>
