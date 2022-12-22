<template>
  <carousel :items-to-show="itemsToShow">
    <slide v-for="(slide,index) in filmsArray[Object.keys(filmsArray)[1]]" :key="slide">
      <div class="bg-blue-400 overflow-hidden drop-shadow-lg rounded-3xl relative h-[200px] w-[140px]">
        <img
          :src="filmsArray[Object.keys(filmsArray)[1]][index].posterUrlPreview"
           alt="film card"
          class="w-full h-full"
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
      filmsArray: [],
      test: 'newReleases'
    }
  },
  props: {
    itemsToShow: Number,
    typeOfArray: String
  },
  methods: {
    async getNewRelease() {
        await fetch(`./mock/${this.$props.typeOfArray}.json`,{
          headers: {
            'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(json => this.filmsArray = json)
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