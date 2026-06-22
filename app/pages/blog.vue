<template>
  <section :class="[!isDark ? 'bg-grey-lighten-4' : '']">
    <v-row no-gutters>
      <v-col cols="12">
        <sectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="8" lg="8" xl="8" class="py-16">
          <v-row>
            <v-col
              v-for="post in 10"
              :key="post"
              cols="12"
              sm="6"
              md="6"
              lg="6"
              xl="6"
            >
              <v-card max-width="450" class="mx-auto" elevation="1">
                <v-img
                  height="200px"
                  :src="`${baseURL}pexels-moose-photos-1036641.jpg`"
                  cover
                />
                
                <div class="px-4 pt-4 text-caption font-weight-bold d-flex align-center">
                  <span class="text-primary mr-2">ADMIN</span>
                  <span class="text-grey-darken-1" style="font-size: 0.65rem;">OCTOBER 13, 2020</span>
                </div>

                <v-card-item class="py-1">
                  <v-card-title class="text-h6 font-weight-bold text-high-emphasis text-wrap" style="line-height: 1.4;">
                    Check out the new mansion we got for our eSports team!
                  </v-card-title>
                </v-card-item>

                <v-card-text class="text-body-2 text-medium-emphasis pb-2 pt-1 text-left">
                  An online streamer, also known as a live streamer, internet
                  streamer, or streamer, is a person who broadcasts themself
                  online through a live stream or pre-recorded video. The scope
                  of online streamers has grown to includ...
                  <NuxtLink to="#" class="text-primary text-decoration-none font-weight-bold ml-1">READ MORE</NuxtLink>
                </v-card-text>

                <div class="d-flex align-center px-4 pb-4 pt-2 text-body-2 text-medium-emphasis">
                  <v-icon color="yellow-darken-2" class="mr-1">mdi-comment</v-icon>
                  <span class="mr-6">15</span>
                  
                  <v-icon color="orange" class="mr-1">mdi-heart</v-icon>
                  <span class="mr-6">45K</span>
                  
                  <v-icon color="primary" class="mr-1">mdi-share-variant</v-icon>
                  <span>25K</span>
                </div>
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
        <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="py-16">
          <aside>
            <v-text-field
              clearable
              density="compact"
              variant="outlined"
              placeholder="Search..."
              append-inner-icon="mdi-magnify"
              class="mb-6"
              bg-color="grey-lighten-4"
              hide-details
            >
            </v-text-field>
            
            <v-card class="mb-6" elevation="1">
              <div
                class="text-subtitle-1 font-weight-black text-uppercase text-center pt-4"
              >
                Categories
              </div>
              <v-list density="compact" class="bg-transparent px-4">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :title="item.text"
                  link
                  class="px-0 py-1 text-body-2 text-medium-emphasis"
                >
                </v-list-item>
              </v-list>
            </v-card>

            <v-card class="mb-6" elevation="1">
              <div
                class="text-subtitle-1 font-weight-black text-uppercase text-center pt-4"
              >
                Tags
              </div>
              <v-card-text class="px-4 pb-4">
                <div class="d-flex flex-wrap ga-2">
                  <v-chip
                    v-for="tag in tags"
                    :key="tag"
                    variant="flat"
                    color="grey-lighten-3"
                    class="text-grey-darken-4 font-weight-medium text-caption"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>

            <v-card class="mb-6" elevation="1">
              <div
                class="text-subtitle-1 font-weight-black text-uppercase text-center pt-4"
              >
                Recent Comments
              </div>
              <v-list lines="three" density="compact" class="bg-transparent">
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
