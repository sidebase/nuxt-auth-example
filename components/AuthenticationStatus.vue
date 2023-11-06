<script setup lang="ts">
const { status, data, signOut, signIn } = useAuth()
</script>

<template>
  <div class="w-full max-w-5xl mx-auto bg-white px-5 py-4 rounded-t shadow-xl">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <img
          v-if="status === 'authenticated' && data?.user?.image"
          class="w-12 h-12 rounded-full"
          :src="data.user.image"
          alt="User Avatar"
        >
        <h1 v-if="status === 'authenticated'" class="text-lg">
          Authenticated as {{ data?.user?.name }}!
        </h1>
        <h1 v-else>
          Not logged in
        </h1>
      </div>
      <button v-if="status === 'authenticated'" class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg py-2 px-3 text-lg" @click="signOut({ callbackUrl: '/' })">
        <span>Logout</span>
      </button>
      <button v-else class="flex items-center justify-center space-x-2 bg-green-500 text-white rounded-lg py-2 px-3 text-lg" @click="signIn()">
        <i class="fa fa-right-to-bracket pt-0.5" />
        <span>Login</span>
      </button>
    </div>
  </div>
</template>
