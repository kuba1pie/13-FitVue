<template>
	<div class="home">
		<Hello msg="Welcome to Your Vue.js App" />
		<FormParams />
	</div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue"
import FormParams from "@/components/FormParams.vue"

export default {
	name: "home",
	components: {
		Hello,
		FormParams,
	},
}
</script>
