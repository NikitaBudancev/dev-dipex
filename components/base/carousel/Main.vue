<template>
  <carousel
    :items-to-show="1"
    :autoplay="5000"
    :transition="600"
    :wrapAround="1"
    :pauseAutoplayOnHover="1"
  >
    <slide v-for="slide in slides" :key="slide.id">
      <img :src="slide.imgUrl" :alt="slide.title" :title="slide.title" />
    </slide>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.carousel {
  max-width: 986px;
}

.carousel .carousel__slide img {
  max-height: 320px;
}
</style>
