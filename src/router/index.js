import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HOME.vue";
import About from "../views/ABOUT.vue";
import Help from "../views/HELP.vue"
import Setting from "../views/SETTING.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
   path: "/help",
   name:"Help",
   component:Help, 
  },
  {
    path:"/setting",
    name: "Setting",
    component: Setting,

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;