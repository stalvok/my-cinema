<template>
  <div class="w-full gap-6 justify-center text-center -7xl h-screen flex flex-col items-center ">
    <div class="uppercase font-semibold text-red text-7xl">sorry page not found :(</div>
    <div @click="$router.go(-1)" class="button text-3xl">comeback</div>
  </div>

</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

</style>