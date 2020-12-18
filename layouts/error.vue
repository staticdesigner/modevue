<template>
  <v-app dark :class="$vuetify.theme.dark ? 'grey darken-4' : 'white'">
    <section id="error">
      <v-row no-gutters>
        <v-col cols="12">
          <v-container class="py-16 text-center">
            <v-row>
              <v-col cols="12">
                <div v-if="error.statusCode === 404">
                  <span class="text-h5 text-sm-h4 text--disabled">
                    {{ pageNotFound }}
                  </span>
                  <div class="pt-16">
                    <v-img
                      src="/404.svg"
                      lazy-src="404.svg"
                      max-width="700"
                      class="mx-auto"
                    >
                    </v-img>
                    <div class="mt-4">
                      <small
                        ><a
                          class="text--primary text--disabled text-decoration-none"
                          href="https://www.freepik.com/vectors/business"
                          >Business vector created by pikisuperstar -
                          www.freepik.com</a
                        ></small
                      >
                    </div>
                  </div>
                </div>
                <div v-else class="text-h5 text-sm-h4 text--disabled">
                  {{ otherError }}
                </div>
                <p class="pt-16 text-uppercase">
                  Go to
                  <NuxtLink class="text-decoration-none" to="/">
                    Home page
                  </NuxtLink>
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </section>
  </v-app>
</template>

<script>
export default {
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Page you are looking for could not be found.',
      otherError: 'An error occurred',
      title404: '404 error',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.title404 : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
