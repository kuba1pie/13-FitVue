<template>
	<div class="stats">
		<h1>A different component</h1>
		<p>There are currenty {{ countLinks }}</p>
		<button v-on:click="removeAllLinks">Remove All links</button>
		<p>{{ msg }}</p>
		<div class="element" v-for="(formularz, index) in formularze" v-bind:key="index">
			<h1>Formularz: {{ index }}</h1>
			<p>{{ formularz.name }}</p>
			<p>{{ formularz.lastname }}</p>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex"
export default {
	name: "Stats",
	data() {
		return {
			msg: "",
		}
	},
	computed: {
		...mapGetters(["countLinks"]),
		...mapState(["title", "links", "formularze"]),
	},
	methods: {
		...mapMutations(["REMOVE_ALL"]),
		...mapActions(["removeAll"]),
		removeAllLinks() {
			this.removeAll().then(() => {
				this.msg = "They have been removed."
			})
		},
	},
	props: {
		form: {
			type: Object,
		},
	},
}
</script>

<style scoped lang="sass">
.stats
	background-color: #4444
</style>
