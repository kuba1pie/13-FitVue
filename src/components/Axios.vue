<template>
	<div>
		<b-table striped hover :items="usersList">
			<template v-slot:cell(_id)="data">
				<router-link :to="`/user/${data.value}`">{{ data.value }}</router-link>
			</template>
		</b-table>
	</div>
</template>

<script>
import axios from "axios"
import { mapState, mapMutations } from "vuex"

export default {
	data() {
		return {
			usersList: [],
		}
	},
	computed: {
		...mapState(["usersData"]),
		//...mapGetters(["usersData"]),
	},
	mutations: {
		addUsers(state, users) {
			state.usersData.push(users)
		},
	},
	methods: {
		...mapMutations(["SAVE_DATA"]),
		saveData: function() {
			this.SAVE_DATA(this.usersList)
		},
	},
	mounted() {
		axios({
			method: "get",
			url: "https://jsonbox.io/box_5da249ea28d2b15aa1a8/",
			timeout: "0",
		})
			.then(response => {
				this.usersList = [...response.data]
				this.saveData()
			})
			.catch(err => {
				// Manage the state of the application if the request
				// has failed
			})
	},
}
</script>
<style>
</style>
