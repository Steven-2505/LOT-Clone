import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AboutUs from "../components/About-us.vue";
import Environment from "../components/environment.vue";
import Lienhe from "../components/lienhe.vue";
import Tuyendung from "../components/tuyendung.vue";
import Quantriemail from "../components/Dichvu/quantriemail.vue";
import SystemAnalysis from "../components/Dichvu/systemanalysis.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/environment", component: Environment },
    { path: "/lienhe", component: Lienhe },
    { path: "/tuyendung", component: Tuyendung },
    { path: "/services/email-server", component: Quantriemail },
    { path: "/services/system-analysis", component: SystemAnalysis },
  ],
});

export default router;
