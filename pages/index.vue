<template>
    <section>
      <div class="flex justify-between items-center gap-8 mb-4">
        <div class="w-3/12 shadow rounded-xl">
          <a
            class="icon-text justify-center py-5 bg-amber-500 rounded-xl text-white hover:bg-amber-500/90"
            href="/ru/catalog/rezerves-dalas/"
          >
            <svg
              aria-hidden="true"
              height="20px"
              style="margin-right: 10px"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#fff"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                class=""
              ></path>
            </svg>
            <span>Каталог</span>
          </a>
        </div>
        <div class="w-9/12 shadow rounded-xl">
          <ul
            class="flex justify-between text-center bg-white rounded-xl overflow-hidden font-medium"
          >
            <li class="w-full">
              <a class="block py-5 hover:bg-gray-200" href="/ru/about/payment/"
                >Оплата</a
              >
            </li>
            <li class="w-full">
              <a class="block py-5 hover:bg-gray-200" href="/ru/about/delivery/"
                >Доставка</a
              >
            </li>
            <li class="w-full">
              <a class="block py-5 hover:bg-gray-200" href="/ru/about/contacts/"
                >Контакты</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="flex justify-between items-start gap-8">
        <div class="w-3/12 pt-8 pb-8 px-5 bg-white rounded-xl shadow-md">
          <link
            rel="stylesheet"
            href="https://unpkg.com/vue-select@3.0.0/dist/vue-select.css"
          />

          <div
            class="flex flex-col gap-3"
            id="car-select-app"
            data-has-selected-car="false"
          >
            <div class="flex justify-between border rounded-md overflow-hidden">
              <button
                class="w-1/2 justify-center icon-text py-2 bg-gray-300 text-white"
              >
                <svg
                  aria-hidden="true"
                  height="24px"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="car"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-car fa-w-16"
                >
                  <path
                    d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
                  ></path>
                </svg>
                <span>Легковые</span>
              </button>
              <button class="w-1/2 justify-center icon-text py-2">
                <svg
                  aria-hidden="true"
                  height="24px"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="motorcycle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  class="svg-inline--fa fa-motorcycle fa-w-20"
                >
                  <path
                    d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"
                  ></path>
                </svg>
                <span>Мотоциклы</span>
              </button>
            </div>

            <div dir="auto" class="v-select vs--single vs--searchable">
              <div class="vs__dropdown-toggle">
                <div class="vs__selected-options">
                  <input
                    placeholder="Марка"
                    aria-label="Search for option"
                    role="combobox"
                    type="search"
                    autocomplete="off"
                    class="vs__search h-8"
                  />
                </div>
                <div class="vs__actions">
                  <button
                    type="button"
                    title="Clear selection"
                    class="vs__clear"
                    style="display: none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                      ></path>
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    role="presentation"
                    class="vs__open-indicator"
                  >
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                    ></path>
                  </svg>
                  <div class="vs__spinner" style="display: none">
                    Loading...
                  </div>
                </div>
              </div>
              <!---->
            </div>
            <div
              dir="auto"
              class="v-select vs--single vs--searchable vs--disabled"
            >
              <div class="vs__dropdown-toggle">
                <div class="vs__selected-options">
                  <input
                    placeholder="Модель"
                    aria-label="Search for option"
                    role="combobox"
                    type="search"
                    autocomplete="off"
                    class="vs__search h-8"
                  />
                </div>
                <div class="vs__actions">
                  <button
                    type="button"
                    title="Clear selection"
                    class="vs__clear"
                    style="display: none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                      ></path>
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    role="presentation"
                    class="vs__open-indicator"
                  >
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                    ></path>
                  </svg>
                  <div class="vs__spinner" style="display: none">
                    Loading...
                  </div>
                </div>
              </div>
              <!---->
            </div>
            <div
              dir="auto"
              class="v-select vs--single vs--searchable vs--disabled"
            >
              <div class="vs__dropdown-toggle">
                <div class="vs__selected-options">
                  <input
                    placeholder="Тип"
                    aria-label="Search for option"
                    role="combobox"
                    type="search"
                    autocomplete="off"
                    class="vs__search h-8"
                  />
                </div>
                <div class="vs__actions">
                  <button
                    type="button"
                    title="Clear selection"
                    class="vs__clear"
                    style="display: none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"
                      ></path>
                    </svg>
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    role="presentation"
                    class="vs__open-indicator"
                  >
                    <path
                      d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"
                    ></path>
                  </svg>
                  <div class="vs__spinner" style="display: none">
                    Loading...
                  </div>
                </div>
              </div>
            </div>
            <button
              class="py-2.5 bg-amber-500 rounded-md text-white disabled:bg-gray-300 disabled: cursor-not-allowed"
              disabled
            >
              Показать запчасти
            </button>
          </div>
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
      <div class="grid grid-cols-3 gap-6 mt-8">
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/3be/3be2482aa26d97edf263dbdaad33f4d9.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/braking-system/"
            class="font-semibold mb-4 block"
          >
            Тормозная система
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/braking-system/brake-disk/"
                  >Дисковой тормозной механизм</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/braking-system/brake-calipers/"
                  >Суппорт диского колесного тормозного механизма</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/braking-system/handbrake/"
                  >Стояночный тормоз</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/braking-system/drum-brake/"
                  >Барабанный тормозной механизм</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/braking-system/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <div
            class="absolute right-0 uppercase font-semibold text-lg bg-red-500 text-white py-1 px-5"
          >
            sale
          </div>
          <img
            src="https://dipex.lv/upload/iblock/666/66624dde6a7495bc2b948b2fd76f9f92.jpg"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/engine-100002/"
            class="font-semibold mb-4 block"
          >
            Двигатель
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/engine-100002/cylinder-head-attachment-parts/"
                  >Головка цилиндра / комплектующие</a
                >rrdf
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/engine-100002/engine-timing/"
                  >Управление двигателем</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/engine-100002/crankcase/"
                  >Блок-картер двигателя</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/engine-100002/crankshaft-drive/"
                  >Кривошипно-шатунный механизм</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/engine-100002/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <div
            class="absolute right-0 uppercase font-semibold text-lg bg-red-500 text-white py-1 px-5 bg-red-600"
          >
            sale
          </div>
          <img
            src="https://dipex.lv/upload/iblock/b98/b98045feb17cebb1fe09733d7e6ceefa.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/filter/"
            class="font-semibold mb-4 block"
          >
            Фильтр
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/filter/oil-filter/"
                  >Масляный фильтр</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/filter/air-filter/"
                  >Воздушный фильтр</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/filter/fuel-filter/"
                  >Топливный фильтр</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/filter/passenger-compartment-air-filter/"
                  >Фильтр салона</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/filter/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/a8d/a8d4046e8a96796cbc2887c84917359a.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/electrics/"
            class="font-semibold mb-4 block"
          >
            Электрооборудование
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/electrics/starter-system/"
                  >Система стартера</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/electrics/alternator-parts/"
                  >Генератор / составляющие</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/electrics/battery/"
                  >Аккумуляторная батарея</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/electrics/headlight-parts/"
                  >Основная фара / комплектующие</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/electrics/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/3c0/3c0de258785535f1fed07a9534a561d9.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/axle-mounting-steering-wheels/"
            class="font-semibold mb-4 block"
          >
            Подвеска оси / система подвески / колеса
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/axle-mounting-steering-wheels/control-arm-swing-arm-joint/"
                  >Подвеска поперечного рычага</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/axle-mounting-steering-wheels/joints/"
                  >Шарнирные элементы</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/axle-mounting-steering-wheels/axle-support-axle-beam-mounting/"
                  >Балка моста / подвеска оси</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/axle-mounting-steering-wheels/stabilizer-fastening-parts/"
                  >Стабилизатор / детали крепежа</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/axle-mounting-steering-wheels/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/410/41084aa42d81dbd76e2e883be87343a9.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/spark-glow-ignition/"
            class="font-semibold mb-4 block"
          >
            Система зажигания/накаливания
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/spark-glow-ignition/spark-plug/"
                  >Свеча зажигания</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/spark-glow-ignition/glow-plug/"
                  >Свеча накаливания</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/spark-glow-ignition/ignition-coil-ignition-coil-unit/"
                  >Катушка зажигания / элемент катушки зажигания</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/spark-glow-ignition/control-unit-relay-sensors/"
                  >Блок управления / реле</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/spark-glow-ignition/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/f68/f683335788036de9d1445c8beab7ee24.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/window-cleaning/"
            class="font-semibold mb-4 block"
          >
            Система очистки окон
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/window-cleaning/wiper-blade/"
                  >Стеклоочиститель / резина</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/window-cleaning/wiper-arm-bearing/"
                  >Рычаг стеклоочистителя / подвеска</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/window-cleaning/motor-windscreen-wipers/"
                  >Двигатель стеклоочистителя</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/window-cleaning/water-pump-windscreen-washing/"
                  >Водяной насос омывателя</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/window-cleaning/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/244/244ab094abfe4bf47c96ecac4279093c.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/suspension-damping/"
            class="font-semibold mb-4 block"
          >
            Подвеска / амортизация
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/suspension-damping/shock-absorber/"
                  >Амортизатор</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/suspension-damping/coil-springs/"
                  >Подвеска</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/suspension-damping/suspension-parts/"
                  >Стойка амортизатора / амортизатор /-составные части</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/suspension-damping/suspension-strut-bearing/"
                  >Подвеска амортизатора/стойка амортизатора</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/suspension-damping/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/1c1/1c109981bf1c8fadccf2f71678b63454.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/exhaust-system/"
            class="font-semibold mb-4 block"
          >
            Система выпуска ОГ
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/exhaust-system/silencer/"
                  >Глушитель</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/exhaust-system/exhaust-pipes/"
                  >Трубы</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/exhaust-system/assembly-parts-100222/"
                  >Детали монтажа</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/exhaust-system/turbocharger/"
                  >Нагнетатель</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/exhaust-system/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/209/209bde9246b4470453065d45aa7a0145.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/body/"
            class="font-semibold mb-4 block"
          >
            Кузов
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/body/headlight-parts-101465/"
                  >Основная фара / комплектующие</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/body/auxiliary-lights-parts-101340/"
                  >Дополнительная фара/ комплектующие</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/body/lights-101407/"
                  >Система освещения / сигнализация</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/body/body-parts-fender-bumper/"
                  >Деталь кузова / крыло / бампер</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/body/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/a7a/a7a164525353652b5fb43eff4bce610f.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/steering/"
            class="font-semibold mb-4 block"
          >
            Рулевое управление
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/steering/steering-joints/"
                  >Шарниры</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/steering/tie-rod-assembly-parts/"
                  >Рулевая тяга / составляющие</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/steering/steering-gear-pump/"
                  >Рулевой механизм / насос</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/steering/hydraulic-oil-expansion-tank/"
                  >Гидравлическое масло расширительного бачка</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/steering/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-white p-3 rounded-md shadow-md relative">
          <img
            src="https://dipex.lv/upload/iblock/4cf/4cfe5b87994811ace15c006c95b9c5a2.png"
            class="absolute bottom-3 right-3 w-28 h-28 object-contain"
          />
          <a
            href="/ru/catalog/rezerves-dalas/cooling-system/"
            class="font-semibold mb-4 block"
          >
            Система охлаждения
          </a>
          <div class="category-item__body">
            <ul class="mb-2">
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/cooling-system/water-pump-gasket/"
                  >Водяной насос / прокладка</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/cooling-system/thermostat-gasket/"
                  >Термостат / прокладка</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/cooling-system/radiator-oil-cooler/"
                  >Водяной / масляный радиатор</a
                >
              </li>
              <li class="text-sm text-gray-500 mb-1">
                <a
                  class="hover:text-blue-600"
                  href="/ru/catalog/rezerves-dalas/cooling-system/hoses-pipes-flanges/"
                  >Соединительные элементы / провода / фланцы</a
                >
              </li>
            </ul>
            <a
              href="/ru/catalog/rezerves-dalas/cooling-system/"
              class="inline-flex items-center gap-1 font-semibold border-b-transparent hover:underline"
            >
              Все товары
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                height="16px"
                data-icon="angle-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                class="svg-inline--fa fa-angle-right fa-w-8"
              >
                <path
                  fill="#FFAE0A"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  class=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <a class="btn" href="/ru/catalog/rezerves-dalas/">Больше разделов</a>
      </div>
    </section>
    <section>
      <TabsMain />
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
