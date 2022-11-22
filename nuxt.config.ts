// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // Static page generated on-demand, revalidates in background
    '/swr': { swr: 30 },
    // Static page generated on-demand once
    '/static': { static: true },
    // Render these routes with SPA
    '/ssr': { ssr: false },
  },
})
