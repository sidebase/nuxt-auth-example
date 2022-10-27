<template>
  <Secret protection-type="named" href="https://github.com/sidebase/nuxt-user#named-middlewares" />
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'
import Secret from "~/components/Secret.vue";

definePageMeta({
  middleware: ['auth']
})
</script>
