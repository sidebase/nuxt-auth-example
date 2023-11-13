<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://github.com/sidebase/nuxt-auth" target="_blank" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">🔐 nuxt-auth</span>
      </a>
      <div id="navbar-default" class="w-full md:w-auto">
        <ul class="flex flex-col md:p-4 mt-4 py-2 bg-gray-50 rounded-lg border md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
          <li>
            <nuxt-link
              href="/"
              class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/protected/globally"
              class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Globally Protected
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/protected/locally"
              class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Locally Unprotected
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              href="/api-routes"
              class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              API Routes
            </nuxt-link>
          </li>
          <li class="hidden md:block border-l-2 border-gray-700" />
          <li class="flex items-center ml-2 md:space-x-4">
            <a
              target="_blank"
              href="https://github.com/sidebase/nuxt-auth"
              class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              <Icon name="mdi:github" size="22" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/sidebase_io"
              class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              <Icon name="mdi:twitter" size="22" />
            </a>
            <a
              target="_blank"
              href="https://discord.gg/VzABbVsqAc"
              class="block py-2 pr-4 pl-3 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              <Icon name="mdi:discord" size="22" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
