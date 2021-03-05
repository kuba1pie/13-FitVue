export default {
  SAVE_USERSLIST: (state, data) => {
    state.usersList = data
  },
  SAVE_DISHESLIST: (state, data) => {
    state.dishesList = data
  },
	SET_LOADING_DISHES(state, status) {
		state.dishesStatus = status
	},
	SET_LOADING_USERS(state, status) {
		state.usersStatus = status
	}
}
