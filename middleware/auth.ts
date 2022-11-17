export default defineNuxtRouteMiddleware(async () => {
    console.info('in named middleware! protecting secrets')
    await useSession()
})
