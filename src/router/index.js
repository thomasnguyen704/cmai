import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import Rules from "../views/Rules.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/services",
    name: "Store",
    component: Store
  },
  {
    path: "/terms",
    name: "Rules",
    component: Rules
  }
];

const router = new VueRouter({
  routes
});

export default router;
