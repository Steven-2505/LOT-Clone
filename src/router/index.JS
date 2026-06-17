import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AboutUs from "../components/About-us.vue";
import Environment from "../components/environment.vue";
import Lienhe from "../components/lienhe.vue";
import Tuyendung from "../components/tuyendung.vue";
import Quantriemail from "../components/Dichvu/quantriemail.vue";
import SystemAnalysis from "../components/Dichvu/systemanalysis.vue";
import Cdn from "../components/Dichvu/cdn.vue";
import International from "../components/Dichvu/international.vue";
import Ai from "../components/Dichvu/AI.vue";
import Domestic from "../components/Dichvu/domestic.vue";
import Datacollection from "../components/Dichvu/datacollection.vue";
import Integration from "../components/Dichvu/integration.vue";
import Design from "../components/Dichvu/design.vue";
import Blogs from "../components/blogs.vue";
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
    { path: "/services/cdn", component: Cdn },
    {
      path: "/services/international",
      component: International,
    },
    { path: "/services/AI", component: Ai },
    { path: "/services/domestic", component: Domestic },
    { path: "/services/data-collection", component: Datacollection },
    { path: "/services/system-integration", component: Integration },
    { path: "/services/wireframe-design", component: Design },
    { path: "/blogs", component: Blogs },
  ],
});

export default router;
