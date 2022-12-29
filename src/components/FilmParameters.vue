<template>
  <div class="flex flex-col gap-4">
    <div class="flex text-xl font-semibold text-slate-400 justify-around">
      <div>Trailers</div>
      <div>More Like This</div>
      <div>Comments</div>
    </div>
    <div class="w-full rounded-xl bg-slate-300 py-0.5">
      <div class="w-[50%] h-full bg-red"></div>
    </div>
    <div class="w-full flex flex-col">
      <div class="flex gap-6">
        <div class="h-[120px] bg-black w-[160px]">
          <video class="w-full h-full rounded-xl" src="https://widgets.kinopoisk.ru/discovery/trailer/84977?onlyPlayer=1&autoplay=1&cover=1"  controls="controls">
            <source src="https://widgets.kinopoisk.ru/discovery/trailer/84977?onlyPlayer=1&autoplay=1&cover=1" type='video/ogg; codecs="theora, vorbis"'>
            <source src="https://widgets.kinopoisk.ru/discovery/trailer/84977?onlyPlayer=1&autoplay=1&cover=1" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            <source src="https://widgets.kinopoisk.ru/discovery/trailer/84977?onlyPlayer=1&autoplay=1&cover=1" type='video/webm; codecs="vp8, vorbis"'>
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "FilmParameters",
  dara() {
    return {
      currentTrailers: ''
    }
  },
  methods: {
    async getTrailer() {
      await fetch(`./mock/filmById.json`,{
        headers: {
          'X-API-KEY': 'cb8f0126-a908-4e5c-a76d-71403d99bfbd',
          'Content-Type': 'application/json',
        },
      })
          .then(res => res.json())
          .then(json => this.currentTrailers = json)
    }
  },
 async mounted() {
    await this.getTrailer()
  }
}
</script>

<style scoped>

</style>