<template>
  <Secret protection-type="inline" href="https://github.com/sidebase/nuxt-auth#inline-middlewares" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: async () => {
    console.log('in inline middleware! protecting secrets')
    await useSession({ callbackUrl: '/protected/inline' })
  }
})
</script>
