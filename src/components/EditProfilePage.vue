<template>
  <div class="w-full h-full">
    <div class="container mx-auto">
      <div class="flex flex-col gap-10 h-full mt-10 row">
        <div class="flex justify-between">
          <div class="flex gap-6 justify-between items-center">
            <AppIcon name="vector"  @click="this.$router.go(-1)" class="h-full w-8"/>
            <span class="text-2xl font-bold">Edit Profile</span>
          </div>
        </div>
        <div class="flex flex-col ">
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
          <input placeholder="write your name" class=""/>
          <input placeholder="write your email"/>
          <select  name="sex" >
            <option value="volvo">MALE</option>
            <option value="saab">FEMALE</option>
          </select>
        </div>
        <div>
          <div class="button">
            Save Changes
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import AppIcon from "./AppIcon.vue";
export default {
  components: {AppIcon},
  name: "EditProfilePage"
}
</script>

<style scoped>
 div {
   border: 1px solid red;
 }
</style>