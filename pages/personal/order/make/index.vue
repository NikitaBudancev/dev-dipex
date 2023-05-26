<template>
  <form class="flex gap-5">
    <div class="flex flex-col gap-5 flex-1">
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm">
        <div class="text-xl font-semibold mb-5">Тип плательщика</div>

        <fieldset>
          <legend class="sr-only">Тип плательщика</legend>
          <div class="flex items-center mb-4">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="USA"
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              checked
            />
            <label
              for="country-option-1"
              class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Физическое лицо
            </label>
          </div>

          <div class="flex items-center">
            <input
              id="country-option-2"
              type="radio"
              name="countries"
              value="Germany"
              class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="country-option-2"
              class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Юридическое лицо
            </label>
          </div>
        </fieldset>
      </div>
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm">
        <div class="text-xl font-semibold mb-5">Информация о плательщике</div>
        <div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span class="block mb-1"
                >Имя <span class="text-red-500"> *</span></span
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </label>
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span class="block mb-1"
                >Фамилия <span class="text-red-500"> *</span></span
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </label>
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span class="block mb-1"
                >Город <span class="text-red-500"> *</span></span
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </label>
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span class="block mb-1"
                >Адрес доставки <span class="text-red-500"> *</span></span
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </label>
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span class="block mb-1"
                >Индекс <span class="text-red-500"> *</span></span
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </label>
          </div>
          <div>
            <div class="block mb-1">
              Телефон <span class="text-red-500"> *</span>
            </div>
            <div class="flex mb-6">
              <label
                for="location-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
              </label>
              <button
                id="dropdown-button-2"
                data-dropdown-toggle="dropdown-search-city"
                class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  class="h-3 mr-2"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="14" height="12" rx="2" fill="white" />
                  <mask
                    id="mask0_12694_49953"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="15"
                    height="12"
                  >
                    <rect x="0.5" width="14" height="12" rx="2" fill="white" />
                  </mask>
                  <g mask="url(#mask0_12694_49953)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5 0H0.5V0.8H14.5V0ZM14.5 1.6H0.5V2.4H14.5V1.6ZM0.5 3.2H14.5V4H0.5V3.2ZM14.5 4.8H0.5V5.6H14.5V4.8ZM0.5 6.4H14.5V7.2H0.5V6.4ZM14.5 8H0.5V8.8H14.5V8ZM0.5 9.6H14.5V10.4H0.5V9.6ZM14.5 11.2H0.5V12H14.5V11.2Z"
                      fill="#D02F44"
                    />
                    <rect x="0.5" width="6" height="5.6" fill="#46467F" />
                    <g filter="url(#filter0_d_12694_49953)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.83317 1.20005C1.83317 1.42096 1.68393 1.60005 1.49984 1.60005C1.31574 1.60005 1.1665 1.42096 1.1665 1.20005C1.1665 0.979135 1.31574 0.800049 1.49984 0.800049C1.68393 0.800049 1.83317 0.979135 1.83317 1.20005ZM3.1665 1.20005C3.1665 1.42096 3.01727 1.60005 2.83317 1.60005C2.64908 1.60005 2.49984 1.42096 2.49984 1.20005C2.49984 0.979135 2.64908 0.800049 2.83317 0.800049C3.01727 0.800049 3.1665 0.979135 3.1665 1.20005ZM4.1665 1.60005C4.3506 1.60005 4.49984 1.42096 4.49984 1.20005C4.49984 0.979135 4.3506 0.800049 4.1665 0.800049C3.98241 0.800049 3.83317 0.979135 3.83317 1.20005C3.83317 1.42096 3.98241 1.60005 4.1665 1.60005ZM5.83317 1.20005C5.83317 1.42096 5.68393 1.60005 5.49984 1.60005C5.31574 1.60005 5.1665 1.42096 5.1665 1.20005C5.1665 0.979135 5.31574 0.800049 5.49984 0.800049C5.68393 0.800049 5.83317 0.979135 5.83317 1.20005ZM2.1665 2.40005C2.3506 2.40005 2.49984 2.22096 2.49984 2.00005C2.49984 1.77913 2.3506 1.60005 2.1665 1.60005C1.98241 1.60005 1.83317 1.77913 1.83317 2.00005C1.83317 2.22096 1.98241 2.40005 2.1665 2.40005ZM3.83317 2.00005C3.83317 2.22096 3.68393 2.40005 3.49984 2.40005C3.31574 2.40005 3.1665 2.22096 3.1665 2.00005C3.1665 1.77913 3.31574 1.60005 3.49984 1.60005C3.68393 1.60005 3.83317 1.77913 3.83317 2.00005ZM4.83317 2.40005C5.01726 2.40005 5.1665 2.22096 5.1665 2.00005C5.1665 1.77913 5.01726 1.60005 4.83317 1.60005C4.64908 1.60005 4.49984 1.77913 4.49984 2.00005C4.49984 2.22096 4.64908 2.40005 4.83317 2.40005ZM5.83317 2.80005C5.83317 3.02096 5.68393 3.20005 5.49984 3.20005C5.31574 3.20005 5.1665 3.02096 5.1665 2.80005C5.1665 2.57914 5.31574 2.40005 5.49984 2.40005C5.68393 2.40005 5.83317 2.57914 5.83317 2.80005ZM4.1665 3.20005C4.3506 3.20005 4.49984 3.02096 4.49984 2.80005C4.49984 2.57914 4.3506 2.40005 4.1665 2.40005C3.98241 2.40005 3.83317 2.57914 3.83317 2.80005C3.83317 3.02096 3.98241 3.20005 4.1665 3.20005ZM3.1665 2.80005C3.1665 3.02096 3.01727 3.20005 2.83317 3.20005C2.64908 3.20005 2.49984 3.02096 2.49984 2.80005C2.49984 2.57914 2.64908 2.40005 2.83317 2.40005C3.01727 2.40005 3.1665 2.57914 3.1665 2.80005ZM1.49984 3.20005C1.68393 3.20005 1.83317 3.02096 1.83317 2.80005C1.83317 2.57914 1.68393 2.40005 1.49984 2.40005C1.31574 2.40005 1.1665 2.57914 1.1665 2.80005C1.1665 3.02096 1.31574 3.20005 1.49984 3.20005ZM2.49984 3.60005C2.49984 3.82096 2.3506 4.00005 2.1665 4.00005C1.98241 4.00005 1.83317 3.82096 1.83317 3.60005C1.83317 3.37913 1.98241 3.20005 2.1665 3.20005C2.3506 3.20005 2.49984 3.37913 2.49984 3.60005ZM3.49984 4.00005C3.68393 4.00005 3.83317 3.82096 3.83317 3.60005C3.83317 3.37913 3.68393 3.20005 3.49984 3.20005C3.31574 3.20005 3.1665 3.37913 3.1665 3.60005C3.1665 3.82096 3.31574 4.00005 3.49984 4.00005ZM5.1665 3.60005C5.1665 3.82096 5.01726 4.00005 4.83317 4.00005C4.64908 4.00005 4.49984 3.82096 4.49984 3.60005C4.49984 3.37913 4.64908 3.20005 4.83317 3.20005C5.01726 3.20005 5.1665 3.37913 5.1665 3.60005ZM5.49984 4.80005C5.68393 4.80005 5.83317 4.62096 5.83317 4.40005C5.83317 4.17913 5.68393 4.00005 5.49984 4.00005C5.31574 4.00005 5.1665 4.17913 5.1665 4.40005C5.1665 4.62096 5.31574 4.80005 5.49984 4.80005ZM4.49984 4.40005C4.49984 4.62096 4.3506 4.80005 4.1665 4.80005C3.98241 4.80005 3.83317 4.62096 3.83317 4.40005C3.83317 4.17913 3.98241 4.00005 4.1665 4.00005C4.3506 4.00005 4.49984 4.17913 4.49984 4.40005ZM2.83317 4.80005C3.01727 4.80005 3.1665 4.62096 3.1665 4.40005C3.1665 4.17913 3.01727 4.00005 2.83317 4.00005C2.64908 4.00005 2.49984 4.17913 2.49984 4.40005C2.49984 4.62096 2.64908 4.80005 2.83317 4.80005ZM1.83317 4.40005C1.83317 4.62096 1.68393 4.80005 1.49984 4.80005C1.31574 4.80005 1.1665 4.62096 1.1665 4.40005C1.1665 4.17913 1.31574 4.00005 1.49984 4.00005C1.68393 4.00005 1.83317 4.17913 1.83317 4.40005Z"
                        fill="url(#paint0_linear_12694_49953)"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_12694_49953"
                      x="1.1665"
                      y="0.800049"
                      width="4.6665"
                      height="5"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_12694_49953"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_12694_49953"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_12694_49953"
                      x1="1.1665"
                      y1="0.800049"
                      x2="1.1665"
                      y2="4.80005"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="#F0F0F0" />
                    </linearGradient>
                  </defs>
                </svg>
                USA
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown-search-city"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button-2"
                >
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us"
                          viewBox="0 0 512 512"
                        >
                          <g fill-rule="evenodd">
                            <g stroke-width="1pt">
                              <path
                                fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                            </g>
                            <path
                              fill="#192f5d"
                              d="M0 0h98.8v70H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"
                            />
                          </g>
                        </svg>
                        United States
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                          <path d="M0 0h512v170.7H0z" />
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                        </svg>
                        Germany
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-it"
                          viewBox="0 0 512 512"
                        >
                          <g fill-rule="evenodd" stroke-width="1pt">
                            <path fill="#fff" d="M0 0h512v512H0z" />
                            <path fill="#009246" d="M0 0h170.7v512H0z" />
                            <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                          </g>
                        </svg>
                        Italy
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div class="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          class="h-3.5 w-3.5 rounded-full mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          id="flag-icon-css-cn"
                          viewBox="0 0 512 512"
                        >
                          <defs>
                            <path
                              id="a"
                              fill="#ffde00"
                              d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                            />
                          </defs>
                          <path fill="#de2910" d="M0 0h512v512H0z" />
                          <use
                            width="30"
                            height="20"
                            transform="matrix(76.8 0 0 76.8 128 128)"
                            xlink:href="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-121 142.6 -47) scale(25.5827)"
                            xlink:href="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-98.1 198 -82) scale(25.6)"
                            xlink:href="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="rotate(-74 272.4 -114) scale(25.6137)"
                            xlink:href="#a"
                          />
                          <use
                            width="30"
                            height="20"
                            transform="matrix(16 -19.968 19.968 16 256 230.4)"
                            xlink:href="#a"
                          />
                        </svg>
                        China
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="relative w-full">
                <input
                  type="tel"
                  id="location-search"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              <span class="block mb-1">E-mail</span>
              <input
                type="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="info@dipex.lv"
                required
              />
            </label>
          </div>
          <label
            for="message"
            class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
          >
            <span class="block mb-1">Комментарий клиента</span>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Комментарий..."
            ></textarea>
          </label>
          <div class="mb-3 text-lg">
            Пожалуйста, укажите Авто Рег. Номер или VIN (необязательная опция)
          </div>
          <fieldset>
            <div class="flex gap-2 items-center">
              <div class="mr-5">Отправить VIN:</div>
              <legend class="sr-only">Отправить VIN</legend>
              <div class="flex items-center mr-2">
                <input
                  id="country-option-3"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked
                />
                <label
                  for="country-option-3"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Да
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="country-option-4"
                  type="radio"
                  name="countries"
                  value="Germany"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="country-option-4"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Нет
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 flex-1">
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm">
        <div class="text-xl font-semibold mb-5">Способ доставки</div>

        <ul class="flex flex-col gap-3">
          <li v-for="n in 4" :key="n">
            <input
              type="radio"
              :id="`small-${n}`"
              name="test"
              value=""
              class="hidden peer"
            />
            <label
              :for="`small-${n}`"
              class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-5">
                  <div class="w-16">
                    <img
                      src="https://dipex.lv/upload/sale/delivery/logotip/ebf/ebfe4a225cd74bf8e01536de87be3344.png"
                      alt=""
                    />
                  </div>
                  <div class="font-semibold">DPD</div>
                  <div>1.99 €</div>
                </div>
                <div>
                  <label
                    for="small"
                    class="block text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <select
                    id="small"
                    class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm">
        <div class="text-xl font-semibold mb-5">Способ оплаты</div>

        <ul class="flex flex-col gap-3">
          <li v-for="n in 2" :key="n">
            <input
              type="radio"
              :id="`small2-${n}`"
              name="test"
              value=""
              class="hidden peer"
            />
            <label
              :for="`small2-${n}`"
              class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center gap-5">
                  <div class="w-10">
                    <img
                      src="https://dipex.lv/upload/sale/paysystem/logotip/1bd/1bd47c8067b352c6ff7f9a5485449ef6.jpg"
                      alt=""
                    />
                  </div>
                  <div>Банковской картой (Онлайн Оплата)</div>
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm flex flex-col gap-3">
        <div class="text-xl font-semibold mb-5">Название товара</div>
        <div class="" v-for="n in 5" :key="n">
          <div class="flex items-center justify-between gap-4">
            <div class="max-w-[100px]">
              <img
                src="https://digital-assets.tecalliance.services/images/800/06db10283256b77b448fa34ffb371b05bb1fa538.jpg"
                alt=""
              />
            </div>
            <div class="flex-1 px-5">
              <NuxtLink
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                to="/catalog/rezerves-dalas/exhaust-system/cxcx072/"
                >Шланг, вентиляция картера TRUCKTEC AUTOMOTIVE
                02.14.037</NuxtLink
              >
            </div>
            <div>0.96 €</div>
            <div>5 шт.</div>
            <div>3.96 €</div>
          </div>
        </div>
      </div>
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm">
        <div class="flex flex-col gap-3">
          <div class="flex justify-between items-center">
            <div>Набор</div>
            <div>69 €</div>
          </div>
          <div class="flex justify-between items-center">
            <div>Доставка</div>
            <div>1.99 €</div>
          </div>
          <div class="flex justify-between items-center">
            <div>Сумма</div>
            <div>70.99 €</div>
          </div>
        </div>
      </div>
      <div class="bg-white px-5 py-4 rounded-lg shadow-sm">
        <div class="flex items-center mb-3">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Согласен с "<NuxtLink
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to="/"
              >Условиями</NuxtLink
            >" и "<NuxtLink
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              to="/"
              >Политикой Конфиденциальности</NuxtLink
            >"
          </label>
        </div>
        <NuxtLink
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          to="/"
          >Как выглядит стандартный процесс оплаты Банковской Картой?</NuxtLink
        >

        <div class="mt-5">
          <button class="btn py-3">
            Оформить заказ
          </button>
        </div>
        
      </div>
    </div>
  </form>
</template>
