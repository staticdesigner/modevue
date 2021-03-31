<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col cols="12">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize"
              >
                Who we are?
              </h2>
              <h3
                class="text-h4 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                …Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. emo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit
              </p>
            </v-col>
          </v-row>
        </v-container>
        <SectionsTeam :our-team="ourTeam" />

        <v-row no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-canva-studio-3277806.jpg"
              lazy-src="pexels-canva-studio-3277806.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Vision</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium. Doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="flex-row-reverse">
          <v-col cols="12" md="6" align-self="center">
            <v-img
              max-height="800"
              src="pexels-rfstudio-3810792.jpg"
              lazy-src="pexels-rfstudio-3810792.jpg"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black">Our Mission</h2>
              <h3
                class="text-h5 text-uppercase font-weight-thin text-center my-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium. Doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. emo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos
              </p>
            </div>
          </v-col>
        </v-row>

        <SectionsTimeline />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-moose-photos-1036641.jpg',
          heading: ' About Us ',
        },
      ],
      ourTeam: [
        {
          name: 'John Churchill',
          position: 'Marketing Director',
          phone: '+1 (987) 1625346',
          email: 'john@example.com',
          photo: 'person-1.jpg',
        },
        {
          name: 'Fiona	Ross',
          position: 'Project Manager',
          phone: '+1 (987) 5894684',
          email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'Justin	Rees',
          position: 'VP Marketing',
          phone: '+1 (987) 6982456',
          email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'Amelia	Ogden',
          position: 'Communication Manager',
          phone: '+1 (987) 6982456',
          email: 'amelia@example.com',
          photo: 'person-4.jpg',
        },
        {
          name: 'Sebastian Bailey',
          position: 'Advertising Director',
          phone: '+1 (987) 6982456',
          email: 'sebastian@example.com',
          photo: 'person-5.jpg',
        },
        {
          name: 'Eric Sutton',
          position: 'Advertising Executive',
          phone: '+1 (987) 6982456',
          email: 'audrey@example.com',
          photo: 'person-6.jpg',
        },
        {
          name: 'Xia Yen',
          position: 'Advertising Manager',
          phone: '+1 (987) 6982456',
          email: 'christian@example.com',
          photo: 'person-7.jpg',
        },
        {
          name: 'Bernadette	Springer',
          position: 'Employee Relations Manager',
          phone: '+1 (987) 6982456',
          email: 'bernadette@example.com',
          photo: 'person-8.jpg',
        },
        {
          name: 'Elizabeth Newman',
          position: 'Project Manager',
          phone: '+1 (987) 6982456',
          email: 'elizabeth@example.com',
          photo: 'person-9.jpg',
        },
      ],
    }
  },
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>
