import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Dish from "../views/Dish.vue"
import Dishes from "../views/Dishes.vue"
import User from "../views/User.vue"
import Users from "../views/Users.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
    props: route => ({ date: route.query.d }),
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/dish/:id",
    name: "dish",
    component: Dish,
  },
  {
    path: "/dishes",
    name: "dishes",
    component: Dishes,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
