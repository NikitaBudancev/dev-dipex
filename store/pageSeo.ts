import { defineStore } from "pinia";

export const useSeoPageStore = defineStore("seoStore", () => {
  const seo = ref({
    title: "Суппорт диского колесного тормозного механизма / -держатель",
    description: "Суппорт диского колесного тормозного механизма / -держатель",
    keywords: "Суппорт диского колесного тормозного механизма / -держатель",
    h1: "Суппорт диского колесного тормозного механизма",
    breadcrumbs: [
      { id: 1, name: "Dipex", link: "/" },
      {
        id: 2,
        name: "Тормозная система",
        link: "/catalog/rezerves-dalas/exhaust-system/",
      },
      { id: 3, name: "Дисковой тормозной механизм", link: "" },
    ],
  });

  return { seo };
});
