<template>
  <div
    v-if="loading"
    class="fixed left-0 top-0 h-0.5 w-full z-[10000000] bg-amber-600 animate-pulse"
  ></div>
  <div class="page">
    <section
      class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <TheHeader />
    </section>
    <div class="flex container-main">
      <aside
        class="sticky top-0 left-0 z-40 w-[300px] h-screen pt-24 bg-white border-r border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div class="category-nav">
            <div class="category-title">Категории</div>
          </div>

          <ul class="space-y-2 font-medium text-sm">
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Тормозная система</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text"
                    >Информационная / коммуникационная система</span
                  >
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Двигатель</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Фильтр</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Электрооборудование</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text"
                    >Подвеска оси / система подвески / колеса</span
                  >
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text"
                    >Система зажигания/накаливания</span
                  >
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Система очистки окон</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Рулевое управление</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text"
                    >Система сцепления / навесные части</span
                  >
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Тормозная система</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Ременный привод</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Система подачи топлива</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Тормозная система</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text"
                    >Информационная / коммуникационная система</span
                  >
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Двигатель</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Фильтр</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text">Электрооборудование</span>
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
            <li class="m-0">
              <a
                href="#"
                class="text-clip flex gap-2 items-center"
                title="Информационная / коммуникационная система"
              >
                <span>
                  <img
                    src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
                    height="24"
                    width="24"
                    alt=""
                  />
                  <span class="text-clip-text"
                    >Подвеска оси / система подвески / колеса</span
                  >
                </span>
                <img src="/images/icons/chevron-right.svg" width="10" alt="" />
              </a>
            </li>
          </ul>
          <div class="mt-5">
            <button
              type="button"
              class="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Показать еще
            </button>
          </div>
        </div>
      </aside>

      <div class="p-4 pt-[5rem] bg-[#F5F5F5] flex-1">
        <TheTopMenu />
        <BredcrumbsDefault v-if="$route.path !== '/'" />
        <slot />
      </div>
    </div>
    <TheFooter />
  </div>

  <button
    type="button"
    class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    @click="showModal"
  >
    Show modal
  </button>
  <Modal v-if="isShowModal" :size="size" size="xs" @close="closeModal">
    <template #body>
      <FormLogin />
    </template>
    <template #footer>
      <div class="flex justify-between">
        <button
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          @click="closeModal"
        >
          Decline
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="closeModal"
        >
          I accept
        </button>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { Modal } from "flowbite-vue";

onMounted(() => {
  initFlowbite();
});

const isShowModal = ref(false);
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
  console.log("start");
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  console.log("finish");
});
</script>

<style scoped>
.text-clip .text-clip-text {
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  font-weight: 300;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
  max-width: 250px;
}

.text-clip img {
  display: inline-block;
  margin-right: 5px;
}

.text-clip span {
  display: flex;
  align-items: center;
}

.text-clip:hover .text-clip-text {
  border-bottom: 1px solid;
}
</style>
