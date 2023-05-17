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

  runtimeConfig: {
    // can be overridden by NUXT_* environment variable
    apiSecret: "", 
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    }
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
        domain: 'chmuk.online'
      },
      {
        code: "ru",
        name: "Russian",
        file: "ru.json",
        icon: "ru.svg",
        domain: 'chmuk.ru'
      },
      {
        code: "lt",
        name: "Lithuanian",
        file: "lt.json",
        icon: "lt.svg",
        domain: 'chmuk.ru/lt/'
      },
      {
        code: "et",
        name: "Estonian",
        file: "et.json",
        icon: "ee.svg",
        domain: 'chmuk.ru/et/'
      },
    ],
    differentDomains: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
