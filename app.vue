<template>
  <div class="min-h-screen h-full relative bg-gray-100 pb-20">
    <Navbar />
    <div class="fixed bottom-0 w-full">
      <Authenticated v-if="data && status === 'authenticated'" :user-data="data.user" @signOut="() => signOut({ callbackUrl: '/' })" />
      <NotAuthenticated v-else @signIn="signIn" />
    </div>
    <Welcome />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { data, status, signOut, signIn } = await useSession({ required: false })

useHead({
  title: '🔐 nuxt-auth-example',
})
</script>
