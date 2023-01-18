import {createRouter, createWebHashHistory} from "vue-router";
import WelcomePage from "./components/WelcomePage.vue"
import LoginPage from "./components/LoginPage.vue";
import HomePage from "./components/HomePage.vue";
import ReleasesPage from "./components/ReleasesPage.vue";
import PopularFilms from "./components/PopularFilms.vue";
import FilmPage from "./components/FilmPage.vue";
import PageNotFound from "./components/PageNotFound.vue";
import ExplorePage from "./components/ExplorePage.vue";
import UserFilmList from "./components/UserFilmListPage.vue";
import ProfilePage from "./components/ProfilePage.vue";
import EditProfilePage from "./components/EditProfilePage.vue";
export default createRouter( {
  history: createWebHashHistory(),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {path: '/',component: WelcomePage,  },
    {path: '/login',component: LoginPage, },
    {path: '/home',component: HomePage ,meta:{layout: 'mobile-layout'}},
    {path: '/releases',component: ReleasesPage ,meta:{layout: 'mobile-layout'}},
    {path: '/popular-films',component: PopularFilms ,meta:{layout: 'mobile-layout'}},
    {path: '/film/:id',component: FilmPage,meta:{layout: 'mobile-layout'}},
    {path: '/explore',component: ExplorePage,meta:{layout: 'mobile-layout'}},
    {path: '/user-list',component: UserFilmList,meta:{layout: 'mobile-layout'}},
    {path: '/profile',component: ProfilePage ,meta:{layout: 'mobile-layout'}},
    {path: '/profile-edit',component: EditProfilePage  ,meta:{layout: 'mobile-layout'}},
    {path: '/:catchAll(.*)', component: PageNotFound ,meta:{layout: 'mobile-layout'}},
  ]
})