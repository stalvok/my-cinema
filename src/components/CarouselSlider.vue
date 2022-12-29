<template>
  <carousel :items-to-show="itemsToShow">
    <slide v-for="(slide,index) in filmsSlice" :key="slide">
      <div class="overflow-hidden drop-shadow-lg rounded-3xl relative h-[200px] w-[140px]">
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
      filmsSlice: [],
    }
  },
  props: {
    itemsToShow: Number,
    typeOfArray: String,
    maxNumber: {
      type:String,
      default: 999,
    }
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
    filmSlice() {
     this.filmsSlice = this.filmsArray[Object.keys(this.filmsArray)[1]].slice(0,this.maxNumber)
    }
  },
  computed:{

  },
 async mounted() {
   await this.getNewRelease()
   this.filmSlice()
  },
}
</script>

<style scoped>





</style>