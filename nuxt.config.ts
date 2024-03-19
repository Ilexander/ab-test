// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com/3.4.1?plugins=forms@0.5.7,typography@0.5.10,aspect-ratio@0.4.2,line-clamp@0.4.4' }, {
        innerHTML: `
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                futura: {
                  '500': '#00CA14' 
                },
              }
            }
          }
        }
        `,
      }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
