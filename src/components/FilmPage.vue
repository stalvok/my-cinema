<template>
 <div class="min-h-screen flex bg-[#F4F4F4]">
   <div class="container bg-white mx-auto">
     <div class="flex flex-col mt-2 gap-4 sm:flex-row">
       <div class="relative row flex h-[560px] justify-center w-full">
         <div class="relative">
           <img class="object-center h-full w-full max-w-[480px] drop-shadow-xl rounded-3xl" :src="currentFilm.posterUrl" alt="">
           <AppIcon
             name="vector"
             class="ml-6 top-4 w-8 h-8 border-0 absolute left-0 top-0 text-white bg-black p-1.5 rounded-full cursor-pointer"
             @click="$router.go(-1)"
           />
           <AppIcon
              name="plus"
              class="w-6 h-6 absolute right-0 mr-6 cursor-pointer top-4 fill-white"
           />
         </div>
       </div>
     <div class="flex flex-col gap-4 row sm:flex-row items-center justify-center">
       <div class="text-3xl font-bold">{{currentFilm.nameOriginal}}</div>
       <div class="flex items-center flex-wrap gap-x-4 gap-y-1">
         <div class="button outline is-link-active is-exact-active is-small">
           {{currentFilm.ratingMpaa}}
         </div>
         <div class="button outline is-small">
           {{currentFilm.year}}
         </div>
         <div class="button outline is-small">
            <AppIcon
              name="kinopoisk"
              class="w-6 h-6 mr-2 text-red fill-red-400"
            />
           {{currentFilm.ratingKinopoisk}}
         </div>
         <div class="button outline is-small">
           {{currentFilm.filmLength}} min
         </div>
       </div>
       <div class="flex gap-2 font-semibold ">
         <div>Genre:</div>
         <div class="flex-1 flex flex-wrap gap-1">
           <div
             v-for="genre in this.currentGenres"
             key="genre"
             class="first-letter:uppercase cursor-pointer text-sm bg-red !text-white py-1 px-2 rounded-xl"
           >
             {{genre}}
           </div>
         </div>
       </div>
       <div class="">
         <div v-if="!longText1" class="">{{description}}...<span class="text-red text-xl cursor-pointer font-semibold" @click="longText1=!longText1">View more</span></div>
         <div v-if="longText1">{{currentFilm.description}} <span class="text-red text-xl cursor-pointer font-semibold" @click="longText1=!longText1"> Hide</span></div>
       </div>
     </div>
     </div>
   </div>
 </div>

</template>

<script>

import AppIcon from "./AppIcon.vue";

export default {
  components: {AppIcon},
  name: "FilmPage",
  data() {
    return {
      currentFilm:'',
      description:'',
      longText1: false,
      currentGenres:[]
    }
  },
  methods: {
    async fetchFilm() {
      await fetch(`./mock/filmById.json`,{
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
          .then(res => res.json())
          .then(json => this.currentFilm = json)
    },
    getGenres(genres) {
      genres.forEach(genre => {
        this.currentGenres.push(genre.genre)
      })
    },
    longText(text) {
      this.description = text.slice(0 ,100)
    }
  },
  computed: {

  },
  async mounted() {
    await this.fetchFilm()
    this.getGenres(this.currentFilm.genres)
    this.longText(this.currentFilm.description)
    console.log(this.$route.path)
  }
}
</script>



<style scoped>

 div {
 border: 1px solid ;
 }
</style>