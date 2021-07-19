<template>
  <section :class="this.$vuetify.theme.dark ? '' : 'grey lighten-4'">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" xl="10" lg="9" md="8" sm="8" class="py-16">
          <v-row>
            <v-col
              v-for="post in 10"
              :key="post"
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="3"
            >
              <v-card max-width="450" class="mx-auto" elevation="1">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="pexels-moose-photos-1036641.jpg"
                >
                </v-img>
                <v-card-subtitle class="pb-0">
                  <v-btn href="#" text small color="primary" class="px-0"
                    >Admin</v-btn
                  >
                  <v-btn text small disabled class="px-0"
                    >October 13, 2020</v-btn
                  >
                </v-card-subtitle>
                <v-card-text
                  class="title font-weight-bold mt-3 pb-0 text--primary"
                  style="line-height: 1.8rem"
                >
                  Check out the new mansion we got for our eSports team!
                </v-card-text>
                <v-card-text class="text--primary">
                  An online streamer, also known as a live streamer, internet
                  streamer, or streamer, is a person who broadcasts themself
                  online through a live stream or pre-recorded video. The scope
                  of online streamers has grown to includ...
                  <v-btn href="#" small text color="primary">Read More</v-btn>
                </v-card-text>

                <v-card-actions>
                  <v-btn icon color="yellow darken-1"
                    ><v-icon>mdi-comment</v-icon></v-btn
                  >
                  <span class="text--disabled">15</span>
                  <v-spacer></v-spacer>
                  <v-btn icon color="orange"> <v-icon>mdi-heart</v-icon> </v-btn
                  ><span class="text--disabled mr-2">45K</span>
                  <v-btn icon color="primary">
                    <v-icon>mdi-share-variant</v-icon> </v-btn
                  ><span class="text--disabled">25K</span>
                  <span class="mr-4"></span>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-center">
            <div class="text-center">
              <v-container>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-container class="max-width">
                      <v-pagination
                        v-model="page"
                        circle
                        class="my-4"
                        :length="15"
                      ></v-pagination>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-col>
        <v-col cols="12" xl="2" lg="3" md="4" sm="4" class="py-16">
          <aside>
            <v-text-field
              clearable
              dense
              flat
              outlined
              placeholder="Search..."
              append-icon="mdi-magnify"
              class="mb-6"
              hide-details
            >
            </v-text-field>
            <v-card outlined class="mb-6">
              <div
                class="subtitle font-weight-black text-uppercase text-center mt-4"
              >
                Categories
              </div>
              <v-list dense>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <v-card outlined class="mb-6">
              <div
                class="subtitle font-weight-black text-uppercase text-center mt-4"
              >
                Tags
              </div>
              <v-card-text>
                <v-chip-group column>
                  <v-chip v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-card-text>
            </v-card>
            <v-card outlined class="mb-6">
              <div
                class="subtitle font-weight-black text-uppercase text-center mt-4"
              >
                Recent Comments
              </div>

              <v-list three-line dense>
                <template v-for="(item, index) in comments">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  ></v-subheader>

                  <v-divider v-else-if="item.divider" :key="index"></v-divider>

                  <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-text="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </aside>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: ' Blog ',
        },
      ],
      posts: [
        {
          id: '',
          title: 'Hello World',
          postImage: '',
          publishedOn: '',
          lastUpdated: '',
          author: '',
          tags: '',
          category: '',
          excerpt: '',
          content: '',
        },
      ],
      page: 2,
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
      items: [
        { text: 'Technology' },
        { text: 'Health' },
        { text: 'News' },
        { text: 'Recent Discovery' },
        { text: 'Lifestyle and Fitness' },
        { text: 'Fashion' },
        { text: 'Music' },
      ],
      comments: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Ali Connors',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex Scott',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Trevor Hansen',
          subtitle:
            'Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Britta Holt',
          subtitle:
            'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Blog',
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
