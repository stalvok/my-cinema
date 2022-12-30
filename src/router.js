import {createRouter, createWebHashHistory} from "vue-router";
import WelcomePage from "./components/WelcomePage.vue"
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
import ReleasesPage from "./components/ReleasesPage.vue";
import PopularFilms from "./components/PopularFilms.vue";
import FilmPage from "./components/FilmPage.vue";
import PageNotFound from "./components/PageNotFound.vue";
import ExplorePage from "./components/ExplorePage.vue";
export default createRouter( {
  history: createWebHashHistory(),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {path: '/',component: WelcomePage, },
    {path: '/login',component: LoginPage, },
    {path: '/home',component: HomePage},
    {path: '/releases',component: ReleasesPage},
    {path: '/popularFilms',component: PopularFilms},
    {path: '/film/:id',component: FilmPage},
    {path: '/explore',component: ExplorePage },
    {path: '/:catchAll(.*)', component: PageNotFound},
  ]
})