<template>
  <div class="grid grid-cols-6 gap-7 my-10">
    <a
      v-for="brand in brandSecond"
      :key="brand.id"
      class="flex items-center flex-col p-5 bg-white shadow rounded hover:shadow-md"
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
      brandSecond: [
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/toyota.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/toyota.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },

        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
        {
          id: 1,
          title: "Audi",
          href: "/",
          imgUrl: "https://dipex.lv/carparts/media/brands/90/audi.png",
        },
      ],
    };
  },
};
</script>
