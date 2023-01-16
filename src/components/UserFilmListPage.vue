<template>
   <div class="min-h-[736px] ">
     <div class="container mx-auto tablet:pb-[74px] h-full min-h-[736px]">
       <div class="flex gap-10 mt-10 flex-col h-full">
         <div class="flex row justify-between">
           <div class="flex gap-4 justify-between items-center">
             <img class="h-6 w-6" src="../assets/img/litterM-home.png">
             <span class="text-2xl font-bold">My List</span>
           </div>
           <AppIcon name="search" class="h-full w-8"/>
         </div>
         <div v-if="!addedFilms" class="m-auto relative bottom-10">
           <img src="../assets/img/tablets.jpg" class="w-full h-full object-cover" />
         </div>
         <div v-if="addedFilms" class="grid row h-full grid-cols-2 items-start gap-3 justify-items-center">
           <div
             @click="$router.push({ path: '/film/' + item.kinopoiskId })"
             v-for="(item,index) in addedFilms.films"
             :key="index"
             class="flex cursor-pointer flex-col gap-2 items-center justify-center w-full"
           >
             <div class="max-w-[200px] bg-blue-400 overflow-hidden drop-shadow-lg rounded-3xl relative h-[240px] w-full">
               <img
                 :src="item.posterUrl"
                 alt="film card"
                 class="w-full h-full"
               >
               <AppIcon
                 name="plus"
                 class="h-6 w-6 absolute top-3 bg-red fill-white rounded-xl rotate-45 right-3"
                 @click.stop="deleteFilm(index)"
               />
             </div>
             <div class="font-semibold text-center break-normal">{{item.nameRu}}</div>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>
<script>

import AppIcon from "./AppIcon.vue";
import {useStorage} from "@vueuse/core";

export default {
  components: {AppIcon},
  name: "UserFilmList",
  data() {
    return {
      addedFilms:JSON.parse(localStorage.getItem('user-films')),
      newArray: ''
    }
  },
  methods: {
     deleteFilm(index) {
      this.addedFilms.films.splice(index,1)
       console.log(this.addedFilms.films)
    },
  },
   mounted() {

  },
  beforeRouteLeave() {
    localStorage.clear()
    useStorage('user-films', this.addedFilms)
    console.log('routerLeave')
  }
}
</script>

<style scoped>

</style>