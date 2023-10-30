// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    build: {
        transpile: ['jsonwebtoken']
      },
    auth: {
        provider: {
          type: 'local',
          endpoints: {
            getSession: { path: '/user' }
          },
          pages: {
            login: '/'
          },
          token: {
            signInResponseTokenPointer: '/token/accessToken'
          },
          sessionDataType: { id: 'string', email: 'string', name: 'string', role: 'admin | guest | account', subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]" }
        },
        session: {
          // Whether to refresh the session every time the browser window is refocused.
          enableRefreshOnWindowFocus: true,
    
          // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
          enableRefreshPeriodically: 5000
        },
        globalAppMiddleware: {
          isEnabled: true
        }
    }
})
