<template>
	<div class="stats">
		<h1>A different component</h1>
		<p>There are currenty {{ countLinks }}</p>
		<button v-on:click="removeAllLinks">Remove All links</button>
		<p>{{ msg }}</p>
		<ul>
			<li v-for="(formularz, index) in formularze" v-bind:key="index">dsddsdsd {{ formularz }}</li>
		</ul>
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
