// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@primevue/nuxt-module'
  ],

  css: [
    '~/assets/scss/app.scss',
  ],

  primevue: {
        options: {
            theme: {
                preset: Aura
            }
        }
    },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/abstracts" as *;
          `
        }
      }
    }
  }
})