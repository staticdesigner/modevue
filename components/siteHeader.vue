<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title.toUpperCase()" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app hide-on-scroll height="64" elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <nuxt-link to="/" class="d-flex">
        <Logo />
      </nuxt-link>
      <v-spacer />
      <v-tabs class="hidden-sm-and-down ml-auto" optional right>
        <v-tab
          v-for="(name, tab) in items"
          :key="tab"
          :to="name.to"
          nuxt
          :ripple="false"
          active-class="text--primary"
          class="font-weight-bold"
          :tabindex="tab + 1"
        >
          {{ name.title }}
        </v-tab>
      </v-tabs>

      <v-btn icon @click="changeThemeColor">
        <v-icon>{{
          $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-folder-home-outline',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-tools',
          title: 'Services',
          to: '/services',
        },
        {
          icon: 'mdi-cash-usd',
          title: 'Pricing',
          to: '/pricing',
        },
        {
          icon: 'mdi-folder-image',
          title: 'Gallery',
          to: '/gallery',
        },
        {
          icon: 'mdi-blogger',
          title: 'Blog',
          to: '/blog',
        },
        {
          icon: 'mdi-contacts',
          title: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
  methods: {
    changeThemeColor() {
      if (this.$vuetify.theme.dark === true) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    },
  },
}
</script>
