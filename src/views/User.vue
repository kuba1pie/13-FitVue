<template>
	<div>
		{{ userData._id }}
		<br />
		{{ userData.name }}
		<br />
		{{ userData.lastname }}
		<br />
		{{ userData.age }}
		<br />
		{{ userData.height }}
		<br />
		<b-button v-b-toggle.collapse-1 variant="info" @click="onEdit">Edit</b-button>
		<b-button v-b-toggle.collapse-2 class="m-1">Delete</b-button>
		<b-collapse id="collapse-1" class="border border-secondary p-5">
			<FormParams v-bind:userData="userData" />
			<b-button variant="danger" @click="onSave">Save</b-button>
		</b-collapse>
		<b-collapse id="collapse-2" class="border border-secondary p-5">
			Do you want to delete this user?
			<b-button variant="danger" @click="onDelete">Yes</b-button>
			<b-button v-b-toggle.collapse-2 variant="success">No</b-button>
		</b-collapse>
	</div>
</template>

<script>
import axios from "axios"
//import router from "vue-router"
import FormParams from "@/components/FormParams.vue"
export default {
	data() {
		return {
			userData: [],
		}
	},
	name: "User",
	components: {
		FormParams,
	},
	methods: {
		onDelete() {
			const animal = [this.$route.params.id]
			console.log(animal)
			axios.delete(
				"https://jsonbox.io/box_5da249ea28d2b15aa1a8/" + this.$route.params.id
			)
			//router.push({ path: "/users" })
			//.then(res => console.log(res.data))
		},
		onEdit() {},
		onSave() {
			console.log("edit")
		},
	},
	mounted() {
		axios
			.get(
				"https://jsonbox.io/box_5da249ea28d2b15aa1a8/" + this.$route.params.id
			)
			.then(response => {
				this.userData = response.data
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
