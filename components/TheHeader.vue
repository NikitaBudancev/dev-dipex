<template>
  <header class="main-header main-header_desktop bg-white py-2 shadow-sm">
    <div class="flex justify-between items-center container-main">
      <div class="flex justify-between items-center w-4/12 text-sm">
        <NuxtLink to="/" class="logo">
          <img
            src="https://dipex.lv/include/logo.png"
            class="w-40"
            alt="Dipex"
          />
        </NuxtLink>
        <a class="icon-text font-bold" href="mailto:info@dipex.lv">
          <svg
            aria-hidden="true"
            height="23px"
            focusable="false"
            data-prefix="far"
            data-icon="envelope"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-envelope fa-w-16"
          >
            <path
              fill="#FFAE0A"
              d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              class=""
            ></path>
          </svg>
          <span> info@dipex.lv </span>
        </a>
        <a class="icon-text font-bold" href="tel:64415360">
          <svg
            aria-hidden="true"
            height="18px"
            focusable="false"
            data-prefix="fas"
            data-icon="phone"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-phone fa-w-16"
          >
            <path
              fill="#FFAE0A"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
              class=""
            ></path>
          </svg>
          <span>64415360</span>
        </a>
      </div>
      <div class="main-header__search-block w-2/12">
        <form class="relative" action="/ru/catalog/rezerves-dalas/">
          <input
            type="search"
            name="search_q"
            placeholder="Номер, Артикул, OE....."
            aria-label="Search"
            value=""
            class="block w-full p-1 border rounded relative outline-none focus:border focus:border-amber-500"
          />
          <button
            class="absolute top-0 right-0 w-8 bg-amber-500 h-full rounded-r"
            type="submit"
          >
            <svg
              aria-hidden="true"
              height="15px"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="mx-auto"
            >
              <path
                fill="#fff"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              >
                <path
                  fill="#fff"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </path>
            </svg>
          </button>
        </form>
      </div>
      <div class="flex justify-between items-center w-4/12">
        <div class="h-6">
          <button class="relative">
            <span class="sup-icon">0</span>
            <svg
              aria-hidden="true"
              focusable="false"
              height="22px"
              data-prefix="far"
              data-icon="heart"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#333"
                d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
              ></path>
            </svg>
          </button>
          <div data-is-auth="" class="favorites-block" style="display: none">
            <div>
              <div class="main-header__garage-no-auth">
                <a href="/auth/?login=yes">Войдите</a> или
                <a href="/auth/registartion/?register=yes">зарегистрируйтесь</a>
                для использования избранного
              </div>
            </div>
          </div>
        </div>
        <div class="h-6">
          <button class="relative">
            <svg
              aria-hidden="true"
              height="26px"
              focusable="false"
              data-prefix="fas"
              data-icon="car"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-car fa-w-16"
            >
              <path
                fill="#333"
                d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
              ></path>
            </svg>
            <svg
              class="sup-icon"
              height="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  fill="#f15c5c"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="#fff"
                  d="M377.6 321.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </button>
          <div class="hidden">
            <div class="main-header__garage-no-auth">
              <a href="/auth/?login=yes">Войдите</a> или
              <a href="/auth/registartion/?register=yes">зарегистрируйтесь</a>
              для использования гаража
            </div>
          </div>
        </div>
        <a href="/ru/personal/cart/" class="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            height="24px"
            width="24px"
            focusable="false"
            data-prefix="far"
            data-icon="shopping-cart"
            role="img"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-shopping-cart fa-w-18"
          >
            <path
              fill="#333"
              d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
              class=""
            />
          </svg>
          <span class="sup-icon">0</span>
        </a>

        <PopoverLanguages />

        <div class="header-lk ba">
          <div class="flex" role="group">
            <a
              class="-mr-0.5 rounded-l-lg border-amber-500 border-2 py-1.5 px-3 text-amber-500 hover:bg-amber-500 hover:text-white"
              href="/ru/personal/"
            >
              Войти
            </a>
            <button
              class="rounded-r-lg border-amber-500 border-2 py-1.5 px-3 text-amber-500 hover:bg-amber-500/90 hover:text-white"
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <PopoverMain />
</template>

