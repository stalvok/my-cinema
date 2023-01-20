<template>
  <div class="h-screen bg-center bg-no-repeat bg-cover bg-[url('./assets/img/welcomePicture2.png')] ">
    <div class="w-full absolute bg-black opacity-70 h-full"></div>
    <div class="container h-full mx-auto flex justify-center items-center row">
      <div class="flex mb-10 z-20 relative text-white text-center max-w-[420px] flex-col gap-10">
        <div class="font-bold text-red lg:text-5xl text-3xl">Welcome to Move</div>
        <div class="text-lg lg:text-2xl">the best movie streaming service of the century to make your days great!</div>
        <router-link to="/login">
          <div class="button login">
            Get Started
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>

export default {

  components: {},
  data() {
    return {

    }
  }
}

</script>
