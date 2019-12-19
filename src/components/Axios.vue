<template>
	<div>
		<b-table striped hover :items="usersList" :fields="fields">
			<template v-slot:cell(fullname)="data">
				<router-link :to="`/user/${data.item._id}`">{{ data.value }}</router-link>
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
			fields: [
				{
					key: "fullname",
					label: "Fullname:",
					sortable: true,
					formatter: (value, key, item) => {
						return item.name + " " + item.lastname
					},
				},
				{
					key: "birthDate",
					label: "Age: ",
					sortable: true,
					formatter: (value, key, item) => {
						return new Date().getFullYear() - new Date(item.age).getFullYear()
					},
				},
				{
					key: "gender",
					label: "Gender:",
					sortable: true,
				},
			],
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
		fullName(value) {
			return `${value.name} ${value.lastname}`
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
<style></style>
