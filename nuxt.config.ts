// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  build: {
    transpile: ['jsonwebtoken']
  },
  typescript: {
    shim: false
  },
  auth: {
    isEnabled: true,
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/user' }
      },
      pages: {
        login: '/login'
      },
      token: {
        signInResponseTokenPointer: '/token/accessToken'
      },
      sessionDataType: { id: 'string', email: 'string', name: 'string', role: 'admin | guest | account', subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" }
    },
    globalAppMiddleware: {
      isEnabled: true
    }
  }
})
