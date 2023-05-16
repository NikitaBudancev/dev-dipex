<template>
  <div class="flex gap-5 bg-white rounded-md shadow-md p-5">
    <div class="max-w-[35%]">
      <BaseCarouselProduct />
    </div>
    <div class="flex-1">
      <div class="text-2xl mb-5">Тормозной диск BLUE PRINT ADM54385</div>
      <div
        class="icon-text mb-6 border-2 border-amber-600 rounded-md py-2 px-3 bg-[#ffa50017]"
      >
        <svg
          class="icon"
          aria-hidden="true"
          height="24px"
          focusable="false"
          data-prefix="far"
          data-icon="exclamation-triangle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          fill="orange"
        >
          <path
            d="M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z"
          ></path>
        </svg>
        <span class="text text-amber-600"
          >Проверьте подходит ли этот товар к Вашему авто!</span
        >
      </div>
      <div class="product-spec-table-block">
        <div class="font-bold mb-3">Общая спецификация товара:</div>
        <table class="product-property-table w-full text-sm">
          <tbody>
            <tr>
              <th>
                <span class="product-property-table__prop-name">Артикул</span>
              </th>
              <td>
                <span class="product-property-table__prop-value">
                  ADM54385
                </span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Толщина тормозного диска (мм)</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">24</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Число отверстий в диске колеса</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">6</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Толщина [мм]</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">24</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Наружный диаметр [мм]</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">256</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Ø фаски [мм]</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">108</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Поверхность</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value"
                  >с покрытием</span
                >
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Тип тормозного диска</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value"
                  >с внутренней вентиляцией</span
                >
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Сторона установки</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value"
                  >передний мост</span
                >
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Минимальная толщина [мм]</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">22</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name"
                  >Диаметр центрирования [мм]</span
                >
              </th>
              <td class="">
                <span class="product-property-table__prop-value">86</span>
              </td>
            </tr>
            <tr>
              <th class="">
                <span class="product-property-table__prop-name">Вес [кг]</span>
              </th>
              <td class="">
                <span class="product-property-table__prop-value">5</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex-1 max-w-[300px]">
      <div class="flex justify-between items-center mb-3">
        <BaseProductBrandLogo :id="1" tooltipText="ABAKUS" imgPath="https://dipex.lv/images/brands/10100001.jpg"/>
        <BaseProductRating :id="2" tooltipText="Bысокий класс" :rating="3"/>
      </div>
      <div class="icon-text mb-1">
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
      </div>
      <div class="icon-text">
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
        <span class="text">Срок поставки: 1-2 дня</span>
      </div>
      <div
        class="flex flex-col items-center gap-5 mt-4 p-5 border-2 border-gray-200 rounded-md"
      >
        <BaseProductPrice />
        <BaseProductCount />
        <div>
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
              ></path></svg
            ><span class="text">Купить</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <BaseProductTabs />
  </div>
</template>

<script></script>

<style scoped>
.product-property-table th {
  text-align: left;
}

.product-property-table td {
  text-align: right;
}
.product-property-table th,
.product-property-table td {
  position: relative;
  border-bottom: 10px solid #fff;
}
.product-property-table th:after,
.product-property-table td:before {
  content: "";
  display: block;
  left: 0;
  bottom: 5px;
  position: absolute;
  width: 100%;
  border-bottom: 1px dotted #d6dbe0;
}

th {
  text-align: left;
}

.product-property-table__prop-name,
.product-property-table__prop-value {
  position: relative;
  background: #fff;
  z-index: 1;
  color: #666767;
  font-weight: normal;
}

.product-property-table__prop-name {
  padding-right: 5px;
}

.product-property-table__prop-value {
  padding-left: 5px;
}
</style>
