import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/leaflet',
    'nuxt-delay-hydration',
    '@nuxt/scripts',
  ],
  css: [resolve('./assets/main.scss')],
  imports: {
    dirs: ['composables/**', 'utils/**', 'store/**', 'layouts/**', 'pages/**'],
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'title', content: 'travels and tour' },
        { name: 'description', content: 'travels and tour' },
        { name: 'theme-color', content: '#018937' },
      ],
    },
  },
  delayHydration:{
    debug:process.env.NODE_ENV === 'development',
  },
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    compressPublicAssets: true,
  },
});