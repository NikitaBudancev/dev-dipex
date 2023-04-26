// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Dipex",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "vue-final-modal/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    devServer: {
      // My files are under src, if yours are in the root you can change this to ./
      watch: ["./src"],
    },
  },

  imports: {
    dirs: [
      "composables",
      "composables/*/index.{ts,js,mjs,mts}",
      "composables/**",
    ],
  },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "@nuxtjs/i18n"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  googleFonts: {
    families: {
      "Open+Sans": {
        wght: [300, 400, 500, 600, 700],
      },
      download: true,
    },
  },
});
