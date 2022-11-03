<template>
  <Secret protection-type="inline" href="https://github.com/sidebase/nuxt-user#inline-middlewares" />
</template>

<script setup lang="ts">
import { useSession, definePageMeta } from '#imports'
import Secret from "~/components/Secret.vue";

definePageMeta({
  middleware: async () => {
    await useSession()
  }
})
</script>
