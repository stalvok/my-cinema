<template>
  <component  :is="layout">
    <router-view class="bg-[#F4F4F4]"/>
  </component>
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
