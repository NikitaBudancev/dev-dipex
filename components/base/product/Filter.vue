<template>
  <div class="">
    <BaseFilterCarSelect />

    <form
      class="pt-8 pb-8 px-5 bg-white rounded-xl shadow-md mt-4"
      action="/ru/catalog/rezerves-dalas/braking-system/brake-calipers/brake-caliper-mounting/?new=true&amp;filter_brands%5B%5D=4657&amp;filter_brands%5B%5D=6558"
      method="get"
    >
      <input type="hidden" name="new" value="true" />
      <div class="row">
        <div class="col-lg-12">
          <div class="filter__body">
            <BaseAccordionMain
              id="accordion-filter"
              class-name="flex flex-col gap-5"
            >
              <BaseAccordionItem
                class-button="accordion__button rounded-t-lg"
                class-content="accordion__content rounded-b-lg"
              >
                <template #head>
                  <div>
                    <NuxtLink class="mb-2 block" to="/catalog"
                      >Категории</NuxtLink
                    >
                    <ul class="text-gray-800">
                      <li>
                        <a class="icon-text" href="#">
                          <span class="text">Автозапчасти</span>
                          <svg
                            height="10px"
                            aria-hidden="true"
                            data-cat="706528"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            class="svg-inline--fa fa-chevron-right fa-w-10"
                          >
                            <path
                              fill="#ffae09"
                              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="icon-text" href="#">
                          <span class="text">Тормозная система</span>
                          <svg
                            height="10px"
                            aria-hidden="true"
                            data-cat="706528"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            class="svg-inline--fa fa-chevron-right fa-w-10"
                          >
                            <path
                              fill="#ffae09"
                              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li><a href="#">Барабанный тормозной механизм</a></li>
                    </ul>
                  </div>
                </template>
                <BaseProductFilterCategory />
              </BaseAccordionItem>
              <BaseAccordionItem
                class-button="accordion__button rounded-t-lg"
                class-content="accordion__content  rounded-b-lg max-h-[300px] overflow-x-auto scroll-grey mr-1 px-4 py-3"
              >
                <template #head>Бренд</template>
                <BaseProductFilterBrand />
              </BaseAccordionItem>
            </BaseAccordionMain>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 mt-5">
        <button
          type="button"
          class="text-white bg-amber-500 flex-1 hover:bg-amber-500/90 font-medium rounded-lg text-sm px-1 py-2 dark:bg-amber-600 dark:hover:bg-amber-700"
        >
          Применить
        </button>
        <button
          type="button"
          class="py-2 px-1 flex-1 text-sm font-medium text-amber-500 bg-white rounded-lg border-2 border-amber-500 hover:bg-gray-50 hover:text-amber-500/90"
        >
          Очистить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const classButton = "";
</script>

<style>
.accordion__item {
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  border-radius: 10px;
}
</style>
