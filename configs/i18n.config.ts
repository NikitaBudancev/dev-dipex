export default defineI18nConfig((nuxt) => ({
  legacy: false,
  langDir: "langs",
  strategy: "prefix_except_default",
  defaultLocale: "lv",
  locales: [
    {
      code: "ru",
      name: "Russian",
      file: "ru.json",
      icon: "ru.svg",
    },
    {
      code: "lv",
      name: "Latvian",
      file: "lv.json",
      icon: "lv.svg",
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
}));
