<template>
  <div class="w-full h-full">
    <div class="container mx-auto">
      <div class="flex flex-col gap-10 h-full mt-10 row">
        <div class="flex justify-between">
          <div class="flex gap-6 justify-between items-center">
            <AppIcon name="vector" @click="this.$router.go(-1)" class="h-full cursor-pointer w-8"/>
            <span class="text-2xl font-bold">Edit Profile</span>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="h-[120px] self-center relative w-[120px]">
            <img
              src="../assets/img/profile-avatar.jpg"
              class="w-full h-full object-cover rounded-full"
              alt="user avatar"
            >
            <AppIcon name="edit" class="h-6 bg-red text-white rounded-md w-6 absolute right-0 bottom-0 "/>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <input ref="input-name" v-model="state.name" placeholder="write your name" />
          <input ref="input-email" v-model="state.email"  placeholder="write your email"/>
          <select v-model="state.sex" ref="select-sex">
            <option>MALE</option>
            <option>FEMALE</option>
          </select>
        </div>
        <div>
          <div @click="saveChanges()" class="button">
            Save Changes
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import AppIcon from "./AppIcon.vue";
import { useStorage } from '@vueuse/core'

export default {
  components: {AppIcon},
  name: "EditProfilePage",
  data() {
    return {
      state: useStorage('user-description', {
        name: '',
        email: '',
        sex: 'MALE'
      }),
    }
  },
  methods: {
    saveChanges() {
      this.state.name = this.$refs["input-name"].value
      this.state.email = this.$refs["input-email"].value
      this.state.sex = this.$refs["select-sex"].value
    }
  }
}
</script>

<style scoped>

</style>