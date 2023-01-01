<template>
  <carousel :items-to-show="itemsToShow">
    <slide v-for="(item,index) in filmsSlice" :key="item">
      <div class="overflow-hidden drop-shadow-lg rounded-3xl relative h-[200px] w-[140px]">
          <img
            @click="$router.push({ path: '/film/id', query: { id: Object.values(item)[0]}})"
            :src="filmsArray[Object.keys(filmsArray)[1]][index].posterUrlPreview"
            alt="film card"
            class="w-full cursor-pointer h-full"
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
      type:Number,
      default: 999,
    }
  },
  methods: {
    async getNewRelease() {
        await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,{
          headers: {
            'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(json => this.filmsArray = json)
    },
    async getPopularFilms() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=DECEMBER`,{
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
    console.log(this.typeOfArray)
    if (this.typeOfArray === 'popularFilms') {
      await this.getNewRelease()
    }
   if (this.typeOfArray === 'newReleases') {
     await this.getPopularFilms()
   }

   this.filmSlice()
  },
}
</script>

<style scoped>





</style>