<template>
	<div>
		<b-table striped hover :items="dishesList">
			<template v-slot:cell(_id)="data">
				<router-link :to="`/dish/${data.item._id}`">{{ data.value }}</router-link>
			</template>
		</b-table>
		<b-button v-b-toggle.collapse-1 class="m-1">Add new dish</b-button>
		<!-- Add user collapse -->
		<b-collapse id="collapse-1" class="border border-secondary p-5">
			<!-- Add user form -->
			<FormdDish />
			<!-- Add user buttons -->
			<b-button v-b-toggle.collapse-1 variant="success">Close</b-button>
		</b-collapse>
	</div>
</template>

<script lang="ts">
import axios from "axios"
import FormDish from "@/components/FormDish.vue"
import { mapState, mapMutations } from "vuex"
export default {
	name: "Dishes",
	components: "FormDish",
	data() {
		return {
			dishesList: [],
		}
	},
	computed: {
		...mapState(["usersData"]),
		//...mapGetters(["usersData"]),
	},
	mutations: {
		addUsers(state, dish) {
			state.dishesData.push(dish)
		},
	},
	methods: {
		...mapMutations(["SAVE_DISH"]),
		saveData: function() {
			this.SAVE_DISH(this.dishesList)
		},
	},
	mounted() {
		axios({
			method: "get",
			url: "https://jsonbox.io/box_c6b9b4b43ad746f983b6/",
			timeout: "0",
		})
			.then(response => {
				this.dishesList = [...response.data]
				this.saveData()
			})
			.catch(err => {
				// Manage the state of the application if the request
				// has failed
			})
	},
}
</script>

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
