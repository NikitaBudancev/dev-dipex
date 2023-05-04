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
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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

  i18n: {
    // lazy: true,
    langDir: "langs",
    strategy: "prefix_except_default",
    defaultLocale: "lv",
    locales: [
      {
        code: "lv",
        name: "Latvian",
        file: "lv.json",
        icon: "lv.svg",
      },
      {
        code: "ru",
        name: "Russian",
        file: "ru.json",
        icon: "ru.svg",
      },
      {
        code: "lt",
        name: "Lithuanian",
        file: "lt.json",
        icon: "lt.svg",
      },
      {
        code: "et",
        name: "Estonian",
        file: "et.json",
        icon: "ee.svg",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
