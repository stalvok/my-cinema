<template>
  <div class="w-full relative h-full">
    <div v-show="imageInputModalShow" class="absolute -mt-[40px] bg-black w-full h-modal bg-modal z-10">
      <div class="absolute rounded-2xl flex items-center justify-center w-[320px] h-[200px] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white">
        <AppIcon
          @click="imageInputModalShow = !imageInputModalShow"
          name="plus"
          class="h-6 w-6 cursor-pointer absolute top-3 bg-red fill-white rounded-xl rotate-45 right-3"
        />
        <div class="flex flex-col items-center justify-between row gap-4">
          <div>Вставте ссылку на изображение</div>
          <input
            v-model="imageInputValue"
            type="text"
            ref="input-img"
          >
          <div
            class="button self-center py-2"
            @click="imageInputModalShow =!imageInputModalShow"
          >
            OK
          </div>
        </div>
      </div>
    </div>
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
              :src="state.image || imageInputValue || 'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png'"
              class="w-full h-full object-cover rounded-full"
              alt="user avatar"
            >
            <AppIcon
              @click="imageInputModalShow =!imageInputModalShow"
              name="edit"
              class="h-6 bg-red text-white cursor-pointer rounded-md w-6 absolute right-0 bottom-0"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <input ref="input-name" v-model="state.name" placeholder="write your name" />
          <input ref="input-email" v-model="state.email" placeholder="write your email"/>
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
        sex: '',
        image:''
      }),
      imageInputValue:'',
      imageInputModalShow:false
    }
  },
  methods: {
    saveChanges() {
      this.state.name = this.$refs["input-name"].value
      this.state.email = this.$refs["input-email"].value
      this.state.sex = this.$refs["select-sex"].value
      this.state.image = this.$refs["input-img"].value
    }
  }
}
</script>

<style scoped>


</style>