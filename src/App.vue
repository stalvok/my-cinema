<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div
      class="overflow-y-hidden tablet:max-w-[375px]
      max-w-[480px] flex-1 relative h-full tablet:max-h-[812px] tablet:phone overflow-y-scroll"
    >
      <div class="tablet:test"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>


export default  {
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
