<template>
	<div class="user">
		<h1>This is an about user page</h1>
		<Axios />
	</div>
</template>
<script>
// @ is an alias to /src
import Axios from "@/components/Axios.vue"

export default {
	name: "home",
	components: {
		Axios,
	},
}
</script>
