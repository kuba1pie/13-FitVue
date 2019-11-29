<template>
	<div class="results">
		<b-card class="mt-3" header="form Result">
			<p>Name is: {{ form.name }}</p>
			<p>Lastname is: {{ form.lastname }}</p>
			<p>Email is: {{ form.email }}</p>
			<p>Age is: {{ form.age }}</p>
			<p>Weight is: {{ form.weight }}</p>
			<p>Height is: {{ form.height }}</p>
		</b-card>
	</div>
</template>

<script>
export default {
	name: "Calculate",
	props: {
		form: {
			type: String,
		},
	},
}
</script>

<style></style>
