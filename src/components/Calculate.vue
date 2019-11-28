<template>
  <div class="results">
    <b-card class="mt-3" header="formData Result">
      <p>Name is: {{ formData.name }}</p>
      <p>Lastname is: {{ formData.lastname }}</p>
      <p>Email is: {{ formData.email }}</p>
      <p>Age is: {{ formData.age }}</p>
      <p>Weight is: {{ formData.weight }}</p>
      <p>Height is: {{ formData.height }}</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Calculate",
  props: {
    formDataData: {
      type: String,
    },
  },
}
</script>

<style></style>
