<template>
  <div class="max-w-5xl mx-auto mt-5 px-5">
    <h3 class="text-xl font-bold ">
      Authentication Overview
    </h3>
    <p class="text-sm">
      See all available authentication & session information below.
    </p>
    <pre v-if="status"><span>Status:</span> {{ status }}</pre>
    <pre v-if="data"><span>Data:</span> {{ data }}</pre>
    <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
    <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ auth: false })
const { data, status, getCsrfToken, getProviders } = useAuth()

const providers = await getProviders()
const csrfToken = await getCsrfToken()
</script>

<style scoped>
pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-green-400;
}
</style>
