<template>
  <div class="min-h-screen flex bg-[#F4F4F4] items-center">
    <div class="container bg-white mx-auto">
      <div class="flex flex-col gap-6">
        <div class="relative  row h-[400px]">
          <img
            class="absolute left-0 object-cover h-full w-full "
            src="../assets/img/homeArt.jpg"
            alt=""
          >
          <AppIcon name="search-icon" class="w-7 mt-4 absolute right-0 mr-20 h-7 text-white"/>
          <img class="h-7 w-7 mt-4 absolute" src="../assets/img/litterM-home.png">
          <AppIcon name="bell" class="w-7 absolute mt-4 mr-6 right-0 h-7 text-white"/>
        </div>
        <div class="flex flex-col gap-4 row">
          <div class="flex justify-between">
            <div class="text-lg font-bold">Top 10 Movies This Week</div>
            <div class="text-red-600 font-semibold">See all</div>
          </div>
          <div class="flex justify-between">
            <div class="text-lg font-bold">New Releases</div>
            <div class="text-red-600 font-semibold">See all</div>
          </div>
          <CarouselSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import CarouselSlider from "./CarouselSlider.vue";

import AppIcon from "./AppIcon.vue";

export default {

  name: "HomePage",
  components: {AppIcon, CarouselSlider}

}


</script>

<style scoped>


div {
 border: 1px solid red;
}

</style>