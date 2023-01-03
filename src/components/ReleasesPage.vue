<template>
  <div class="min-h-screen flex  flex-col bg-[#F4F4F4]">
    <div class="container py-12 bg-white row flex-col gap-10 flex mx-auto">
      <div class="w-full flex items-center justify-between">
        <div class="flex gap-4 items-center">
          <AppIcon
            @click="$router.go(-1)"
            name="vector"
            class="w-6 h-6 cursor-pointer"
          />
          <div class="text-lg font-bold">New Releases</div>
        </div>
        <AppIcon name="search" class="w-6 h-6"/>
      </div>
      <div
        class="grid grid-cols-2 gap-3 justify-items-center"
      >
        <div
          v-for="(item,index) in filmsArray.items"
          :key="index"
          class="bg-blue-400 cursor-pointer overflow-hidden drop-shadow-lg rounded-3xl relative h-[240px] w-full"
        >
          <img
            @click="$router.push({ path: '/film/id', query: { id: item.kinopoiskId }})"
            :src="filmsArray.items[index].posterUrl"
            alt="film card"
            class="w-full h-full"
          >
        </div>
      </div>
    </div>
    <MobileNavigation class="sticky"/>
  </div>

</template>

<script>

import AppIcon from "./AppIcon.vue";
import MobileNavigation from "./MobileNavigation.vue";

export default {
  components: {AppIcon,MobileNavigation},
  name: "ReleasesPage",
  data() {
    return {
      filmsArray: [],
    }
  },
  methods: {
    async getNewRelease() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=DECEMBER`,{
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.filmsArray = json)
    }
  },
  async mounted() {
    await this.getNewRelease()

  }
}
</script>

<style scoped>


</style>