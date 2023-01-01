<template>
  <div class="h-full bg-center bg-cover bg-[url('./assets/img/welcomePicture2.png')] ">
    <div class="w-full absolute brightness-50 bg-no-repeat h-full"></div>
    <div class="container h-full mx-auto flex justify-center items-end lg:items-center px-6">
        <div class="flex mb-10 z-20 relative text-white text-center max-w-[420px] flex-col gap-10">
          <div class="font-bold lg:text-5xl text-3xl">Welcome to Move</div>
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

<style>
div {

}
</style>