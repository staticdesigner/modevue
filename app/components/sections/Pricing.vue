<template>
  <section :class="[isDark ? 'bg-black' : 'bg-white', 'py-16']">
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col class="text-center">
              <h2
                class="text-headline-large text-md-display-medium text-center font-weight-black text-capitalize mb-4"
              >
                The most affordable pricing
              </h2>

              <p class="my-10 text-title-medium">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <div class="text-center">
                <v-btn-toggle
                  v-model="planDuration"
                  selected-class="bg-primary-darken-1"
                  variant="flat"
                  divided
                  mandatory
                >
                  <v-btn value="monthly"> Monthly Plan </v-btn>
                  <v-btn value="yearly"> Yearly Plan </v-btn>
                </v-btn-toggle>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mx-auto" style="max-width: 1200px">
        <v-col v-for="(plan, ix) in plans" :key="`plan-${ix}`" cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 24 : plan.elevation"
              :color="plan.color"
              max-width="400"
              :class="[isHovering ? 'zoom' : 'notzoom', 'mx-auto', 'transition-swing']"
            >
              <h3
                class="text-headline-large text-center font-weight-black text-white pt-5"
                v-text="plan.plan"
              ></h3>
              <v-card-text
                class="text-center text-subtitle-1 text-white py-2"
                v-text="plan.description"
              ></v-card-text>
              <v-card-subtitle
                class="text-headline-small font-weight-black text-center text-white pt-0"
              >
                {{ planDuration === 'monthly' ? plan.monthly : plan.yearly }}
                <span class="text-subtitle-1"
                  >per {{ planDuration === 'monthly' ? 'month' : 'year' }}</span
                >
              </v-card-subtitle>
              <v-list>
                <v-list-item
                  v-for="(feature, ik) in plan.features"
                  :key="`feature-${ik}`"
                  :prepend-icon="feature.icon"
                  :title="feature.text"
                  class="text-capitalize"
                  density="compact"
                >
                </v-list-item>
                <v-list-item>
                  <v-btn
                    color="primary"
                    size="large"
                    block
                    rounded
                    class="mx-auto my-3"
                  >
                    Buy Now
                  </v-btn>
                </v-list-item>
              </v-list>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const planDuration = ref('monthly')

interface PlanFeature {
  icon: string
  text: string
}

interface Plan {
  plan: string
  elevation: number
  color: string
  description: string
  monthly: string
  yearly: string
  features: PlanFeature[]
}

const plans = ref<Plan[]>([
  {
    plan: 'Basic',
    elevation: 0,
    color: 'primary-darken-1',
    description: 'Best Plan for Small Businesses',
    monthly: '$10',
    yearly: '$100',
    features: [
      {
        icon: 'mdi-web',
        text: '5 websites',
      },
      {
        icon: 'mdi-harddisk',
        text: '10 GB storage',
      },
      {
        icon: 'mdi-signal',
        text: '500 GB bandwidth',
      },
      {
        icon: 'mdi-account',
        text: '10 email addreses',
      },
      {
        icon: 'mdi-domain',
        text: 'free domain with annual plan',
      },
      {
        icon: 'mdi-server',
        text: '4X processing power',
      },
      {
        icon: 'mdi-dns',
        text: 'premium DNS',
      },
    ],
  },
  {
    plan: 'Silver',
    elevation: 16,
    color: 'green-darken-2',
    description: 'Best Plan for Professional Users',
    monthly: '$40',
    yearly: '$400',
    features: [
      {
        icon: 'mdi-web',
        text: '5 websites',
      },
      {
        icon: 'mdi-harddisk',
        text: '10 GB storage',
      },
      {
        icon: 'mdi-signal',
        text: '500 GB bandwidth',
      },
      {
        icon: 'mdi-account',
        text: '10 email addreses',
      },
      {
        icon: 'mdi-domain',
        text: 'free domain with annual plan',
      },
      {
        icon: 'mdi-server',
        text: '4X processing power',
      },
      {
        icon: 'mdi-dns',
        text: 'premium DNS',
      },
    ],
  },
  {
    plan: 'Gold',
    elevation: 0,
    color: 'orange-darken-3',
    description: 'Best Plan for Power Users',
    monthly: '$100',
    yearly: '$1000',
    features: [
      {
        icon: 'mdi-web',
        text: 'unlimited websites',
      },
      {
        icon: 'mdi-harddisk',
        text: 'unlimited storage',
      },
      {
        icon: 'mdi-signal',
        text: 'unlimited bandwidth',
      },
      {
        icon: 'mdi-account',
        text: 'unlimited addresses',
      },
      {
        icon: 'mdi-domain',
        text: 'free domain with annual plan',
      },
      {
        icon: 'mdi-server',
        text: '4X processing power',
      },
      {
        icon: 'mdi-dns',
        text: 'premium DNS',
      },
    ],
  },
])
</script>

<style scoped>
.zoom {
  transform: scale(1.025) translate(0, -10px);
  transition: transform 0.2s;
}
.notzoom {
  transition: transform 0.2s;
}
</style>
