<template>
  <div class="flex mb-4 flex-col gap-4">
    <div class="flex text-lg font-medium text-slate-400 justify-around">
      <div @click="changeCategoryAwards" :class="{'text-red underline underline-offset-8': selectFilmAwards}" class="duration-300 cursor-pointer">Awards</div>
      <div @click="changeCategorySameFilms" :class="{'text-red underline underline-offset-8': selectSameFilms}" class="duration-300 cursor-pointer">More Like This</div>
      <div @click="changeCategoryselect" :class="{'text-red underline underline-offset-8': selectFilmActors}" class="duration-300 cursor-pointer">Cast</div>
    </div>
    <div v-show="selectSameFilms" class="w-full grid grid-cols-2 gap-3 justify-items-center">
      <div v-if="sameFilms.length === 0" class="text-xl inline col-span-full" >
        No similar films have been found
      </div>

      <router-link
        v-for="(item) in sameFilms"
        :to="'/film/' + item.filmId"
        @clicK="this.$router.reload()"
        :key="item"
        class="bg-blue-400 cursor-pointer overflow-hidden drop-shadow-lg rounded-3xl relative h-[240px] w-full"
      >
        <img
          :src="item.posterUrlPreview"
          alt="film card"
          class="w-full h-full"
        >
      </router-link>
    </div>
    <div v-show="selectFilmAwards" class="flex flex-col">
      <div v-show="filmAwards.length === 0" class="self-center text-xl">
        The film has no awards
      </div>
      <div class="flex flex-col gap-4">
        <div v-for="(item) in filmAwards" class="flex flex-col" key="item">
          <div class="text-lg font-semibold">{{item.name}}</div>
          <div>{{item.nominationName}} в {{item.year}} году</div>
        </div>
      </div>
    </div>
    <div v-show="selectFilmActors">
      <div class="flex flex-col row  gap-4">
        <div v-for="item in filmActors" class="flex gap-4">
          <div class="w-[90px] h-[140px]">
            <img
              class="w-full drop-shadow-2xl rounded-xl h-full"
              :src="item.posterUrl"
              alt="actor-photo"
            >
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
    async getSameFilms() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$props.filmId}/similars`, {
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.sameFilms = json.items)
    },
    async getFilmAwards() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$props.filmId}/awards`, {
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => this.filmAwards = json.items)
    },
    async getFilmActors() {
      await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${this.$props.filmId}`, {
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