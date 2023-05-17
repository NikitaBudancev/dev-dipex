<template>
  <footer class="footer-bg text-white">
    <div class="container-main mx-auto px-4 py-10">
      <div class="flex justify-between flex-wrap">
        <div class="flex flex-col -order-1 gap-5">
          <div class="footer-logo">
            <img class="img-fluid" src="https://dipex.lv/static/logo.svg" />
          </div>
          <div class="footer-callback">
            <div class="footer-text mb-3">
              <p>Хотите задать вопрос? Мы вам поможем!</p>
            </div>
            <div class="footer-button">
              <a href="/rutest" class="btn justify-center">Написать нам</a>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <div class="footer-nav">
            <ul class="flex flex-col gap-5">
              <li class="nav-item">
                <a class="nav-link" href="/ru/auth/">Мой профиль</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ru/about/payment/">Оплата</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ru/about/delivery/">Доставка</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <div class="footer-nav">
            <ul class="flex flex-col gap-5">
              <li class="nav-item">
                <a class="nav-link" href="/ru/about/privacy-policy/"
                  >Политика конфиденциальности</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ru/about/returns-and-refunds/"
                  >Возврат и возмещение</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <div class="footer-nav">
            <div class="contact-header flex items-center mb-4 font-bold">
              Контакты
            </div>
            <ul>
              <li class="nav-item mb-4">
                <div class="contacts-email">
                  <a class="icon-text" href="mailto:info@dipex.lv">
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
                    <span>info@dipex.lv</span>
                  </a>
                </div>
              </li>
              <li class="nav-item mb-4">
                <div class="contacts-phone">
                  <a href="tel:64415360" class="icon-text">
                    <svg
                      aria-hidden="true"
                      height="20px"
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
              </li>
              <li class="nav-item mb-4">
                <div>
                  <img
                    src="https://dipex.lv/images/tecdoc-inside.png"
                    alt="TecDoc inside"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bg {
  background: url(https://dipex.lv/bitrix/templates/eshop_bootstrap_yellow/images/car.png)
      right bottom no-repeat,
    url(https://dipex.lv/bitrix/templates/eshop_bootstrap_yellow/images/footer-bg2.png)
      left bottom no-repeat #292d2e;
}

.contact-header {
  position: relative;
}
.contact-header:after {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 20px;
  background-image: url(https://dipex.lv/bitrix/templates/eshop_bootstrap_yellow/static/arrow-right-icon.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
