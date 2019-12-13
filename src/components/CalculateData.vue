<template>
	<div class="results">
		<b-card class header="form Result">
			<p>Name : {{ form.name }}</p>
			<p>Lastname : {{ form.lastname }}</p>
			<b-button variant="info" @click="addForm">Wyślij</b-button>
		</b-card>

		<Stats v-bind:form="form" class="col-12" />
	</div>
</template>

<script>
import Stats from "@/components/Stats.vue"
import { mapState, mapMutations, mapGetters, mapActions, userForms } from "vuex"
export default {
	name: "CalculateData",
	data() {
		return {
			newLink: "",
		}
	},
	components: { Stats },
	computed: {
		...mapState(["title", "formularze", "forms"]),
		...mapGetters(["countLinks"]),
	},
	methods: {
		...mapMutations(["ADD_FORM"]),
		addForm: function() {
			this.ADD_FORM(this.form)
		},
		onSubmit() {
			//submitUser: true
			//let json = JSON.parse(JSON.stringify(this.form))
			//this.ADD_FORM(this.json)
		},
	},
	props: {
		form: {
			type: Object,
		},
	},
}
</script>

<style></style>
