<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div
      class="tablet:max-w-[375px]
      max-w-[480px] overflow-hidden flex-1 relative h-full tablet:max-h-[812px] tablet:phone "
    >
      <component :is="layout">
        <router-view/>
      </component>
    </div>
  </div>
</template>

<script>

export default  {
  components: {},
  data() {
    return {

    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout"
    }
  }
}
</script>
