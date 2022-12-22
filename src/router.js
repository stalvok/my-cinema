import {createRouter, createWebHashHistory} from "vue-router";
import WelcomePage from "./components/WelcomePage.vue"
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
export default createRouter( {
  history: createWebHashHistory(),
  routes: [
    {path: '/',component: WelcomePage},
    {path: '/login',component: LoginPage},
    {path: '/home',component: HomePage},
  ]
})