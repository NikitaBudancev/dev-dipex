<template>
  <div class="flex gap-5">
    <div class="w-3/12">
      <BaseProductFilter />
    </div>
    <div class="w-9/12">
      <div class="flex flex-col gap-4" v-if="pending">
        <div
          class="flex flex-col justify-between bg-white p-3 pb-0 rounded-md shadow-md h-[218px] animate-pulse"
          v-for="n in 20"
          :key="n"
        >
          <div class="flex gap-3 mb-3">
            <div class="w-3/12">
              <span class="relative"
                ><div
                  class="flex justify-between items-center absolute top-0 border-b border-gray-300 pb-1 z-10 w-full bg-[#ffffffb3]"
                >
                  <div class="w-10 h-8 bg-gray-100 rounded-md"></div>
                  <div
                    class="product-item-brand__logo-block tooltip__btn relative"
                  >
                    <div class="w-10 h-8 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
                <div class="w-full h-full bg-gray-100 rounded-md"></div
              ></span>
            </div>
            <div class="w-9/12">
              <div class="box-container-product">
                <div class="flex gap-2">
                  <div class="w-7/12">
                    <div class="w-11/12 h-7 mb-3 bg-gray-100 rounded-md"></div>
                    <div class="product-item__properties-block">
                      <ul class="flex flex-col gap-2">
                        <li class="w-8/12 h-4 bg-gray-100 rounded-md"></li>
                        <li class="w-7/12 h-4 bg-gray-100 rounded-md"></li>
                        <li class="w-8/12 h-4 bg-gray-100 rounded-md"></li>
                        <li class="w-9/12 h-4 bg-gray-100 rounded-md"></li>
                      </ul>
                      <div class="w-24 h-4 bg-gray-100 rounded-md mt-3"></div>
                    </div>
                  </div>
                  <div class="w-5/12">
                    <div
                      class="flex flex-col items-end h-full justify-between"
                      data-empty="1"
                      data-fill="4"
                    >
                      <div
                        class="product-item-brand__rating product-item-brand__rating_hide-mobile tooltip__btn"
                      >
                        <div>
                          <div
                            class="flex items-center"
                            data-tooltip-target="tooltip-default-1"
                          >
                            <svg
                              class="text-gray-100 dark:text-gray-500 w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-100 dark:text-gray-500 w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-100 dark:text-gray-500 w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-100 dark:text-gray-500 w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-100 dark:text-gray-500 w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          id="tooltip-default-1"
                          role="tooltip"
                          class="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                          Средний класс
                          <div class="tooltip-arrow" data-popper-arrow=""></div>
                        </div>
                      </div>
                      <div class="w-4/12 h-12 bg-gray-100 rounded-md"></div>
                      <div class="flex gap-4 items-center w-full justify-end">
                        <div class="w-3/12 h-10 bg-gray-100 rounded-md"></div>
                        <div class="w-4/12 h-10 bg-gray-100 rounded-md"></div>
                        <div class="w-10 h-10 bg-gray-100 rounded-md"></div>
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
          <div class="w-2/12 h-5 bg-gray-100 rounded-md"></div>
          <div class="w-2/12 h-5 bg-gray-100 rounded-md"></div>
          <div class="w-2/12 h-5 bg-gray-100 rounded-md"></div>
        </div>
        </div>
      </div>
      <BaseProductList v-else :data="data" />
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pending, data } = await useProducts();
</script>
