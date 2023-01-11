<template>
  <div class="overflow-y-scroll w-full h-full">
    <slot/>
  </div>
  <MobileNavigation class="absolute bottom-0"/>
</template>



<script>
import MobileNavigation from "../components/MobileNavigation.vue";

export default {
  components: {MobileNavigation},
  name: "MobileLayout"
}
</script>
