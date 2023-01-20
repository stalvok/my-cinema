<template>
 <div class="h-screen relative flex items-center">
   <router-link class="left-0 top-0 mt-4 ml-4 absolute sm:hidden" to="/">
     <AppIcon name="vector" class="w-8 h-8"/>
   </router-link>
   <div class="container row sm:px-0 mx-auto">
     <div class="flex max-w-[420px] mx-auto mb-6 flex-col gap-12">
        <div class="flex flex-col items-center gap-14">
          <img class="h-32 w-32" src="../assets/img/litter-M.jpg">
          <div class="lg:text-5xl text-3xl whitespace-nowrap font-bold">Create Your Account</div>
        </div>
        <LoginForm/>
        <div class="flex flex-col gap-6">
          <div class="flex text-[#616161] items-center">
            <hr class="w-full">
            <span class="mx-4 whitespace-nowrap">or continue with</span>
            <hr class="w-full">
          </div>
          <div class="flex gap-4 justify-around">
            <div class="flex px-7 py-4 items-center rounded-xl justify-center border border-gray-500">
              <AppIcon name="facebook" class="h-10 w-10"/>
            </div>
            <div class="flex px-7 py-4 items-center rounded-xl justify-center border border-gray-500">
              <AppIcon name="google" class="h-10 w-10"/>
            </div>
            <div class="flex px-7 py-4 items-center rounded-xl justify-center border border-gray-500">
              <AppIcon name="apple" class="h-10 w-10"/>
            </div>
          </div>
        </div>
     </div>
   </div>
 </div>
</template>

<script>

import AppIcon from "./AppIcon.vue";
import LoginForm from "./LoginForm.vue";

export default {
  components: {AppIcon,LoginForm},
  name: "loginPage",
}
</script>

<style scoped>

div {
  border: 1px solid red;
}


</style>