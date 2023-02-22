<template>
  <header class="hidden bg-neutral-300 tablet:flex relative justify-between items-center row w-full h-20">
    <div class="flex gap-4 items-center">
      <img
        class="h-10 w-10"
        src="../assets/img/litterM-home.png"
      >
      <div class="text-xl lg:font-bold text-white lg:text-3xl">
        <slot></slot>
      </div>
    </div>
    <div class="hidden tablet:flex text-base lg:text-xl text-center gap-3">
      <router-link class="w-14 lg:w-16 hover:font-semibold" to="/home">Home</router-link>
      <router-link class="w-14 lg:w-16 hover:font-semibold" to="/explore">Explore</router-link>
      <router-link class="w-14 lg:w-16 hover:font-semibold" to="/user-list">My list</router-link>
      <router-link class="w-14 lg:w-16 hover:font-semibold" to="/profile">Profile</router-link>
    </div>
  </header>
</template>

<script>

import AppIcon from "./AppIcon.vue";
export default {
  components: {AppIcon},
  name: "AppHeader"
}
</script>

<style scoped>


</style>