<template>
  <div class="h-[72px] tablet:hidden shadow-inner rounded-t-2xl flex items-center bg-white justify-around row w-full">
    <router-link
      to="/home"
      class="flex flex-col items-center gap-1"
    >
      <AppIcon name="home" class="w-6 h-6"/>
      <div class="text-xs">home</div>
    </router-link>
    <router-link
      to="/explore"
      class="flex flex-col items-center gap-1"
    >
      <AppIcon name="compass" class="w-6 h-6"/>
      <div class="text-xs">explore</div>
    </router-link>
    <router-link
      to="/user-list"
      class="flex flex-col items-center gap-1"
    >
      <AppIcon name="bookmark" class="w-6 h-6"/>
      <div class="text-xs">my list</div>
    </router-link>
    <router-link
      to="/profile"
      class="flex flex-col items-center gap-1"
    >
      <AppIcon name="profile" class="w-6 h-6"/>
      <div class="text-xs">profile</div>
    </router-link>
  </div>
</template>
<script>

import AppIcon from "./AppIcon.vue";


export default {
  methods: {
  },
  components: {AppIcon},
  name: "MobileNavigation",
  data() {
    return {

    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>