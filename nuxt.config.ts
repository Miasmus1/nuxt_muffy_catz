// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    catApiKey: process.env.CAT_API_KEY,
    firebaseApiKey: process.env.FIREBASE_API_KEY,
  },
  css: ['@/assets/sass/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/sass/base/_variables.scss";',
        },
      },
    },
  },
});
