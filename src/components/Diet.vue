<template>
	<div class="hello">
		<b-table striped hover :items="meals"></b-table>
	</div>
</template>

<script lang="ts">
import axios from "axios"
import router from "vue-router"
export default {
	name: "Diet",
	data: function() {
		return {
			//userData: [],
			dishesList: [],
			meals: [
				{ name: "breakfest" },
				{ name: "lunch" },
				{ name: "dinner" },
				{ name: "supper" },
			],
			//userID: this.$route.params.id,
		}
	},
	methods: {
		loadData() {
			axios({
				method: "get",
				url: "https://jsonbox.io/box_c6b9b4b43ad746f983b6/",
			})
				.then(response => {
					this.dishesList = [...response.data]
					console.log(this.dishesList)
					//this.saveData()]
				})
				.catch(err => {
					// Manage the state of the application if the request
					// has failed
				})
		},
	},
	mounted() {
		this.loadData() // Load Dishes
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
