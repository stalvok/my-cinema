<template>
  <div class="flex flex-col gap-4">
    <div class="flex text-lg font-medium text-slate-400 justify-around">
      <div @click="changeCategoryAwards" :class="{'text-red': selectFilmAwards}" class="cursor-pointer">Awards</div>
      <div @click="changeCategorySameFilms" :class="{'text-red': selectSameFilms}" class="cursor-pointer">More Like This</div>
      <div @click="changeCategoryselect" :class="{'text-red': selectFilmActors}" class="cursor-pointer">Cast</div>
    </div>
    <div class="w-full rounded-xl bg-slate-300 py-0.5">
      <div class="w-[50%] h-full bg-red"></div>
    </div>
    <div v-show="selectSameFilms" class="w-full grid grid-cols-2 gap-3 justify-items-center">
      <div
          v-for="(item,index) in sameFilms.items"
          :key="index"
          class="bg-blue-400 overflow-hidden drop-shadow-lg rounded-3xl relative h-[240px] w-full"
      >
        <router-link :to="`/film/${item.filmId}`">
          <img
              :src="sameFilms.items[index].posterUrlPreview"
              alt="film card"
              class="w-full h-full"
          >
        </router-link>
      </div>
    </div>
    <div v-show="selectFilmAwards" class="flex flex-col">
      <div class="flex flex-col gap-4">
        <div v-for="(item) in filmAwards.items" class="flex flex-col" key="item">
          <div class="text-lg font-semibold">{{item.name}}</div>
          <div>{{item.nominationName}} в {{item.year}} году</div>
        </div>
      </div>
    </div>
    <div v-show="selectFilmActors">
      <div class="flex flex-col row  gap-4">
        <div v-for="item in filmActors" class="flex gap-4">
          <div class="w-[90px] h-[140px]">
            <img class="w-full rounded-xl h-full" :src="item.posterUrl" alt="actor-photo">
          </div>
          <div class="flex flex-col">
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
      this.selectFilmAwards = ! this.selectFilmAwards
      this.selectSameFilms = false
      this.selectFilmActors = false
    },
    changeCategorySameFilms() {
      this.selectFilmAwards = false
      this.selectSameFilms = !this.selectSameFilms
      this.selectFilmActors = false
    },
    changeCategoryselect() {
      this.selectFilmAwards = false
      this.selectSameFilms = false
      this.selectFilmActors = !this.selectFilmActors
    },
    async getSameFilms() {
      await fetch(`./mock/sameFilms.json`, {
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.sameFilms = json)
    },
    async getFilmAwards() {
      await fetch(`./mock/filmAwards.json`, {
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.filmAwards = json)
    },
    async getFilmActors() {
      await fetch(`./mock/filmActors.json`, {
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.filmActors = json.slice(0,20))

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