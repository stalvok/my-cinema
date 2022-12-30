<template>
  <div class="min-h-screen flex bg-[#F4F4F4]">
    <div
      v-if="currentFilm !== ''"
      class="container bg-white mx-auto"
    >
      <div class="flex flex-col mt-2 gap-4 sm:flex-row">
        <div class="relative row flex h-[560px] justify-center w-full">
          <div class="relative">
            <img
              class="object-center h-full w-full max-w-[480px] drop-shadow-xl rounded-3xl"
              :src="currentFilm.posterUrl" alt=""
            >
            <AppIcon
              name="vector"
              class="ml-6 mt-4 w-8 h-8 border-0 absolute left-0 top-0 text-white bg-red p-1.5 rounded-full cursor-pointer"
              @click="this.$router.go(-1)"
            />
            <AppIcon
              name="plus"
              class="w-8 h-8 bg-red rounded-full absolute right-0 mr-6 cursor-pointer top-4 fill-white"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4 row sm:flex-row items-start justify-center">
          <div class="text-3xl font-bold">{{ currentFilm.nameOriginal }}</div>
          <div class="italic">"{{ currentFilm.slogan }}"</div>
          <div class="flex items-center flex-wrap gap-x-4 gap-y-1">
            <div class="button uppercase outline is-link-active is-exact-active is-small">
              {{ currentFilm.ratingMpaa }}
            </div>
            <div class="button outline is-small">
              {{ currentFilm.year }}
            </div>
            <div class="button outline is-small">
              <AppIcon
                name="kinopoisk"
                class="w-5 h-5 mr-2 text-red fill-red-400"
              />
              {{ currentFilm.ratingKinopoisk }}
            </div>
            <div class="button outline is-small">
              {{ currentFilm.filmLength }} min
            </div>
          </div>
          <div class="flex gap-2 font-semibold ">
            <div>Genres:</div>
            <div class="flex-1 flex flex-wrap gap-1">
              <div
                v-for="genre in this.currentGenres"
                key="genre"
                class="first-letter:uppercase cursor-pointer text-sm bg-red !text-white py-1 px-2 rounded-xl"
              >
                {{ genre }}
              </div>
            </div>
          </div>
          <div>
            <div v-if="!longText1">{{ description }}...
              <span class="text-red text-lg cursor-pointer font-semibold" @click="longText1=!longText1">View more</span>
            </div>
            <div v-if="longText1">{{ currentFilm.description }}
              <span class="text-red text-lg cursor-pointer font-semibold" @click="longText1=!longText1">
               Hide
               <AppIcon name="vector" class="w-3 inline-block h-3 text-red rotate-90"/>
             </span>
            </div>
          </div>
          <div class="w-full">
            <FilmParameters :film-id="currentFilm.kinopoiskId"/>
          </div>
        </div>
      </div>
      <MobileNavigation class="sticky"/>
    </div>
    <PageLoader v-if="currentFilm === ''"/>
  </div>

</template>

<script>

import FilmParameters from "./FilmParameters.vue";
import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";
import MobileNavigation from "./MobileNavigation.vue";
export default {
  components: {AppIcon,FilmParameters,PageLoader,MobileNavigation},
  name: "FilmPage",
  data() {
    return {
      currentFilm:'',
      description:'',
      currentTrailers: '',
      longText1: false,
      currentGenres:[]
    }
  },
  methods: {
    async fetchFilm() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.query.id}`,{
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
    },
  },
  computed: {

  },
  async mounted() {
    console.log(this.$route.query.id)
    await this.fetchFilm()
    this.getGenres(this.currentFilm.genres)
    this.longText(this.currentFilm.description)
  }
}
</script>



<style scoped>

 div {

 }
</style>