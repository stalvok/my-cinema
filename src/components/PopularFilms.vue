<template>
  <div class="h-full flex flex-col bg-[#F4F4F4]">
    <PageLoader v-show="!loaderTimer"/>
    <div class="container tablet:pb-[74px] bg-white flex-col gap-6 flex mx-auto">
     <AppHeader>
       Popular Films
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
      <div class="grid row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4 justify-items-center">
        <div
          v-for="(item,index) in filmsArray.films"
          :key="index"
          class="flex cursor-pointer flex-col gap-2 items-center justify-center w-full"
        >
          <div class="film-card">
            <img
              @click="$router.push({ path: '/film/' + item.filmId})"
              :src="item.posterUrlPreview"
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


import AppHeader from "./AppHeader.vue";
import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";

export default {
  components: {AppHeader, AppIcon,PageLoader},
  name: "ReleasesPage",
  data() {
    return {
      filmsArray: '',
      loaderTimer: false,
    }
  },
  methods: {
    async getNewRelease() {

      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1`,{
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
          .then(res => res.json())
          .then(json => this.filmsArray = json)
      console.log(this.filmsArray)
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

div {
}

</style>