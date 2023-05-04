<template>
  <div class="grid grid-cols-3 gap-5 text-white uppercase font-semibold">
    <div
      class="flex justify-center px-5 py-10 bg-no-repeat bg-cover rounded-md opacity-80 hover:opacity-100 transition-all"
      style="background-image: url('/images/profile/wt_yellow.png')"
    >
      <div class="sale-personal-section-index-block bx-theme-yellow">
        <NuxtLink
          class="flex flex-col items-center gap-5"
          :to="localePath('/personal/orders/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-calculator"
            viewBox="0 0 16 16"
          >
            <path
              d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
            />
            <path
              d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"
            />
          </svg>
          <h2 class="sale-personal-section-index-block-name">Текущие заказы</h2>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex justify-center px-5 py-10 bg-no-repeat bg-cover rounded-md opacity-80 hover:opacity-100 transition-all"
      style="background-image: url('/images/profile/wt_yellow.png')"
    >
      <div class="sale-personal-section-index-block bx-theme-yellow">
        <NuxtLink
          class="flex flex-col items-center gap-5"
          :to="localePath('/personal/private/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="51"
            viewBox="0 0 41 51"
            fill="none"
          >
            <path
              d="M16.6656 46.2526L19.3908 32.7921L16.6656 28.9448L13.0288 27.0211L16.6656 46.2526ZM23.9392 46.2526L27.576 27.0211L23.9392 28.9448L21.214 32.7921L23.9392 46.2526ZM28.4828 15.9026C28.4442 15.821 28.4056 15.7648 28.367 15.724C28.1789 15.5658 27.2673 15.4842 25.6418 15.4842C24.3154 15.4842 22.7334 15.673 20.8957 16.0557C20.7654 16.0965 20.5629 16.1169 20.2976 16.1169C20.0323 16.1169 19.8345 16.0965 19.6995 16.0557C17.8618 15.673 16.2797 15.4842 14.9533 15.4842C13.323 15.4842 12.4162 15.5658 12.2281 15.724C12.1895 15.7648 12.1509 15.8261 12.1124 15.9026C12.1509 16.2649 12.1895 16.5353 12.2281 16.7139C12.2667 16.7751 12.3391 16.8415 12.4403 16.9078C12.5416 16.9741 12.614 17.0813 12.6526 17.2242C12.6912 17.3058 12.7635 17.5099 12.8648 17.8416C12.9709 18.1733 13.0336 18.3774 13.0626 18.459C13.0915 18.5406 13.1638 18.709 13.2748 18.9692C13.3905 19.2295 13.4677 19.3979 13.516 19.4795C13.5642 19.5611 13.6462 19.6989 13.7716 19.8979C13.897 20.0969 14.0079 20.2347 14.114 20.3061C14.2202 20.3776 14.3504 20.4694 14.5096 20.5919C14.6687 20.7143 14.8376 20.7909 15.0064 20.8317C15.1752 20.8725 15.3729 20.9133 15.59 20.9541C15.807 20.995 16.0386 21.0154 16.2846 21.0154C16.9646 21.0154 17.5242 20.8878 17.9583 20.6378C18.3924 20.3878 18.701 20.0867 18.8795 19.7346C19.058 19.3826 19.1979 19.0407 19.2895 18.6988C19.386 18.3569 19.4921 18.061 19.6175 17.811C19.7429 17.5609 19.9069 17.4334 20.1143 17.4334H20.4567C20.6642 17.4334 20.833 17.5609 20.9536 17.811C21.079 18.061 21.1851 18.3569 21.2815 18.6988C21.378 19.0407 21.5131 19.3826 21.6915 19.7346C21.87 20.0867 22.1787 20.3878 22.6128 20.6378C23.0469 20.8878 23.6064 21.0154 24.2865 21.0154C24.5325 21.0154 24.764 20.995 24.981 20.9541C25.1981 20.9133 25.391 20.8725 25.5647 20.8317C25.7335 20.7909 25.9023 20.7092 26.0615 20.5919C26.2206 20.4694 26.3557 20.3776 26.457 20.3061C26.5583 20.2347 26.674 20.102 26.7994 19.8979C26.9249 19.6989 27.0068 19.556 27.0551 19.4795C27.1033 19.3979 27.1853 19.2295 27.2963 18.9692C27.412 18.709 27.4795 18.5406 27.5085 18.459C27.5374 18.3774 27.6049 18.1733 27.7062 17.8416C27.8123 17.5099 27.8799 17.3058 27.9185 17.2242C27.957 17.0864 28.0294 16.9792 28.1307 16.9078C28.232 16.8364 28.3043 16.77 28.3429 16.7139C28.4056 16.5353 28.4442 16.2649 28.4828 15.9026ZM40.3 42.3186C40.3 44.7423 39.6102 46.6455 38.2259 48.0283C36.8416 49.4111 35.0088 50.1 32.7177 50.1H7.88711C5.59602 50.1 3.75833 49.4111 2.37403 48.0283C0.989726 46.6455 0.299988 44.7423 0.299988 42.3186C0.299988 41.0991 0.343398 39.9153 0.430218 38.7723C0.517038 37.6293 0.695502 36.3741 0.970432 35.0015C1.24536 33.6289 1.60229 32.3941 2.03639 31.2919C2.47049 30.1898 3.07341 29.154 3.84032 28.1794C4.60723 27.2099 5.49473 26.4598 6.49799 25.9393L3.94161 19.3264H10.019C9.60422 18.0457 9.39199 16.7598 9.39199 15.4791C9.39199 15.2393 9.41129 14.9178 9.44987 14.5198C5.77448 13.7187 3.93679 12.7543 3.93679 11.6369C3.93679 10.4939 5.92401 9.504 9.90327 8.66208C10.2264 7.42215 10.7136 6.08018 11.3647 4.63615C12.0159 3.19213 12.6863 2.05426 13.3664 1.21234C13.9742 0.472465 14.6928 0.099975 15.5273 0.099975C16.0964 0.099975 16.8923 0.411234 17.9148 1.03375C18.9374 1.65626 19.7332 1.96751 20.3024 1.96751C20.8716 1.96751 21.6674 1.65626 22.69 1.03375C23.7125 0.411234 24.5084 0.099975 25.0775 0.099975C25.912 0.099975 26.6306 0.472465 27.2384 1.21234C27.9185 2.05426 28.5889 3.19723 29.2401 4.63615C29.8912 6.08018 30.3832 7.42215 30.7015 8.66208C34.6808 9.504 36.668 10.4939 36.668 11.6369C36.668 12.7594 34.8303 13.7187 31.1549 14.5198C31.2852 16.1424 31.097 17.7446 30.5858 19.3264H36.6632L34.3335 26.0873C35.5249 26.7507 36.5426 27.715 37.3867 28.9856C38.2308 30.2561 38.8482 31.695 39.2485 33.2972C39.6488 34.8994 39.9189 36.42 40.0733 37.8487C40.2276 39.2774 40.3 40.7725 40.3 42.3186Z"
              fill="currentColor"
            />
          </svg>
          <h2 class="sale-personal-section-index-block-name">Личные данные</h2>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex justify-center px-5 py-10 bg-no-repeat bg-cover rounded-md opacity-80 hover:opacity-100 transition-all"
      style="background-image: url('/images/profile/wt_yellow.png')"
    >
      <div class="sale-personal-section-index-block bx-theme-yellow">
        <NuxtLink
          class="flex flex-col items-center gap-5"
          :to="localePath('/personal/orders/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-card-list"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
            />
            <path
              d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
            />
          </svg>
          <h2 class="sale-personal-section-index-block-name">
            История заказов
          </h2>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex justify-center px-5 py-10 bg-no-repeat bg-cover rounded-md opacity-80 hover:opacity-100 transition-all"
      style="background-image: url('/images/profile/wt_yellow.png')"
    >
      <div class="sale-personal-section-index-block bx-theme-yellow">
        <NuxtLink
          class="flex flex-col items-center gap-5"
          :to="localePath('/personal/cart/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <h2 class="sale-personal-section-index-block-name">Корзина</h2>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex justify-center px-5 py-10 bg-no-repeat bg-cover rounded-md opacity-80 hover:opacity-100 transition-all"
      style="background-image: url('/images/profile/wt_yellow.png')"
    >
      <div class="sale-personal-section-index-block bx-theme-yellow">
        <NuxtLink
          class="flex flex-col items-center gap-5"
          :to="localePath('/about/contacts/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-info-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            />
          </svg>
          <h2 class="sale-personal-section-index-block-name">Контакты</h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
