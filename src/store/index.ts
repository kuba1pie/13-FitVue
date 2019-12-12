import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

//import products from './modules/products'
import userForms from "./modules/userForms"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		userForms,
	},
	state,
	getters,
	mutations,
	actions,
})
