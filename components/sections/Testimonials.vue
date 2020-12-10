<template>
  <section
    id="testimonials"
    :class="$vuetify.theme.dark ? 'black' : 'white'"
    class="py-16"
  >
    <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-8 my-8">
      Customer Reviews
    </h2>
    <v-carousel
      cycle
      draggable="true"
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="(item, i) in testimonials" :key="i" class="">
        <v-container fill-height>
          <div style="max-width: 700px" class="mx-auto text-center">
            <v-avatar size="128" class="mb-7">
              <img
                :src="`/team/${item.avtar}`"
                alt="John"
                width="128"
                height="128"
              />
            </v-avatar>
            <h3
              :class="
                $vuetify.theme.dark
                  ? 'black'
                  : 'white grey--text text--darken-2'
              "
              class="mb-1 font-weight-black text-uppercase"
            >
              {{ item.name }}
            </h3>
            <div class="mb-10 font-weight-light grey--text text-uppercase">
              {{ item.post }}
            </div>
            <v-row>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-open</v-icon
                ></v-col
              >
              <v-col cols="10">
                <div
                  :class="
                    $vuetify.theme.dark
                      ? 'black'
                      : 'white grey--text text--darken-2'
                  "
                  class="mb-5 font-italic"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam aspernatur, sint recusandae cum temporibus quos saepe
                  repellendus consectetur et reprehenderit. Ratione ipsam
                  consequuntur quo eligendi mollitia veniam facere possimus
                  inventore.
                </div>
              </v-col>
              <v-col cols="1"
                ><v-icon x-large class="grey--text text--lighten-1"
                  >mdi-format-quote-close</v-icon
                ></v-col
              >
            </v-row>
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
      testimonials: [
        {
          avtar: 'person-4.jpg',
          name: 'Mario Speedwagon',
          post: 'Creative Editor of ABC LTD',
        },
        {
          avtar: 'person-8.jpg',
          name: 'Petey Cruiser',
          post: 'CEO of Json LLC',
        },
        {
          avtar: 'person-7.jpg',
          name: 'Anna Sthesia',
          post: 'Director of Cleaner LTD',
        },
        {
          avtar: 'person-10.jpg',
          name: 'Paul Molive',
          post: 'Manager of Torson LTD',
        },
        {
          avtar: 'person-9.jpg',
          name: 'Gail Forcewind',
          post: 'Human Resource Manager of Humibed LLC',
        },
      ],
    }
  },
}
</script>
