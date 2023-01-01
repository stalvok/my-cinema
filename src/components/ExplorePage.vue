<template>
  <div class="min-h-screen h-1 flex flex-col bg-[#F4F4F4]">
    <div class="container h-full bg-white mx-auto">
      <div class="flex flex-col mt-6 row gap-6">
        <div class="relative text-[#9E9E9E] flex items-center w-full">
          <AppIcon name="search" class="w-6 mr-4 right-0 h-6 absolute"/>
          <input
            type="text"
            v-model="inputValue"
            @keyup.enter="fetchFilms()"
            placeholder="Search"
            class="w-full pl-4 h-12"
          >
        </div>
        <div class="grid grid-cols-2 items-start gap-3 justify-items-center">
          <div
            @click="$router.push({ path: '/film/id', query: { id: item.kinopoiskId}})"
            v-for="(item,index) in searchedFilm.items"
            :key="index"
            class="flex cursor-pointer flex-col gap-2 items-center justify-center w-full"
          >
            <div class="max-w-[200px] bg-blue-400 overflow-hidden drop-shadow-lg rounded-3xl relative h-[240px] w-full">
              <img
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
    <MobileNavigation class="sticky "/>
  </div>
</template>



<script>

import AppIcon from "./AppIcon.vue";
import MobileNavigation from "./MobileNavigation.vue";

export default {
  name: "explorePage",
  components: {AppIcon,MobileNavigation},
  data() {
    return {
      searchedFilm: '',
      inputValue : '',
    }
  },
  methods: {
    async fetchFilms() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${this.inputValue}&page=1`, {
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
          .then(res => res.json())
          .then(json => this.searchedFilm = json)
      console.log(this.searchedFilm)
    },
  },
  async mounted() {

  }
}
</script>

<style scoped>

div {

}

</style>