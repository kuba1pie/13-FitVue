import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Diet from "../views/Diet.vue";
import User from "../views/User.vue";
import Users from "../views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/user/:id",
    name: "user",
    component: User
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/diet",
    name: "diet",
    component: Diet
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
