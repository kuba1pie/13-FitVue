<template>
	<div class="user">
		<h1>Users table</h1>
		<Axios />
		<b-button v-b-toggle.collapse-1 class="m-1">Add new user</b-button>
		<b-collapse id="collapse-1" class="border border-secondary p-5">
			<FormParams />
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
	components: {
		Axios,
		FormParams,
	},
}
</script>
