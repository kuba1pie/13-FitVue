<template>
	<div class="user">
		<!-- Page title -->
		<h1>Users table</h1>
		<!-- Users table -->
		<Axios :key="componentKey" />
		<!-- Table buttons -->
		<b-button v-b-toggle.collapse-1 class="m-1">Add new user</b-button>
		<!-- Add user collapse -->
		<b-collapse id="collapse-1" class="border border-secondary p-5">
			<!-- Add user form -->
			<FormParams @clicked="onClickChild" />
			<!-- Add user buttons -->
			<b-button v-b-toggle.collapse-1 variant="success">Close</b-button>
		</b-collapse>
	</div>
</template>
<script>
import axios from "axios"
import Axios from "@/components/Axios.vue"
import FormParams from "@/components/FormParams.vue"
export default {
	name: "home",
	data: function() {
		return {
			componentKey: 0,
		}
	},
	components: {
		Axios,
		FormParams,
	},
	methods: {
		onClickChild() { // Change key to refresh Axios User table
			this.componentKey += 1
		},
	},
}
</script>
