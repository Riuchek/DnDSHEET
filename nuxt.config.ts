export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  experimental: {
    payloadExtraction: true
  }
})
