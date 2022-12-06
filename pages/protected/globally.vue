<template>
  <Secret v-if="status === 'authenticated'" protection-type="global" href="https://github.com/sidebase/nuxt-auth#global-middleware" />
  <Protected v-else />
</template>

<script lang="ts" setup>
const { status } = useSession()
</script>
