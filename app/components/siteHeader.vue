<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact">
        <template v-for="(item, i) in items" :key="i">
          <v-list-item
            v-if="!item.submenu"
            :to="item.to"
            :prepend-icon="item.icon"
            :title="item.title.toUpperCase()"
            color="primary"
          ></v-list-item>
          <v-list-group v-else :value="item.title">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="item.icon"
                :title="item.title.toUpperCase()"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="child in item.submenu"
              :key="child.title"
              :to="child.to"
              :title="child.title"
            ></v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar scroll-behavior="elevate hide" height="64">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = true" />
      <NuxtLink to="/" class="ps-2 ps-md-4 d-flex text-decoration-none">
        <Logo />
      </NuxtLink>
      <v-spacer />

      <template v-for="(name, menuitem) in items" :key="menuitem">
        <template v-if="name.submenu">
          <v-menu
            open-on-hover
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                class="py-5 submenubtn d-none d-md-flex"
                :ripple="false"
                v-bind="props"
                style="height: auto"
              >
                {{ name.title }}
                <v-icon end size="small" class="mx-0">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list density="compact">
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="index"
                :to="item.to"
                :title="item.title"
                :active="false"
              ></v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-btn
          v-else
          variant="plain"
          class="py-8 d-none d-md-flex"
          :to="name.to"
          >{{ name.title }}</v-btn
        >
      </template>
      <v-spacer />

      <v-btn icon @click="changeThemeColor">
        <v-icon>{{
          isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const drawer = ref(false)
const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

const changeThemeColor = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

interface MenuItem {
  icon: string;
  title: string;
  to: string;
  submenu?: { title: string; to: string }[];
}

const items = ref<MenuItem[]>([
  {
    icon: 'mdi-folder-home-outline',
    title: 'HOME',
    to: '/',
  },
  {
    icon: 'mdi-account',
    title: 'ABOUT',
    to: '/about',
  },
  {
    icon: 'mdi-tools',
    title: 'SERVICES',
    to: '/services',
    submenu: [
      {
        title: 'Services Page',
        to: '/services',
      },
      {
        title: 'Static Websites',
        to: '/#',
      },
      {
        title: 'Mobile Applications',
        to: '/#',
      },
      {
        title: 'Corporate websites',
        to: '/#',
      },
      {
        title: 'Editorial Sites',
        to: '/#',
      },
      {
        title: 'Ecommerce and Store',
        to: '/#',
      },
      {
        title: 'Block Chain Devemopment',
        to: '/#',
      },
    ],
  },
  {
    icon: 'mdi-cash-usd',
    title: 'PRICING',
    to: '/pricing',
  },
  {
    icon: 'mdi-folder-image',
    title: 'GALLERY',
    to: '/gallery',
  },
  {
    icon: 'mdi-blogger',
    title: 'BLOG',
    to: '/blog',
  },
  {
    icon: 'mdi-contacts',
    title: 'CONTACT',
    to: '/contact',
  },
])
</script>

<style scoped>
.submenubtn {
  cursor: default;
}
</style>
