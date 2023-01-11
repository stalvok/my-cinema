<template>
  <div class="min-h-screen flex bg-[#F4F4F4]">
    <div
      v-if="currentFilm !== ''"
      class="container tablet:pb-[74px] bg-white mx-auto"
    >
      <div class="flex flex-col gap-4 sm:flex-row">
        <div class="relative flex h-[568px] justify-center w-full">
          <div class="relative">
            <img
              class="object-cover h-full w-full drop-shadow-xl "
              :src="currentFilm.posterUrl" alt="film poster"
            >
            <AppIcon
              name="vector"
              class="ml-6 mt-4 w-8 h-8 border-0 absolute left-0 top-0 text-white bg-red p-1.5 rounded-full cursor-pointer"
              @click="this.$router.go(-1)"
            />
            <AppIcon
              @click="addFilmToList()"
              name="plus"
              class="w-8 h-8 bg-red rounded-full absolute right-0 mr-6 cursor-pointer top-4 fill-white"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4 row sm:flex-row items-start justify-center">
          <div class="text-3xl font-bold">{{ currentFilm.nameOriginal }}</div>
          <div class="italic">"{{ currentFilm.slogan ? currentFilm.slogan : 'The film has no slogan'}}"</div>
          <div class="flex items-center flex-wrap gap-x-4 gap-y-1">
            <div v-if="currentFilm.ratingMpaa !== ''" class="button cursor-default uppercase outline is-link-active is-exact-active is-small">
              {{ currentFilm.ratingMpaa }}
            </div>
            <div class="button cursor-default outline is-small">
              {{ currentFilm.year }}
            </div>
            <div
              v-if="currentFilm.ratingKinopoisk !== ''"
              class="button cursor-default outline is-small"
            >
              <AppIcon
                name="kinopoisk"
                class="w-5 h-5 mr-2 text-red fill-red-400"
              />
              {{ currentFilm.ratingKinopoisk }}
            </div>
            <div class="button cursor-default outline is-small">
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
            <div v-if="!longText">{{ description }}...
              <span class="text-red text-lg cursor-pointer font-semibold" @click="longText=!longText">View more</span>
            </div>
            <div v-if="longText">{{ currentFilm.description }}
              <span class="text-red text-lg cursor-pointer font-semibold" @click="longText=!longText">
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
    </div>
    <PageLoader v-if="currentFilm === ''"/>
  </div>

</template>

<script>

import FilmParameters from "./FilmParameters.vue";
import AppIcon from "./AppIcon.vue";
import PageLoader from "./PageLoader.vue";
import { useStorage } from '@vueuse/core';
export default {
  components: {AppIcon,FilmParameters,PageLoader},
  name: "FilmPage",
  data() {
    return {
      currentFilm:'',
      currentTrailers: '',
      longText: false,
      state: useStorage('user-films', { films:[] })
    }
  },
  methods: {
    async fetchFilm() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.params.id}`,{
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.currentFilm = json)
    },
    addFilmToList(){
      this.state.films.push(this.currentFilm)
    }
  },
  computed: {
    currentGenres() {
      return this.currentFilm.genres.map(genre => genre.genre)
    },
    description () {
      return this.currentFilm.description.slice(0,100)
    }
  },
  async mounted() {
    await this.fetchFilm()
    console.log(this.state)

  },
  watch: {
    async $route() {
      await this.fetchFilm()
    }
  },
}
</script>
