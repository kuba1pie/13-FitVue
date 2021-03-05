import axios from "axios"

export default {
  async fetchUsers(context) {
    context.commit("SET_LOADING_USERS", "loading")
    return axios
      .get("https://fitvueapi.azurewebsites.net/users")
      .then(response => {
        context.commit("SET_LOADING_USERS", "done")
        context.commit("SAVE_USERSLIST", response.data)
      })
  },
  async fetchDishes(context) {
    context.commit("SET_LOADING_DISHES", "loading")
    return axios
      .get("https://fitvueapi.azurewebsites.net/dishes")
      .then(response => {
        context.commit("SET_LOADING_DISHES", "done")
        context.commit("SAVE_DISHESLIST", response.data)
      })
  },
}
