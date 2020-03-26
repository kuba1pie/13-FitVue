<template>
	<div class="user">
		<!-- Page title -->
		<h1>Users table</h1>
		<!-- Users table -->
		<b-table striped hover :items="usersList" :fields="fields">
			<template v-slot:cell(fullname)="data">
				<router-link :to="`/user/${data.item._id}`">
					{{ data.value }}
				</router-link>
			</template>
		</b-table>
		<!-- Table buttons -->
		<b-button v-b-toggle.collapse-1 class="m-1">Add new user</b-button>
		<!-- Add user collapse -->
		<b-collapse id="collapse-1" class="border border-secondary p-5">
			<!-- Add user form -->
			<FormUser @clicked="onClickChild" />
			<!-- Add user buttons -->
			<b-button v-b-toggle.collapse-1 variant="success">Close</b-button>
		</b-collapse>
	</div>
</template>
<script>
import axios from "axios"
import { mapState, mapMutations } from "vuex"
import FormUser from "@/components/FormUser.vue"
export default {
	name: "Users",
	data: function() {
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
	components: {
		FormUser,
	},
	computed: {
		...mapState(["usersData"]),
	},
	methods: {
		...mapMutations(["SAVE_DATA"]),
		onClickChild() {
			this.loadData()
		},
		saveData: function() {
			this.SAVE_DATA(this.usersList)
		},
		fullName(value) {
			return `${value.name} ${value.lastname}`
		},
		loadData() {
			axios({
				method: "get",
				url: "https://jsonbox.io/box_5da249ea28d2b15aa1a8/",
			})
				.then(response => {
					this.usersList = [...response.data]
					this.saveData()
					localStorage.setItem("storedData", this.usersList)
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
	mutations: {
		addUsers(state, users) {
			state.usersData.push(users)
		},
	},
}
</script>
