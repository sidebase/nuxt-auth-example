<template>
  <Secret protection-type="inline" href="https://github.com/sidebase/nuxt-auth#inline-middlewares" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: async () => {
    await useSession()
  }
})
</script>
