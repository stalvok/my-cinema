<template>
    <div class="w-full h-full">
      <div class="container mx-auto">
        <div class="flex flex-col gap-10 h-full mt-10 row">
          <div class="flex justify-between">
            <div class="flex gap-10 justify-between items-center">
              <img class="h-6 w-6" src="../assets/img/litterM-home.png">
              <span class="text-2xl font-bold">My Profile</span>
            </div>
            <AppIcon name="search" class="h-full w-8"/>
          </div>
          <div class="flex flex-col gap-4 items-center">
            <div class="h-[120px] w-[120px]">
              <img
                src="../assets/img/profile-avatar.jpg"
                class="w-full h-full object-cover rounded-full"
                alt="user avatar"
              >
            </div>
            <div class="text-xl font-semibold">Andrey Ainsley</div>
            <div>andrew_ainsley@youdomain.com</div>
          </div>
          <div class="flex flex-col gap-2">
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
            <div class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <AppIcon name="profile" class="w-6 h-6"/>
                <div>Notification</div>
              </div>
              <AppIcon name="vector" class="w-6 h-6 rotate-180"/>
            </div>
            <div class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <AppIcon name="profile" class="w-6 h-6"/>
                <div>Download</div>
              </div>
              <AppIcon name="vector" class="w-6 h-6 rotate-180"/>
            </div>
            <div class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <AppIcon name="profile" class="w-6 h-6"/>
                <div>Security</div>
              </div>
              <AppIcon name="vector" class="w-6 h-6 rotate-180"/>
            </div>
            <div class="flex items-center justify-between font-semibold">
              <div class="flex items-center gap-2">
                <AppIcon name="profile" class="w-6 h-6"/>
                <div>Language</div>
              </div>
              <AppIcon name="vector" class="w-6 h-6 rotate-180"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import AppIcon from "./AppIcon.vue";


export default {
  components:{AppIcon},
  name: "ProfilePage"
}
</script>

<style scoped>
</style>