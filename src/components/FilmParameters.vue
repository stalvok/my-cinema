<template>
  <div class="flex mb-4 flex-col gap-4">
    <div class="flex text-lg tablet:text-xl lg:text-2xl font-medium text-slate-400 justify-around">
      <div @click="changeCategoryAwards" :class="{'text-red underline underline-offset-8': selectFilmAwards}" class="duration-300 cursor-pointer">Awards</div>
      <div @click="changeCategorySameFilms" :class="{'text-red underline underline-offset-8': selectSameFilms}" class="duration-300 cursor-pointer">More Like This</div>
      <div @click="changeCategoryselect" :class="{'text-red underline underline-offset-8': selectFilmActors}" class="duration-300 cursor-pointer">Cast</div>
    </div>
    <div v-show="selectSameFilms" class="w-full grid grid-cols-2 items-start gap-4 justify-items-center">
      <div v-if="sameFilms.length === 0" class="text-xl inline col-span-full" >
        No similar films have been found
      </div>
      <router-link
        v-for="(item) in sameFilms"
        :to="'/film/' + item.filmId"
        @clicK="this.$router.reload()"
        :key="item"
        class="drop-shadow-lg w-auto h-auto max-w-[200px]"
      >
        <img
          :src="item.posterUrlPreview"
          alt="film card"
          class="w-full rounded-2xl object-cover h-full"
        >
        <div class="font-semibold text-center">{{ item.nameRu }}</div>
      </router-link>
    </div>
    <div v-show="selectFilmAwards" class="flex flex-col">
      <div v-show="filmAwards.length === 0" class="self-center text-xl">
        The film has no awards
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="(item) in filmAwards" class="flex flex-col" key="item">
          <div class="text-lg tablet:text-xl font-semibold">{{item.name}}</div>
          <div class="text-base tablet:text-lg">{{item.nominationName}} в {{item.year}} году</div>
        </div>
      </div>
    </div>
    <div v-show="selectFilmActors">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          v-for="item in filmActors"
          class="flex justify-between gap-4"
        >
          <div class="flex-1 object-cover">
            <img
              class="w-full drop-shadow-xl rounded-xl h-full"
              :src="item.posterUrl"
              alt="actor-photo"
            >
          </div>
          <div class="flex-1 flex flex-col">
            <div class="text-lg font-semibold">{{item.description}}</div>
              <div>{{item.nameEn}}</div>
              <div>{{item.professionKey}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {getFilms} from "../api/filmFetch.js";
export default {
  components: {},
  name: "FilmParameters",
  data() {
    return {
      sameFilms: '',
      filmAwards: '',
      filmActors: [],
      selectSameFilms: false,
      selectFilmAwards: true,
      selectFilmActors: false,
    }
  },
  methods: {
    changeCategoryAwards() {
      this.selectFilmAwards = true
      this.selectSameFilms = false
      this.selectFilmActors = false
    },
    changeCategorySameFilms() {
      this.selectFilmAwards = false
      this.selectSameFilms = true
      this.selectFilmActors = false
    },
    changeCategoryselect() {
      this.selectFilmAwards = false
      this.selectSameFilms = false
      this.selectFilmActors = true
    },
     getSameFilms() {
      getFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$props.filmId}/similars`)
        .then(data => this.sameFilms = data.items)
    },
     getFilmAwards() {
      getFilms(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$props.filmId}/awards`)
        .then(data => this.filmAwards = data.items)
    },
     getFilmActors() {
      getFilms(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${this.$props.filmId}`)
        .then(data => this.filmActors = data.slice(0,20))
    },
  },
  props: {
    filmId: {
      type: Number
    }
  },
  async mounted() {
    await this.getSameFilms()
    await this.getFilmAwards()
    await this.getFilmActors()
  }
}
</script>

<style scoped>
</style>