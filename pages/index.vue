<template>

  <section>
    <div class="flex justify-between items-start gap-8">
      <div class="w-3/12">
        <BaseFilterCarSelect />
      </div>
      <div class="w-9/12 bg-white rounded-xl p-2 shadow">
        <BaseCarouselMain :slides="slides" />
      </div>
    </div>
  </section>
  <section>
    <h2 class="text-4xl mt-8 mb-6">Популярные категории</h2>
    <div class="flex justify-between gap-8">
      <div class="w-1/2 grid grid-cols-2 gap-8">
        <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
          <a
            class="flex justify-between h-full"
            href="/ru/catalog/generic-parts/himicheskie-produkty_700001/"
            title="Автохимия"
          >
            <h3 class="font-bold text-lg">Автохимия</h3>
            <div class="flex items-end">
              <img
                class="max-h-[6rem]"
                src="https://dipex.lv/images/icons_main/exterior-cleaning.png"
                alt="Автохимия"
              />
            </div>
          </a>
        </div>
        <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
          <a
            class="flex justify-between h-full"
            href="/ru/instrumenti/"
            title="Инструменты"
          >
            <h3 class="font-bold text-lg">Инструменты</h3>
            <div class="flex items-end">
              <img
                class="max-h-[6rem]"
                src="https://dipex.lv/images/icons_main/remont_instrument_n.png"
                alt="Инструменты"
              />
            </div>
          </a>
        </div>
        <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
          <a
            class="flex justify-between h-full"
            href="/ru/catalog/generic-parts/"
            title="Авто аксессуары"
          >
            <h3 class="font-bold text-lg">Авто аксессуары</h3>
            <div class="flex items-end">
              <img
                class="max-h-[6rem]"
                src="https://dipex.lv/images/icons_main/aksessuary-160920111445-98320700dopobr.png"
                alt="Авто аксессуары"
              />
            </div>
          </a>
        </div>
        <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
          <a
            class="flex justify-between h-full"
            href="/ru/catalogue/mats/trunk-mats/"
            title="Коврики в багажник"
          >
            <h3 class="font-bold text-lg">Коврики в багажник</h3>
            <div class="flex items-end">
              <img
                class="max-h-[6rem]"
                src="https://dipex.lv/images/icons_main/036_original.png"
                alt="Коврики в багажник"
              />
            </div>
          </a>
        </div>
      </div>
      <div class="w-1/2 grid grid-cols-2 gap-8">
        <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
          <a
            class="flex justify-between h-full"
            href="/ru/catalogue/mats/rezinovye-kovriki/"
            title="Коврики"
          >
            <h3 class="font-bold text-lg">Коврики</h3>
            <div class="flex items-end">
              <img
                class="max-h-[20rem]"
                src="https://dipex.lv/images/icons_main/1532443500_avtomobilnye-kovriki-rezina-prozrachnom-fone-647864.png"
                alt="Коврики"
              />
            </div>
          </a>
        </div>
        <div class="flex flex-col justify-between gap-8">
          <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
            <a
              class="flex justify-between h-full"
              href="/ru/catalog/rezerves-dalas/transmission/oils-706233/"
              title="Трансмисионное масло"
            >
              <h3 class="font-bold text-lg">Трансмисионное масло</h3>
              <div class="flex items-end">
                <img
                  class="max-h-[6rem]"
                  src="https://dipex.lv/images/icons_main/20161011125245882.png"
                  alt="Трансмисионное масло"
                />
              </div>
            </a>
          </div>
          <div class="bg-white rounded-xl p-3 shadow-sm hover:shadow-md">
            <a
              class="flex justify-between h-full"
              href="/ru/catalog/rezerves-dalas/engine-100002/lubrication/oils-101994/"
              title="Моторное масло"
            >
              <h3 class="font-bold text-lg">Моторное масло</h3>
              <div class="flex items-end">
                <img
                  class="max-h-[6rem]"
                  src="https://dipex.lv/images/icons_main/engine.png"
                  alt="Моторное масло"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <BaseCategoryList :categories="categories"/>
    <div class="flex justify-center mt-8">
      <a class="btn" href="/catalog/rezerves-dalas/">Больше разделов</a>
    </div>
  </section>
  <section>
    <BaseTabsMain />
  </section>

  


</template>


<script>

export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "Скидка",
          imgUrl:
            "https://dipex.lv//upload/iblock/0ad/0ad459ae2c0f0d92c9c796d27a8ded3a.png",
        },
        {
          id: 1,
          title: "Скидка",
          imgUrl:
            "https://dipex.lv//upload/iblock/0ad/0ad459ae2c0f0d92c9c796d27a8ded3a.png",
        },
        {
          id: 1,
          title: "Скидка",
          imgUrl:
            "https://dipex.lv//upload/iblock/0ad/0ad459ae2c0f0d92c9c796d27a8ded3a.png",
        },
      ],
    };
  },
};
</script>

<script setup>
import { useCatalogStore } from '~/store/catalog'
import { storeToRefs } from 'pinia'

const catalogStore = useCatalogStore()
const { categories } = storeToRefs(catalogStore)
</script>
