<template>
    <div class="container bg-white mx-auto">
      <div class="flex flex-col gap-6">
          <AppHeader class="-mb-6">
            Home
          </AppHeader>
        <div class="relative row h-[440px] lg:h-[480px]">
          <img
            class="absolute left-0 object-cover h-full w-full "
            src="../assets/img/homeArt2.jpg"
          >
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex row justify-between">
            <div class="text-lg font-bold">Top 10 Popular Movies</div>
            <router-link to="/popular-films">
              <div class="text-red text-base lg:text-xl hover:font-semibold">See all</div>
            </router-link>
          </div>
          <CarouselSlider :max-number="10" type-of-array="popularFilms" :items-to-show="itemsToShow"/>
          <div class="flex row justify-between">
            <div class="text-lg font-bold">New Releases</div>
            <routerLink to="/releases">
              <div class="text-red text-base lg:text-xl hover:font-semibold">See all</div>
            </routerLink>
          </div>
          <CarouselSlider :max-number="20" type-of-array="newReleases" :items-to-show="itemsToShow"/>
        </div>
      </div>
    </div>
  <PageLoader v-if="!loaderTimer" />
</template>


<script>

import AppHeader from "./AppHeader.vue";
import 'vue3-carousel/dist/carousel.css'
import CarouselSlider from "./CarouselSlider.vue";
import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";


export default {
  name: 'HomePage',
  components: {AppIcon, CarouselSlider,PageLoader,AppHeader},
  data() {
    return {
      loaderTimer: false,
      itemsToShow: 4.5,
      windowWidth: window.innerWidth,
      showMenuDrop: false
    }
  },
  mounted() {
    this.countOfCarouselItems()
    window.addEventListener('resize' , () => {
      this.windowWidth = window.innerWidth
    })
    setTimeout( () => {
      this.loaderTimer = true
    } ,600)
  },
  methods: {
    countOfCarouselItems() {
      if (this.windowWidth > 780) {
        this.itemsToShow = 4.5
      }
      if (this.windowWidth < 780) {
        this.itemsToShow = 3.5
      }
      if (this.windowWidth < 660) {
        this.itemsToShow = 2
      }
    }
  },
  watch: {
    windowWidth(value) {
      if (value > 780) {
        this.itemsToShow = 4.5
      }
      if (value < 780) {
        this.itemsToShow = 3.5
      }
      if (value < 660) {
        this.itemsToShow = 2
      }
    }
  }
}


</script>

<style scoped>

</style>