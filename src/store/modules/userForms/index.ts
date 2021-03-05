import firstForm from "./firstForm"

// initial state
const state = {
  forms: [firstForm],
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  ADD_FORM: (state, form) => {
    state.forms.push(form)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
