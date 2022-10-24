<template>
    <div class="w-full max-w-5xl mx-auto bg-white px-5 py-4 rounded shadow-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img
              class="w-12 h-12 rounded"
              src="https://avatars.githubusercontent.com/u/25911230?v=4"
              alt="User Avatar"
          />
          <h1 class="text-lg">
            Authenticated as Nils!
          </h1>
        </div>
        <button type="button" @click="$emit('logout')">
          Sign out
        </button>
      </div>
    </div>
    <div class="bg-white max-w-5xl w-full mx-auto rounded shadow-lg py-4 px-5 overflow-y-auto">
          <pre class="bg-gray-800 text-gray-200 p-4 rounded shadow my-2 overflow-x-auto">
{
  "user": {
    "name": "Nils",
    "email": "demo@demo.com",
    "image": "https://avatars.githubusercontent.com/u/25911230?v=4"
  },
  "expires": "2022-11-23T12:59:46.226Z"
}</pre>
    </div>
</template>
