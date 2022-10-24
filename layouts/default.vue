<script>
import Authenticated from "../components/Authenticated";
import NotAuthenticated from "../components/NotAuthenticated";
import Navigation from "../components/Navigation";

export default {
  components: {Navigation, Authenticated, NotAuthenticated},
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    login() {
      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    }
  }
}
</script>

<template>
  <div class="Background flex flex-col min-h-screen py-5 gap-2">
    <div class="fixed bottom-0 w-full">
      <Authenticated v-if="isAuthenticated" @logout="logout()" />
      <NotAuthenticated v-else @login="login()" />
    </div>
    <div class="text-center my-10">
      <h1 class="text-8xl text-white font-bold">nuxt-user</h1>
      <p class="text-xl text-white">Quick and easy user authentication for Nuxt3!</p>
      <div class="flex items-center space-x-6 text-green-200 text-2xl justify-center mt-6">
        <a href="https://github.com/sidebase/nuxt-user" target="_blank">
          <i class="fa-brands fa-github" />
        </a>
        <a href="https://twitter.com/sidebase_io" target="_blank">
          <i class="fa-brands fa-twitter" />
        </a>
        <a href="https://sidebase.io" target="_blank">
          <i class="fa fa-globe" />
        </a>
      </div>
    </div>
    <div>
      <Navigation />
      <div class="bg-white max-w-5xl w-full mx-auto rounded-b rounded-r shadow-lg py-4 px-5 overflow-y-auto">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style scoped>
.Background {
  background: #00bf8f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #064939, #00bf8f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #064939, #00bf8f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
