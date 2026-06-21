<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <sectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col md="5" cols="12">
              <div class="text-title-large font-weight-bold mb-5">Our Office</div>
              <v-list lines="two" class="bg-transparent">
                <v-list-item title="ADDRESS" subtitle="1400 Main Street, Orlando, FL 79938">
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-map-marker</v-icon>
                  </template>
                </v-list-item>

                <v-list-item title="EMAIL">
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-email</v-icon>
                  </template>
                  <template v-slot:subtitle>
                    <div>info@example.com</div>
                    <div>support@example.com</div>
                  </template>
                </v-list-item>

                <v-list-item title="PHONE">
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-phone</v-icon>
                  </template>
                  <template v-slot:subtitle>
                    <div>(323) 555-6789</div>
                    <div>(650) 555-1234</div>
                  </template>
                </v-list-item>
              </v-list>
              <div class="text-title-large font-weight-bold mt-12 mb-5">
                Business Hours
              </div>
              <v-list lines="two" class="bg-transparent">
                <v-list-item title="MONDAY to FRIDAY" subtitle="9am to 5pm">
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-clock</v-icon>
                  </template>
                </v-list-item>

                <v-list-item title="SATURDAY" subtitle="9am to 2pm">
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-clock</v-icon>
                  </template>
                </v-list-item>

                <v-list-item title="SUNDAY" subtitle="cLOSED">
                  <template v-slot:prepend>
                    <v-icon color="primary">mdi-clock</v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col md="7" cols="12">
              <div class="text-headline-large font-weight-black mb-8">Contact Us</div>
              <p class="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <sectionsContactForm />
            </v-col>
          </v-row>
        </v-container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.285388316138!2d-81.37969424867693!3d28.531140482371708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77b041135b063%3A0x13aab64f9cc768fc!2s1400%20Main%20Ln%2C%20Orlando%2C%20FL%2032801%2C%20USA!5e0!3m2!1sen!2sin!4v1606230494596!5m2!1sen!2sin"
          width="100%"
          height="600"
          frameborder="0"
          style="border: 0; display: block"
          allowfullscreen="true"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '#imports'

interface HeroAltItem {
  src: string;
  heading: string;
}

const heroAlt = ref<HeroAltItem[]>([
  {
    src: 'pexels-andrea-piacquadio-3830745.jpg',
    heading: ' Contact Us ',
  },
])

useHead({
  title: 'Contact Us',
  meta: [
    {
      name: 'description',
      content:
        'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
    },
  ],
})
</script>

<style scoped>
#footer-top {
  display: none !important;
}
</style>
