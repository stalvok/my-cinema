<template>
  <div class="h-[88px] shadow-inner rounded-t-2xl flex items-center justify-around row absolute bg-white bottom-0 w-full">
    <AppIcon name="home" class="w-6 h-6"/>
    <AppIcon name="compass" class="w-6 h-6"/>
    <AppIcon name="bookmark" class="w-6 h-6"/>
    <AppIcon name="download" class="w-6 h-6"/>
    <AppIcon name="profile" class="w-6 h-6"/>
  </div>
</template>
<script>

import AppIcon from "./AppIcon.vue";

export default {
  components: {AppIcon},
  name: "MobileNavigation"
}
</script>

<style scoped>

</style>