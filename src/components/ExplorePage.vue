<template>
  <div class="min-h-screen flex flex-col">
    <div class="container tablet:pb-[74px] h-full bg-white mx-auto">
      <AppHeader>
        Explore
      </AppHeader>
      <div class="w-full mt-6 row flex items-center justify-between">
        <div class="flex tablet:hidden gap-4 items-center">
          <AppIcon
            @click="$router.go(-1)"
            name="vector"
            class="w-6 h-6 cursor-pointer"
          />
          <div class="text-2xl font-bold">Popular Films</div>
        </div>
      </div>
      <PageLoader v-show="!loaderTimer"/>
      <div class="flex flex-col mt-6 row gap-6">
        <div class="relative text-[#9E9E9E] justify-end flex gap-6 items-center w-full">
          <input
            type="text"
            v-model="inputValue"
            @keyup.enter="fetchFilms()"
            placeholder="Search"
            class="pl-4 w-full tablet:w-[268px] h-12"
          >
          <AppIcon
            name="search"
            class="w-8 h-8 cursor-pointer"
            @click="fetchFilms()"
          />
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-3 justify-items-center">
          <div
            v-for="(item,index) in searchedFilm.items || searchedFilm.films"
            :key="index"
            class="flex cursor-pointer flex-col gap-2 items-center justify-center w-full"
          >
            <div class="film-card">
              <img
                @click="$router.push({ path: '/film/' + (item.filmId || item.kinopoiskId)})"
                :src="item.posterUrl"
                alt="film card"
                class="w-full h-full"
              >
            </div>
            <div class="font-semibold text-center break-normal">{{item.nameRu}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppHeader from "./AppHeader.vue";
import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";
import { getFilms } from "../api/filmFetch.js";

export default {
  name: "explorePage",
  components: {AppIcon,PageLoader,AppHeader},
  data() {
    return {
      searchedFilm: '',
      inputValue : '',
      loaderTimer: false,
    }
  },
  methods: {
    fetchFilms() {
      getFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${this.inputValue}&page=1`,)
        .then(data => this.searchedFilm = data)
    },
     fetchTopFilms() {
      getFilms('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1',)
        .then(data => this.searchedFilm = data)
    }
  },
  async mounted() {
    await this.fetchTopFilms()
    setTimeout( () => {
      this.loaderTimer = true
    } ,600)
  },
}

</script>

<style scoped>

div {

}
</style>