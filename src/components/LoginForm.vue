<template>
  <div class="flex gap-6 items-center flex-col">
    <div class="relative text-[#9E9E9E] flex items-center w-full">
      <AppIcon name="mail" class="w-12 h-12 absolute"/>
      <input
        type="text"
        v-model="email"
        class="w-full  pl-12"
        :class="{'border-2 border-red': wrongPassword}"
      >
    </div>
    <div class="relative text-[#9E9E9E] flex items-center w-full">
      <AppIcon name="lock" class="w-12 h-12 absolute"/>
      <input
        type="password"
        v-model="password"
        class="w-full pl-12"
        :class="{'border-2 border-red': wrongPassword}"
      >
    </div>
    <div v-if="wrongPassword" class="text-red-600 font-semibold">Invalid email address or password</div>
    <div class="flex">
      <label class="flex container-ch">
        <input class="border-red-500" type="checkbox">
        <span class="checkmark"></span>
      </label>
      <div class="font-semibold">Remember me</div>
    </div>
      <div class="button w-full" @click="login">
        Sign in
      </div>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core';
import { required ,email, minLength} from '@vuelidate/validators';
import AppIcon from "./AppIcon.vue";

export default {
  setup() {
    return {  }
  },
  name: "LoginForm",
  components: {AppIcon},
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: '',
      wrongPassword:false
    }
  },
  methods: {
    login() {
      if (this.v$.$invalid === false) {
        this.$router.push('/home')
      }
      else {
        this.wrongPassword = true
      }
    }
  },
  validations() {
    return {
      email: { required,email },
      password: { required, minLength:minLength(6) },
    }
  }
}
</script>

<style scoped>

</style>