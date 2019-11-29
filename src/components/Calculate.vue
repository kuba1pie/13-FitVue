<template>
  <div class="results row">
    <div class="mt-3 col-6" header="Input Data">
      <p>Name is: {{ form.name }}</p>
      <p>Lastname is: {{ form.lastname }}</p>
      <p>Email is: {{ form.email }}</p>
      <p>Age is: {{ form.age }}</p>
      <p>Gender is: {{ form.gender }}</p>
      <p>Weight is: {{ form.weight }}</p>
      <p>Height is: {{ form.height }}</p>
      <p>Activity is: {{ form.activity }}</p>
    </div>
    <div class="mt-3 col-6" header="Input Data">
      <p>BMI is: {{ form.name }}</p>
      <p>PPM is: {{ form.lastname }}</p>
      <p>CPM is: {{ form.email }}</p>
    </div>
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
