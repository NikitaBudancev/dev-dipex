import { defineStore } from "pinia";

export const useCatalogStore = defineStore("catalogStore", () => {
  const products = ref([]);
  const pagination = ref([]);

  const categories = ref([
    {
      id: 1,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 1,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 1,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 1,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 1,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 2,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 3,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 20,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 4,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 5,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 6,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 7,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 8,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 9,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 10,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
    {
      id: 11,
      title: "Тормозная система",
      link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
      image:
        "https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png",
      subCategories: [
        {
          id: 1,
          title: "Дисковой тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
        {
          id: 2,
          title: "Суппорт диского колесного тормозного механизма",
          link: "/catalog/rezerves-dalas/braking-system/brake-calipers/",
        },
        {
          id: 3,
          title: "Стояночный тормоз",
          link: "/catalog/rezerves-dalas/braking-system/",
        },
        {
          id: 4,
          title: "Барабанный тормозной механизм",
          link: "/catalog/rezerves-dalas/braking-system/brake-disk/",
        },
      ],
    },
  ]);

  const fetchProduct = async () => {
    const { pending, data } = await useLazyFetch(
      "https://api.dipex.lv/api/rest/v1/products/get/",
      {
        method: "GET",
      }
    );

    const test = await data.value;

    console.log();

    if (data.value) {
      products.value = data.value.products;
      pagination.value = data.value.pagination;

      // console.log(products.value)
    } else {
      console.log("empty");
    }
  };

  return { categories, fetchProduct, products, pagination };
});
