<script lang="ts">
export default {
  props: {
    userData: Object,
  }
}
</script>

<template>
    <div class="w-full max-w-5xl mx-auto bg-white px-5 py-4 rounded-t shadow-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img
              class="w-12 h-12 rounded-full"
              :src="userData.image"
              alt="User Avatar"
          />
          <h1 class="text-lg">
            Authenticated as {{userData.name}}!
          </h1>
        </div>
        <button class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg py-2 px-3 text-lg" @click="$emit('signOut')">
          <span>Logout</span>
        </button>
      </div>
    </div>
</template>
