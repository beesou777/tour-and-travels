import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt'],
  css: [resolve('./assets/main.scss')],
  imports: {
    dirs: ['composables/**', 'utils/**', 'store/**', 'layouts/**', 'pages/**'],
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: { lang: 'en' },
        link: [
          { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap', as: 'style' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' }
        ],
      meta: [
        { name: 'title', content: 'travels and tour' },
        { name: 'description', content: 'travels and tour' },
        { name: 'theme-color', content: '#018937' },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
    compressPublicAssets: true,
  },
  build: {
    extractCSS: true,
    minify: true,
  },
  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
    },
    display: 'swap',
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          require('cssnano')({
            preset: 'default',
          }),
        ],
      }
    }
  },
  optimization: {
    splitChunks: {
      maxSize: 300000
    }
  }
});
