<template>
  <div class="h-[72px] mt-2 shadow-inner rounded-t-2xl flex items-center justify-around row fixed bg-white bottom-0 w-full">
    <router-link to="/home">
      <div
        class="flex flex-col items-center gap-1"
      >
        <AppIcon name="home" class="w-6 h-6"/>
        <div class="text-xs">home</div>
      </div>
    </router-link>
    <router-link to="/explore">
      <div
        class="flex flex-col items-center gap-1"
      >
        <AppIcon name="compass" class="w-6 h-6"/>
        <div class="text-xs">explore</div>
      </div>
    </router-link>
    <div class="flex flex-col items-center gap-1">
      <AppIcon  name="bookmark" class="w-6 h-6"/>
      <div class="text-xs">my list</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <AppIcon name="download" class="w-6 h-6"/>
      <div class="text-xs">download</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <AppIcon name="profile" class="w-6 h-6"/>
      <div class="text-xs">profile</div>
    </div>
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
      routeHome: false,
      routeExplore: false,
      routeList: false,
      routeDownload: false,
      routeProfile: false,
    }
  },
  mounted() {
    if ( '/home' === this.$route.path) {
      this.routeHome = !this.routeHome
    }
    if ( '/rxplore' === this.$route.path) {
       this.routeExplore = !this.routeExplore
    }
    // if ( '/home' === this.$route.path) {
    //   this.routeList = !this.routeList
    // }
    // if ( '/home' === this.$route.path) {
    //   this.routeDownload = !this.routeDownload
    // }
    // if ( '/home' === this.$route.path) {
    //   this.routeProfile = !this.routeProfile
    // }
  }
}
</script>

<style scoped>

</style>