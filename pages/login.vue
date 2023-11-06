<template>
  <div class="max-w-5xl mx-auto mt-5 px-5">
    <p class="mb-3">
      Once logged in the session will expire in 15 seconds.
    </p>
    <form class="flex flex-col gap-4" @submit.prevent="submit">
      <div class="flex items-center gap-3">
        <input v-model="username" type="text" placeholder="Username (jsmith)">
        <input v-model="password" type="password" placeholder="Password (hunter2)">
      </div>
      <button type="submit" class="flex items-center justify-center space-x-2 bg-green-500 text-white rounded-lg py-2 px-3">
        <span>Login</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ auth: false })
const { signIn } = useAuth()

const username = ref('')
const password = ref('')

const submit = () => {
  signIn({
    username: username.value,
    password: password.value
  }, { callbackUrl: '/' })
}
</script>

<style scoped>
input {
    @apply py-2 px-3 rounded w-full;
}
</style>
