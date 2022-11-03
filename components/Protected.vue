<template>
  <div class="text-center mt-10">
    <h1 class="text-2xl font-bold">This route is protected!</h1>
    <h3>{{route.path}} can only be accessed when logged in. Please login below.</h3>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";

const route = useRoute()
</script>
