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

export default {
	data() {
		return {
			usersList: [],
		}
	},

	mounted() {
		axios
			.get("https://jsonbox.io/box_5da249ea28d2b15aa1a8/")
			.then(response => {
				this.usersList = [...response.data]
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
