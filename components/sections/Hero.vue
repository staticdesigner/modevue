<template>
  <section id="hero">
    <v-carousel
      height="calc(100vh - 64px)"
      dark
      cycle
      show-arrows-on-hover
      draggable="true"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        class="gradient-fill"
      >
        <v-container fill-height>
          <div style="max-width: 600px">
            <div class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black">
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5">{{ carousel.subHeading }}</p>
            <v-btn :x-large="$vuetify.breakpoint.smAndUp" class="my-3 primary"
              >Get Started</v-btn
            >
            <span class="mx-2 my-4"></span>
            <v-btn
              :x-large="$vuetify.breakpoint.smAndUp"
              text
              class="my-3"
              outlined
              ><v-icon left large color="primary">mdi-play</v-icon>Learn
              More</v-btn
            >
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carouselsData: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: ' PROMOTE YOUR BUSINESS WITH US ',
          subHeading:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem ',
        },
        {
          src: 'pexels-peter-olexa-4012966.jpg',
          heading: ' LOREM IPSUM DOLOR SIT AMET CONSEETU',
          subHeading:
            'Litora a interdum primis. Lectus facilisi sit cum arcu aliquam velit imperdiet sapien suspendisse at vel facilisis. Facilisis metus, curae; nibh mi orci et. Fringilla sociis magna rutrum bibendum arcu.',
        },
        {
          src: 'pexels-thirdman-5961072.jpg',
          heading: ' Build your website with this Theme ',
          subHeading:
            'Tellus cum turpis natoque id justo interdum tincidunt faucibus aptent congue pellentesque. Proin luctus orci netus! Scelerisque parturient cursus donec parturient et, luctus aptent habitant aliquet felis. Sapien placerat ultricies.',
        },
        {
          src: 'pexels-andrea-piacquadio-3830745.jpg',
          heading: ' URNA TINCIDUNT MATTIS TORTOR ',
          subHeading:
            'Dapibus cras, ligula suspendisse potenti himenaeos mus volutpat pulvinar est facilisi. Vehicula malesuada parturient euismod litora mollis penatibus. Penatibus cum nullam facilisi enim nisi ac suspendisse. Ullamcorper ad amet netus.',
        },
      ],
    }
  },
}
</script>

<style>
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    to right,
    rgba(3, 12, 41, 0.75),
    rgba(5, 11, 31, 0.65)
  );
}
</style>
