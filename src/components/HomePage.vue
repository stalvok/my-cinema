<template>
  <div class="bg-[#F4F4F4]">
    <div class="container tablet:pb-[74px] bg-white mx-auto">
      <div class="flex flex-col gap-6">
        <div class="relative row h-[400px]">
          <img
            class="absolute left-0 object-cover h-full w-full "
            src="../assets/img/homeArt.jpg"
            alt=""
          >
          <img
            class="h-10 w-10 mt-4 absolute"
            src="../assets/img/litterM-home.png"
          >
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex row justify-between">
            <div class="text-lg font-bold">Top 10 Popular Movies</div>
            <router-link to="/popular-films">
              <div class="text-red  hover:font-semibold">See all</div>
            </router-link>
          </div>
          <CarouselSlider :max-number="10" type-of-array="popularFilms" :items-to-show="2.5"/>
          <div class="flex row justify-between">
            <div class="text-lg font-bold">New Releases</div>
            <routerLink to="/releases">
              <div class="text-red hover:font-semibold">See all</div>
            </routerLink>
          </div>
          <CarouselSlider :max-number="20" type-of-array="newReleases" :items-to-show="2.5"/>
        </div>
      </div>
    </div>
  </div>
  <PageLoader v-if="!loaderTimer" />
</template>


<script>

import 'vue3-carousel/dist/carousel.css'
import CarouselSlider from "./CarouselSlider.vue";
import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";

export default {
  name: 'HomePage',
  components: {AppIcon, CarouselSlider,PageLoader},
  data() {
    return {
      loaderTimer: false
    }
  },
  mounted() {
    setTimeout( () => {
      this.loaderTimer = true
    } ,600)
  }
}


</script>

<style scoped>


</style>