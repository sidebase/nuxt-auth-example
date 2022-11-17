export default defineNuxtRouteMiddleware(async (to) => {
    console.info('in named middleware! protecting secrets')
    await useSession({ callbackUrl: to.path })
})
