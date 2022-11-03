<template>
  <div class="w-full max-w-5xl mx-auto bg-white px-5 py-4 rounded-t shadow-xl">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <h1 class="text-lg">
          Not logged in
        </h1>
      </div>
      <button class="flex items-center justify-center space-x-2 bg-green-500 text-white rounded-lg py-2 px-3 text-lg" @click="$emit('signIn')">
        <i class="fa fa-right-to-bracket pt-0.5" />
        <span>Login</span>
      </button>
    </div>
  </div>
</template>
