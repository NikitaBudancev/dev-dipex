<template>
  <div class="flex flex-wrap justify-center gap-5">
    <div class="max-w-[160px] p-3" v-for="brand in brandMain" :key="brand.id">
      <a class="" :href="brand.href">
        <img
          class="card-img-top"
          :src="brand.imgUrl"
          :alt="brand.title"
          :title="brand.title"
        />
      </a>
    </div>
  </div>
  <div class="grid grid-cols-6 gap-7 my-10">
    <a
      class="flex items-center flex-col p-5 bg-white shadow rounded hover:shadow-md"
      v-for="brand in brandSecond"
      :key="brand.id"
      :href="brand.href"
    >
      <img
        class="text-dark max-w-[60px] max-h-[60px]"
        :src="brand.imgUrl"
        :alt="brand.title"
      />
      <span class="card-text text-sm uppercase font-bold mt-5">{{
        brand.title
      }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandMain: [
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 2,
          title: 'BMW',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/bmw.png',
        },
        {
          id: 3,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 4,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 5,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 6,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 7,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 8,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 9,
          title: 'Скидка',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
      ],
      brandSecond: [
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/toyota.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/toyota.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },

        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
        {
          id: 1,
          title: 'Audi',
          href: '/',
          imgUrl: 'https://dipex.lv/carparts/media/brands/90/audi.png',
        },
      ],
    };
  },
};
</script>
