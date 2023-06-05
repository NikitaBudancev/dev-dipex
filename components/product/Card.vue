<template>
  <div class="bg-white p-3 pb-0 rounded-md shadow-md">
    <div class="flex gap-3 mb-3">
      <div class="w-3/12">
        <NuxtLink
          class="relative"
          :to="props.product.code + '/'"
          title="Тормозной суппорт ABAKUS 131-04-006"
          data-entity="image-wrapper"
        >
          <div
            class="flex justify-between items-center absolute top-0 border-b border-gray-300 pb-1 z-10 w-full bg-[#ffffffb3]"
          >
            <div data-type="">
              <img
                style="width: 32px"
                src="https://dipex.lv/images/flags/pol.png"
                alt=""
              />
            </div>
            <ProductBrandLogo
              :id="props.product.id"
              tooltip-text="ABAKUS"
              img-path="https://dipex.lv/images/brands/10100001.jpg"
            />
          </div>

          <div>
            <img :src="props.product.image.src" alt="" />
          </div>
        </NuxtLink>
      </div>

      <div class="w-9/12">
        <div class="box-container-product">
          <div class="flex gap-2">
            <div class="w-7/12">
              <div class="box-padding">
                <div class="product-item-title">
                  <NuxtLink
                    class="text-lg text-[#3f3f3f] font-bold"
                    :to="props.product.code + '/'"
                    title="Тормозной суппорт ABAKUS 131-04-006"
                    data-product-id="14342831"
                  >
                    Тормозной суппорт ABAKUS 131-04-006
                  </NuxtLink>
                </div>
              </div>
              <ProductCardProperty :properties="properties" />
            </div>
            <div class="w-5/12">
              <div
                class="flex flex-col items-end h-full justify-between"
                data-empty="1"
                data-fill="4"
              >
                <ProductRating
                  :id="props.product.id"
                  :rating="4"
                  tooltip-text="Высокий класс"
                />
                <ProductPrice />

                <div class="flex gap-4 items-center w-full justify-end">
                  <ProductCount />
                  <div
                    class="product-item-info-container product-item-info-container_buy-btn"
                    data-entity="buttons-block"
                  >
                    <div class="product-item-button-container">
                      <button
                        class="icon-text btn btn-small"
                        data-name="Тормозной суппорт ABAKUS 131-04-006"
                        data-generic-id="78"
                        data-product-id="14342831"
                        data-amount="1"
                      >
                        <svg
                          aria-hidden="true"
                          height="16px"
                          focusable="false"
                          data-prefix="far"
                          data-icon="shopping-cart"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          class="icon"
                        >
                          <path
                            fill="#fff"
                            d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                            class=""
                          ></path>
                        </svg>
                        <span class="text">Купить</span>
                      </button>
                    </div>
                  </div>
                  <button
                    id="favorite-product-14342831"
                    class="p-1.5 border-2 border-amber-500 rounded"
                    data-id="14342831"
                  >
                    <svg
                      aria-hidden="true"
                      height="23px"
                      focusable="false"
                      data-prefix="far"
                      data-icon="heart"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#ffae09"
                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                        class=""
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-end gap-4 text-sm px-3 py-1.5 bg-gray-50 -mx-3 rounded-md"
    >
      <a
        href="catalog/rezerves-dalas/braking-system/brake-calipers/brake-caliper-mounting/abakus-131-04-006/#analogs"
        class="icon-text underline text-amber-500"
      >
        <svg
          aria-hidden="true"
          height="13px"
          focusable="false"
          data-prefix="fas"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="icon"
        >
          <path
            fill="#ffae09"
            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
          ></path>
        </svg>
        <span class="text">Заменители</span>
      </a>

      <span class="icon-text">
        <svg
          aria-hidden="true"
          height="16px"
          style="position: relative; top: -1px"
          focusable="false"
          data-prefix="fas"
          data-icon="cubes"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="icon"
        >
          <path
            fill="#28a745"
            d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
            class=""
          ></path>
        </svg>
        <span class="text">Есть на складе</span>
      </span>
      <span class="icon-text">
        <svg
          aria-hidden="true"
          style="position: relative; top: -1px"
          height="14px"
          focusable="false"
          data-prefix="fal"
          data-icon="truck"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          class="icon"
        >
          <path
            fill="#28a745"
            d="M624 368h-16V251.9c0-19-7.7-37.5-21.1-50.9L503 117.1C489.6 103.7 471 96 452.1 96H416V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v304c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-464 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm208-96H242.7c-16.6-28.6-47.2-48-82.7-48s-66.1 19.4-82.7 48H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v312zm48-224h36.1c6.3 0 12.5 2.6 17 7l73 73H416v-80zm64 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-100.9c-17.2-25.9-46.6-43.1-80-43.1-24.7 0-47 9.6-64 24.9V272h144v91.1z"
            class=""
          ></path>
        </svg>
        <span class="text">Срок поставки:</span>
        <span
          class="flex items-center justify-center cursor-pointer w-5 h-5 rounded-full border border-gray-400"
          data-tooltip-target="tooltip-default-delivery"
          data-tooltip-placement="bottom"
          >?</span
        >
        <span
          id="tooltip-default-delivery"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 max-w-[250px]"
        >
          <span class="tooltip-arrow" data-popper-arrow></span>
          Доставка товара составляет 1-2 дня с момента отправки его покупателю.
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "~/models/product.model";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const properties = ref([
  {
    id: 1,
    name: "Внутренний диаметр 1(мм)",
    value: 38,
  },
  {
    id: 2,
    name: "Высота 1 [мм]",
    value: 7,
  },
  {
    id: 3,
    name: "Материал",
    value: "NBR (бутадиен-нитрильный каучук)",
  },
  {
    id: 4,
    name: "Тип кручения",
    value: "переменное кручение",
  },
  {
    id: 5,
    name: "Тормозная установка",
    value: "FIAT",
  },
]);
</script>
