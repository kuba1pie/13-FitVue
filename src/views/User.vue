<template>
	<div>
		<h1>User</h1>
		<b-table striped hover :items="reversedMessage"></b-table>

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
import router from "vue-router"
import FormParams from "@/components/FormParams.vue"
import { mapState, mapGetters } from "vuex"
export default {
	name: "User",
	data() {
		return {
			userData: [],
			userID: this.$route.params.id,
		}
	},
	components: {
		FormParams,
	},
	computed: {
		...mapState(["usersData"]),
		reversedMessage: function() {
			return this.usersData.filter(x => x._id === this.userID)
		},
	},
	methods: {
		onDelete() {
			axios.delete(
				"https://jsonbox.io/box_5da249ea28d2b15aa1a8/" + this.$route.params.id
			)
			this.$router.push("../users")
			//.then(res => console.log(res.data))
		},
		onEdit() {},
		onSave() {
			console.log("edit")
		},
	},
}
</script>
<style>
</style>
