import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import Rules from "../views/Rules.vue";
import Clients from "../views/Clients.vue";
import Products from "../views/Products.vue";
import Faq from "../views/Faq.vue";
import Pricing from "../views/Pricing.vue";

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
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing
  }
];

const router = new VueRouter({
  routes
});

export default router;
