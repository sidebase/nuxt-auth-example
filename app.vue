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
import { useSession } from '#imports'
import Authenticated from "~/components/Authenticated.vue";
import NotAuthenticated from "~/components/NotAuthenticated.vue";
import Navbar from "~/components/Navbar.vue";
import {useHead} from "#head";
import Welcome from "~/components/Welcome.vue";
const { data, status, signOut, signIn } = await useSession({ required: false })

useHead({
  title: '🔐 nuxt-user-example',
})
</script>
