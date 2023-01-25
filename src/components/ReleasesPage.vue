<template>
  <div class="min-h-screen flex bg-white flex-col bg-[#F4F4F4]">
    <PageLoader v-show="!loaderTimer"/>
    <div class="container p tablet:pb-[74px] row flex-col gap-6 flex mx-auto">
     <AppHeader>
       New Releases
     </AppHeader>
      <div class="w-full flex items-center justify-between">
        <div class="flex tablet:hidden gap-4 items-center">
          <AppIcon
            @click="$router.go(-1)"
            name="vector"
            class="w-6 h-6 cursor-pointer"
          />
          <div class="text-lg font-bold">New Releases</div>
        </div>
      </div>
      <div class="grid row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4 justify-items-center">
        <div
          v-for="(item,index) in filmsArray.items"
          :key="index"
          class="flex cursor-pointer flex-col gap-2 items-center justify-center w-full"
        >
          <div class="film-card">
            <img
              @click="$router.push({ path: '/film/' + item.kinopoiskId})"
              :src="filmsArray.items[index].posterUrlPreview"
              alt="film card"
              class="w-full object-cover h-full"
            >
          </div>
          <div class="font-semibold text-center">{{item.nameRu}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";
import AppHeader from "./AppHeader.vue";

export default {
  components: {AppHeader, AppIcon,PageLoader},
  name: "ReleasesPage",
  data() {
    return {
      filmsArray: [],
      loaderTimer: false
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
    setTimeout( () => {
      this.loaderTimer = true
    } ,600)

  }
}
</script>

<style scoped>

</style>