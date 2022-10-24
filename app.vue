<script>
import Authenticated from "./components/Authenticated";
import NotAuthenticated from "./components/NotAuthenticated";

export default {
  components: {Authenticated, NotAuthenticated},
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
  <div class="Background flex flex-col justify-center h-screen py-10 gap-2">
      <div class="text-center mb-10">
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
      <Authenticated v-if="isAuthenticated" @logout="logout()" />
      <NotAuthenticated v-else @login="login()" />
  </div>
</template>

<style scoped>
.Background {
  background: #00bf8f;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #064939, #00bf8f);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #064939, #00bf8f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
