<template>
	<div class="results">
		<b-card class header="form Result">
			<p>Name : {{ form.name }}</p>
			<p>Lastname : {{ form.lastname }}</p>
			<p>Email : {{ form.email }}</p>
			<p>Age : {{ form.age }}</p>
			<p>Weight : {{ form.weight }}</p>
			<p>Height : {{ form.height }}</p>
			<p>Activity : {{ form.activity }}</p>
			<p>Value : {{ form.value }}</p>
		</b-card>
		<div class="down">
			<form @submit.prevent="addLink">
				<input class="link-layout" type="text" placeholder="Add a link" v-model="newLink" />
			</form>
			{{ title }}
			<ul>
				<li v-for="(link, index) in links" v-bind:key="index">
					{{ link }}
					<button v-on:click="removeLinks(index)" class="rm">Remove</button>
				</li>
			</ul>
		</div>
		<Stats v-bind:form="form" class="col-6" />
	</div>
</template>

<script>
import Stats from "@/components/Stats.vue"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
export default {
	name: "CalculateData",
	data() {
		return {
			newLink: "",
		}
	},
	components: { Stats },
	computed: { ...mapState(["title", "links"]), ...mapGetters(["countLinks"]) },
	methods: {
		...mapMutations(["ADD_LINK"]),
		...mapActions(["removeLink"]),
		addLink: function() {
			this.ADD_LINK(this.newLink)
			this.newLink = ""
		},
		removeLinks: function(link) {
			this.removeLink(link)
		},
	},
	props: {
		form: {
			type: String,
		},
	},
}
</script>

<style></style>
