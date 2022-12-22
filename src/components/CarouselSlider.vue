<template>
  <carousel :items-to-show="2.5">
    <slide v-for="(slide,index) in newRelease.items" :key="slide">
      <div class="bg-blue-400 overflow-hidden rounded-3xl relative flex items-center justify-center h-[200px] w-[140px] bg">
        <img
          :src="newRelease.items[index].posterUrlPreview"
           alt="film card"
          class=" w-full h-full"
        >
      </div>
    </slide>
  </carousel>
</template>



<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
  name: "CarouselSlider",
  components: { Carousel, Pagination, Slide, Navigation},
  data() {
    return {
      newRelease: []
    }
  },
  methods: {
    async getNewRelease() {
        await fetch('./mock/newReleases.json',{
          headers: {
            'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(json => this.newRelease = json)
    },
  },
  mounted() {
    this.getNewRelease()
  },
}
</script>

<style scoped>

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>