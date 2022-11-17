<template>
  <Secret protection-type="named" href="https://github.com/sidebase/nuxt-auth#named-middlewares" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>
