<template>
  <div class="header-lang">
    <div class="dropdown show">
      <button
        ref="btnRef"
        v-on:click="togglePopover()"
        href="#"
        role="button"
        id="dropdownMenuLink"
        class="dropdown-toggle relative flex items-center gap-1 text-sm py-1 px-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512; margin-right: 5px"
          xml:space="preserve"
          width="20px"
        >
          <path
            style="fill: #f5f5f5"
            d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471  C512,105.443,494.833,88.276,473.655,88.276z"
          ></path>
          <path
            style="fill: #ff4b55"
            d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345  v-73.471H0V385.379z"
          ></path>
          <rect
            y="200.09"
            style="fill: #41479b"
            width="512"
            height="111.81"
          ></rect>
        </svg>

        RU
      </button>

      <div
        ref="popoverRef"
        v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
        class="bg-gray-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
      >
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" hreflang="lv" href="/lv/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              width="20px"
            >
              <g>
                <path
                  style="fill: #c8414b"
                  d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v98.483h512v-98.483   C512,105.443,494.833,88.276,473.655,88.276z"
                ></path>
                <path
                  style="fill: #c8414b"
                  d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345   v-98.483H0V385.379z"
                ></path>
              </g>
              <rect
                y="225.1"
                style="fill: #f5f5f5"
                width="512"
                height="61.793"
              ></rect>
            </svg>

            LV
          </a>
          <a class="dropdown-item" hreflang="lt" href="/lt/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              width="20px"
              xml:space="preserve"
            >
              <path
                style="fill: #ff4b55"
                d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345  v-73.471H0V385.379z"
              ></path>
              <path
                style="fill: #ffe15a"
                d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471  C512,105.443,494.833,88.276,473.655,88.276z"
              ></path>
              <rect
                y="200.09"
                style="fill: #73af00"
                width="512"
                height="111.81"
              ></rect>
            </svg>
            LT
          </a>
          <a class="dropdown-item" hreflang="et" href="/et/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              width="20px"
            >
              <path
                style="fill: #0072cf"
                d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471  C512,105.443,494.833,88.276,473.655,88.276z"
              ></path>
              <path
                style="fill: white"
                d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345  v-73.471H0V385.379z"
              ></path>
              <rect
                y="200.09"
                style="fill: black"
                width="512"
                height="111.81"
              ></rect>
            </svg>
            ET
          </a>
          <a class="dropdown-item" hreflang="ru" href="/ru/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              width="20px"
            >
              <path
                style="fill: #f5f5f5"
                d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471  C512,105.443,494.833,88.276,473.655,88.276z"
              ></path>
              <path
                style="fill: #ff4b55"
                d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345  v-73.471H0V385.379z"
              ></path>
              <rect
                y="200.09"
                style="fill: #41479b"
                width="512"
                height="111.81"
              ></rect>
            </svg>
            RU
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';

export default {
  name: 'top-gray-popover',
  data() {
    return {
      popoverShow: false,
    };
  },
  methods: {
    togglePopover: function () {
      if (this.popoverShow) {
        this.popoverShow = false;
      } else {
        this.popoverShow = true;
        createPopper(this.$refs.btnRef, this.$refs.popoverRef, {
          placement: 'top',
        });
      }
    },
  },
};
</script>
