import { et, lt, lv, ru } from "langs";

export const I18N = {
  langDir: "langs",
  strategy: "prefix_except_default",
  defaultLocale: "lv",
  locales: [
    {
      code: "lv",
      name: "Latvian",
      icon: "lv.svg",
    },
    {
      code: "ru",
      name: "Russian",
      icon: "ru.svg",
    },
    {
      code: "lt",
      name: "Lithuanian",
      icon: "lt.svg",
    },
    {
      code: "et",
      name: "Estonian",
      icon: "ee.svg",
    },
  ],

  vueI18n: {
    messages: { et, lt, lv, ru },
  },

  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    redirectOn: "root", // recommended
  },
};
