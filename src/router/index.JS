import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AboutUs from "../components/About-us.vue";
import Environment from "../components/environment.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/environment", component: Environment },
  ],
});

export default router;
