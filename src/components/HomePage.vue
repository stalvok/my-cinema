<template>
  <div class="min-h-screen flex bg-[#F4F4F4] items-center">
    <div class="container bg-white mx-auto">
      <div class="flex flex-col gap-6">
        <div class="relative row h-[400px]">
          <img
            class="absolute left-0 object-cover h-full w-full "
            src="../assets/img/homeArt.jpg"
            alt=""
          >
          <AppIcon name="search" class="w-7 mt-4 absolute right-0 mr-20 h-7 text-white"/>
          <img class="h-7 w-7 mt-4 absolute" src="../assets/img/litterM-home.png">
          <AppIcon name="bell" class="w-7 absolute mt-4 mr-6 right-0 h-7 text-white"/>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex row justify-between">
            <div class="text-lg font-bold">Top 10 Popular Movies</div>
            <router-link to="/popularFilms"><div class="text-red font-semibold">See all</div></router-link>
          </div>
          <CarouselSlider :max-number="10" type-of-array="popularFilms" :items-to-show="2.5"/>
          <div class="flex row justify-between">
            <div class="text-lg font-bold">New Releases</div>
            <routerLink to="/releases"><div class="text-red font-semibold">See all</div></routerLink>
          </div>
          <CarouselSlider :max-number="20" type-of-array="newReleases" :items-to-show="2.5"/>
        </div>
      </div>
       <MobileNavigation class="fixed"/>
    </div>
  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import CarouselSlider from "./CarouselSlider.vue";
import MobileNavigation from "./MobileNavigation.vue";
import AppIcon from "./AppIcon.vue";

export default {
  name: "HomePage",
  components: {AppIcon, CarouselSlider,MobileNavigation},
  data() {
    return {

    }
  },
  mounted() {

  }
}


</script>

<style scoped>


div {

}

</style>