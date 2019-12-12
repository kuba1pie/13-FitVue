<template>
	<div class="stats">
		<h1>A different component</h1>
		<p>There are currenty {{ countLinks }}</p>
		<button v-on:click="removeAllLinks">Remove All links</button>
		<p>{{ msg }}</p>
		<b-table striped hover :fields="fields" :items="formularze"></b-table>
		<!-- 		<div class="element" v-for="(formularz, index) in formularze" v-bind:key="index">
			<h1>Formularz: {{ index }}</h1>
			<p>{{ formularz }}</p>
			<p>{{ formularz.lastname }}</p>
		</div>-->
	</div>
</template>
<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex"
export default {
	name: "Stats",
	data() {
		return {
			msg: "",
			fields: [
				"name",
				"lastname",
				"weight",
				"height",
				{
					key: "birthYear",
					label: "Calculated BMI",
					formatter: (value, key, item) => {
						//return new Date().getFullYear() - item.age
						return Number(
							(item.weight / (item.height / 100) / (item.height / 100)).toFixed(
								1
							)
						)
					},
				},
			],
		}
	},
	computed: {
		...mapGetters(["countLinks"]),
		...mapState([
			"title",
			"links",
			"formularze",
			"forms",
			" forms: state => state.forms.all",
		]),
	},
	methods: {
		...mapMutations(["REMOVE_ALL", "ADD_FORM"]),
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
