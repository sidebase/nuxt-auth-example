<template>
    <div class="w-full max-w-sm mx-auto px-5 py-4 rounded">
      <div class="flex flex-col justify-center space-y-4">
        <button class="flex items-center justify-center space-x-2 bg-gray-700 text-white rounded-lg py-2 px-3 text-lg" @click="$emit('login')">
          <i class="fa-brands fa-github pt-0.5" />
          <span>Sign in with Github</span>
        </button>
        <hr class="border-gray-400" />
        <button class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg py-2 px-3 text-lg opacity-75 cursor-not-allowed">
          <i class="fa-brands fa-google pt-0.5" />
          <span>Sign in with Google</span>
        </button>
        <button class="flex items-center justify-center space-x-2 bg-blue-500 text-white rounded-lg py-2 px-3 text-lg opacity-75 cursor-not-allowed">
          <i class="fa-brands fa-facebook pt-0.5" />
          <span>Sign in with Facebook</span>
        </button>
      </div>
    </div>
</template>
