<template>
  <div id="dishForm" class="flex-column d-flex p-2 justify-content-center">
    <b-table striped hover :items="meals"></b-table>
  </div>
</template>

<script lang="ts">
import axios from "axios"
//import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
export default {
	name: "DietTable",
	data() {
		return {
			items: [
				{ age: 40, first_name: "Dickerson", last_name: "Macdonald" },
				{ age: 21, first_name: "Larsen", last_name: "Shaw" },
				{ age: 89, first_name: "Geneva", last_name: "Wilson" },
				{ age: 38, first_name: "Jami", last_name: "Carney" },
			],
			meals: [],
		}
	},
	methods: {
		loadData() {
			axios
				.get(
					"https://apifitvue.ew.r.appspot.com/users/" + this.userId + "/meals/" + this.date
				)
				.then(response => {
					this.meals = [...response.data]
					//console.log(this.meals)
					//this.saveData()
					//localStorage.setItem("storedData", this.usersList)
				})
				.catch(err => {
					// Manage the state of the application if the request
					// has failed
				})
		},
	},
	mounted() {
		this.loadData()
	},
	props: {
		userId: {
			type: String,
		},
		date: {
			type: String,
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
input
  text-align: center
h3
  margin: 40px 0 0

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
