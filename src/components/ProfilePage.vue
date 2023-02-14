<template>
  <div class="container min-h-screen bg-white mx-auto">
    <AppHeader>
      Profile
    </AppHeader>
    <div class="flex flex-col tablet:flex-row gap-10 h-full mt-10 row">
      <div class="tablet:hidden flex justify-between">
        <div class="flex gap-10 justify-between items-center">
          <img class="h-6 w-6" src="../assets/img/litterM-home.png">
          <span class="text-2xl font-bold">My Profile</span>
        </div>
      </div>
      <div class="flex flex-[2_2_0%] flex-col gap-2 items-center">
        <div class="h-[120px] w-[120px] md:h-[180px] md:w-[180px] lg:h-[240px] lg:w-[240px]">
          <img
            :src="profileImg || 'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png'"
            class="w-full h-full object-cover rounded-full"
            alt="user avatar"
          >
        </div>
        <div class="text-xl font-semibold">{{ name }}</div>
        <div>{{ sex }}</div>
        <div>{{ email }}</div>
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div class="flex items-center justify-between font-semibold">
          <router-link
            to="/profile-edit"
            class="flex items-center gap-2"
          >
            <AppIcon name="profile" class="w-6 h-6"/>
            <div>Edit Profile</div>
          </router-link>
          <router-link to="/profile-edit">
            <AppIcon name="vector" class="w-6 h-6 rotate-180"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppIcon from "./AppIcon.vue";
import AppHeader from "./AppHeader.vue";


export default {
  components:{AppIcon,AppHeader},
  name: "ProfilePage",
  data() {
    return {
      storage: JSON.parse(localStorage.getItem('user-description')),
      name: '',
      email: '',
      sex: '',
      profileImg: ''
    }
  },
  mounted() {
   console.log(this.storage)
    if (!this.storage) {
      console.log(1)
      this.email = 'enter your email'
      this.name = 'enter your name'
      this.sex = 'MALE'
      this.profileImg = 'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png'
    } else {
      console.log(this.storage.email)
      this.email = this.storage.email  || 'enter your email'
      this.name = this.storage.name || 'enter your name'
      this.sex = this.storage.sex || 'MALE'
      this.profileImg = this.storage.image || 'https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png'
    }

  },
  methods: {
    addDescription(name) {

    }
  }
}
</script>

<style scoped>
</style>