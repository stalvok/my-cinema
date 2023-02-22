<template>
  <carousel :items-to-show="itemsToShow">
    <slide v-for="(item) in filmsSlice" :key="item">
      <div class="overflow-hidden rounded-3xl relative h-[200px] w-[140px] lg:w-[200px] lg:h-[300px]">
          <img
            @click="$router.push({ path: '/film/' + item.filmId})"
            :src="item.posterUrlPreview"
            alt="film card"
            class="w-full object-cover cursor-pointer h-full"
          >
      </div>
    </slide>
  </carousel>
</template>

<script>

import { getFilms } from "../api/filmFetch.js";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default  {
  name: "CarouselSlider",
  components: { Carousel, Pagination, Slide, Navigation},
  data() {
    return {
      filmsArray: [],
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
     getPopularFilms() {
      getFilms('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1')
        .then(data => this.filmsArray = data.films)
    },
     getNewRelease() {
       getFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=FEBRUARY`)
         .then(data => this.filmsArray = data.items.map(film => {
           return {
             filmId: film.kinopoiskId,
             ...film
           }
         }))
    },
  },
  computed: {
    filmsSlice() {
      return this.filmsArray.slice(0,this.maxNumber)
    }
  },
 async mounted() {
    if (this.typeOfArray === 'popularFilms') {
      await this.getPopularFilms()
    }
   if (this.typeOfArray === 'newReleases') {
     await this.getNewRelease()
   }
  },
}

</script>
