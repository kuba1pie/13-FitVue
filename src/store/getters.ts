export default {
  countUsers: state => {
    return state.usersList.length
  },
  countDishes: state => {
		return state.dishesList.length
	},
  getDishById: (state) => (id) => {
    return state.dishesList.find(dish => (dish.dishId) === id)
  },
  getUserById: (state) => (id) => {
    return state.usersList.find(user => (user.userId) === id)
  }
}
