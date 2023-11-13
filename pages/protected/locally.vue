<template>
  <div class="text-center mt-10">
    <h1 class="text-2xl font-bold">
      I am publicly available!
    </h1>
    <h3>The global protecting is disabled via <a href="https://sidebase.io/nuxt-auth/application-side/protecting-pages#disabling-the-global-middleware-locally" target="_blank">local middleware</a>.</h3>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ auth: false })
</script>

<style scoped>
a {
  @apply text-green-600 underline hover:text-green-500;
}
</style>
