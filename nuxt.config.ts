import GithubProvider from 'next-auth/providers/github'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    auth: {
        nextAuth: {
            options: {
                providers: [GithubProvider({
                    clientId: process.env.GITHUB_CLIENT_ID,
                    clientSecret: process.env.GITHUB_CLIENT_SECRET
                })]
            }
        }
    }
})
