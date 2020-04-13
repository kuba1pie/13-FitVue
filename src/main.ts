import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import BootstrapVue from "bootstrap-vue"
import VueBootstrapTypeahead from "vue-bootstrap-typeahead"

import "./assets/sass/index.sass"

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component("vue-bootstrap-typeahead", VueBootstrapTypeahead)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
