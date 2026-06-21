<template>
  <section :class="[!isDark ? 'bg-grey-lighten-4' : '']">
    <v-row no-gutters>
      <v-col cols="12">
        <sectionsHeroAlt :hero-alt="heroAlt" />
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
                  class="text-white align-end"
                  height="200px"
                  :src="`${baseURL}pexels-moose-photos-1036641.jpg`"
                  cover
                >
                </v-img>
                <v-card-subtitle class="pb-0">
                  <v-btn href="#" variant="text" size="small" color="primary" class="px-0"
                    >Admin</v-btn
                  >
                  <v-btn variant="text" size="small" disabled class="px-0"
                    >October 13, 2020</v-btn
                  >
                </v-card-subtitle>
                <v-card-text
                  class="text-title-large font-weight-bold mt-3 pb-0 text-primary"
                  style="line-height: 1.8rem"
                >
                  Check out the new mansion we got for our eSports team!
                </v-card-text>
                <v-card-text class="text-primary">
                  An online streamer, also known as a live streamer, internet
                  streamer, or streamer, is a person who broadcasts themself
                  online through a live stream or pre-recorded video. The scope
                  of online streamers has grown to includ...
                  <v-btn href="#" size="small" variant="text" color="primary">Read More</v-btn>
                </v-card-text>

                <v-card-actions>
                  <v-btn icon color="yellow-darken-1" variant="text"
                    ><v-icon>mdi-comment</v-icon></v-btn
                  >
                  <span class="text-disabled">15</span>
                  <v-spacer></v-spacer>
                  <v-btn icon color="orange" variant="text"> <v-icon>mdi-heart</v-icon> </v-btn
                  ><span class="text-disabled mr-2">45K</span>
                  <v-btn icon color="primary" variant="text">
                    <v-icon>mdi-share-variant</v-icon> </v-btn
                  ><span class="text-disabled">25K</span>
                  <span class="mr-4"></span>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="page"
                      class="my-4"
                      :length="15"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
        <v-col cols="12" xl="2" lg="3" md="4" sm="4" class="py-16">
          <aside>
            <v-text-field
              clearable
              density="compact"
              variant="outlined"
              placeholder="Search..."
              append-icon="mdi-magnify"
              class="mb-6"
              hide-details
            >
            </v-text-field>
            <v-card variant="outlined" class="mb-6">
              <div
                class="text-subtitle-1 font-weight-black text-uppercase text-center mt-4"
              >
                Categories
              </div>
              <v-list density="compact">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :title="item.text"
                  color="primary"
                >
                </v-list-item>
              </v-list>
            </v-card>
            <v-card variant="outlined" class="mb-6">
              <div
                class="text-subtitle-1 font-weight-black text-uppercase text-center mt-4"
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
            <v-card variant="outlined" class="mb-6">
              <div
                class="text-subtitle-1 font-weight-black text-uppercase text-center mt-4"
              >
                Recent Comments
              </div>

              <v-list lines="three" density="compact">
                <template v-for="(item, index) in comments" :key="index">
                  <v-list-subheader
                    v-if="item.header"
                    v-text="item.header"
                  ></v-list-subheader>

                  <v-divider v-else-if="item.divider"></v-divider>

                  <v-list-item
                    v-else
                    :prepend-avatar="item.avatar"
                    :title="item.title"
                    :subtitle="item.subtitle"
                  >
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

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import { useHead, useRuntimeConfig } from '#imports'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const config = useRuntimeConfig()
const baseURL = computed(() => config.app.baseURL || '/')

interface HeroAltItem {
  src: string;
  heading: string;
}

interface CategoryItem {
  text: string;
}

interface CommentItem {
  header?: string;
  divider?: boolean;
  inset?: boolean;
  avatar?: string;
  title?: string;
  subtitle?: string;
}

const heroAlt = ref<HeroAltItem[]>([
  {
    src: 'pexels-andrea-piacquadio-3884440.jpg',
    heading: ' Blog ',
  },
])

const page = ref(2)

const tags = ref<string[]>([
  'Work',
  'Home Improvement',
  'Vacation',
  'Food',
  'Drawers',
  'Shopping',
  'Art',
  'Tech',
  'Creative Writing',
])

const items = ref<CategoryItem[]>([
  { text: 'Technology' },
  { text: 'Health' },
  { text: 'News' },
  { text: 'Recent Discovery' },
  { text: 'Lifestyle and Fitness' },
  { text: 'Fashion' },
  { text: 'Music' },
])

const comments = ref<CommentItem[]>([
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Ali Connors',
    subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  },
  { divider: true, inset: true },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Alex Scott',
    subtitle: "Wish I could come, but I'm out of town this weekend.",
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
    subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
  },
  { divider: true, inset: true },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Britta Holt',
    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
])

useHead({
  title: 'Blog',
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
</style>
