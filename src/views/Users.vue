<template>
	<div class="user">
		<!-- Page title -->
		<h1>Users table</h1>
		<!-- Users table -->
		<b-table striped hover :items="usersList" :fields="fields">
			<template v-slot:cell(fullname)="data">
				<router-link :to="`/user/${data.item._id}`">{{ data.value }}</router-link>
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
import mysql from "mysql"
import { mapState, mapMutations } from "vuex"
import FormUser from "@/components/FormUser.vue"
//let mysql = require("mysql")
import { db_host, db_user, db_password, db_database } from "../private/dbinfo"
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
		base: function() {
			//console.log(db_host)
			var mysql = require("mysql")
			let con = mysql.createPool({
				host: db_host,
				user: db_user,
				password: db_password,
				database: db_database,
			})
			con.getConnection(function(err) {
				if (err) throw err
				console.log("Connected to the " + db_database + " database!")
			})
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
		this.base()
		this.loadData()
	},
	mutations: {
		addUsers(state, users) {
			state.usersData.push(users)
		},
	},
}
</script>
