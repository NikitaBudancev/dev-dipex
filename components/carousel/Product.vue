<template>
  <div class="">
    <Carousel
      id="gallery"
      v-model="currentSlide"
      :items-to-show="1"
      :wrap-around="true"
    >
      <Slide v-for="(slide, imageIndex) in slides" :key="imageIndex">
        <div class="carousel__item" @click="index = imageIndex">
          <img :src="slide.src" alt="" />
        </div>
      </Slide>
    </Carousel>

    <div class="nav-slider flex gap-2 flex-wrap justify-center mt-7">
      <button
        v-for="(slide, imageIndex) in slides"
        :key="imageIndex"
        class="w-14 h-14 border-2 rounded-lg p-1"
        :class="[
          imageIndex == currentSlide ? 'border-amber-500' : 'border-gray-300',
        ]"
        @click="slideTo(imageIndex)"
      >
        <img :src="slide.src" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  name: "Gallery",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    currentSlide: 0,
    index: null,
    slides: [
      {
        title: "In nature, nothing is perfect and everything is perfect",
        description: "Photo by Lucas",
        src: "https://digital-assets.tecalliance.services/images/800/5f3bc79adf31743c79954e3f18bf197f71d53c95.jpg",
      },
      {
        title: "In nature, nothing is perfect and everything is perfect",
        description: "Photo by Lucas",
        src: "https://digital-assets.tecalliance.services/images/800/d3b9269d19b63c232121bee7ca30537aefafd5eb.jpg",
      },
      {
        title: "In nature, nothing is perfect and everything is perfect",
        description: "Photo by Lucas",
        src: "https://digital-assets.tecalliance.services/images/800/5f3bc79adf31743c79954e3f18bf197f71d53c95.jpg",
      },
    ],
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>

<style scoped>
#thumbnails {
  max-width: 450px;
  margin-top: 30px;
}
#thumbnails .carousel__slide {
  padding: 10px 0;
  padding-left: 10px;
}
#thumbnails .carousel__item {
  border: 2px solid #dadada;
  border-radius: 6px;
  overflow: hidden;
}

#thumbnails .carousel__item.active-slide {
  border: 2px solid #ffae09;
}
</style>
