// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],
  routeRules: {
    '/': { prerender: true },
    // Static page generated on-demand, revalidates in background
    '/swr/**': { swr: true },
    // Static page generated on-demand once
    '/static': { prerender: true },
    // Render these routes with SPA
    '/ssr': { ssr: false },
  },
  experimental: {
    componentIslands: {
      selectiveClient: true,
    },
  },
})
