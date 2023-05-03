<template>
  <div class="product-item-brand__logo-block tooltip__btn relative">
    <button data-tooltip-target="tooltip-default" type="button">
      <img
        src="https://dipex.lv/images/brands/465717018.jpg"
        class="h-7"
      />
    </button>
    <div
      id="tooltip-default"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      ABAKUS
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>