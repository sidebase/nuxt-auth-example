<script lang="ts" setup>
defineProps<{
  href?: string,
  protectionType?: string
}>()
</script>

<template>
  <div class="text-center mt-10">
    <h1 class="text-2xl font-bold">
      I'm a secret!
    </h1>
    <h3>My protection works via an <a :href="href" target="_blank">{{ protectionType }} middleware</a>.</h3>
  </div>
</template>

<style scoped>
a {
  @apply text-green-600 underline hover:text-green-500;
}
</style>
