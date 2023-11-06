<script setup lang="ts">
useHead({
  title: '🔐 nuxt-auth-example'
})
</script>

<template>
  <div class="min-h-screen h-full relative bg-gray-100 pb-20">
    <Navbar />
    <div class="fixed bottom-0 w-full">
      <AuthenticationStatus />
    </div>
    <Welcome />
    <NuxtPage />
  </div>
</template>
