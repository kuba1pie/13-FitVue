<template>
	<div id="userForm" class="row">
		<div class="col-6">
			<b-form @submit="onSubmit" @reset="onReset" @example="onExample" v-if="show">
				<b-form-group id="input-name" label label-for="input-name" description>
					<b-form-input id="input-1" v-model="form.name" type="text" placeholder="Name"></b-form-input>
					<b-form-input id="input-2" v-model="form.lastname" type="text" placeholder="Lastname"></b-form-input>
					<b-form-input id="input-3" v-model="form.email" type="email" placeholder="Email"></b-form-input>
					<b-form-input id="input-4" v-model="form.age" type="number" required placeholder="Age"></b-form-input>
					<b-form-radio-group v-model="form.selected" :options="genders" name="form.gender" required></b-form-radio-group>
					<b-form-input id="input-5" v-model="form.weight" type="number" required placeholder="Weight"></b-form-input>
					<b-form-input id="input-6" v-model="form.height" type="number" required placeholder="Height"></b-form-input>
					<b-form-select id="input-7" v-model="form.activity" :options="activity" required></b-form-select>
					<b-form-input id="range-2" v-model="form.value" type="range" min="0" max="5" step="0.5"></b-form-input>
				</b-form-group>
				<!-- Buttons -->
				<b-button type="submit" v-on:click="linkSubmit" variant="primary">Submit</b-button>
				<b-button type="reset" variant="danger">Reset</b-button>
				<b-button type="example" variant="info">Example</b-button>
			</b-form>
		</div>
		<CalculateData v-bind:form="form" class="col-6" />
	</div>
</template>

<script lang="ts">
import CalculateData from "@/components/CalculateData.vue"
export default {
	name: "FormParams",
	components: { CalculateData },
	data() {
		return {
			show: true,
			form: {
				id: "default",
				name: "Lue",
				lastname: "Schneider",
				email: "Rosella93@yahoo.com",
				age: 23,
				gender: "female",
				weight: 75,
				height: 170,
				activity: 1.4,
			},
			activity: [
				{ value: null, text: "Select your activity" },
				{ value: 1, text: "None" },
				{ value: 1.2, text: "Low" },
				{ value: 1.4, text: "Moderate" },
				{ value: 1.6, text: "Athlete" },
			],
			genders: [
				{ text: "Female", value: "female" },
				{ text: "Male", value: "male" },
			],
		}
	},
	methods: {
		onReset() {
			// Reset our form values
		},
		onExample() {
			return {
				form: {
					id: "default",
					name: "",
					lastname: "",
					email: "",
					age: 23,
					gender: "female",
					weight: 23,
					height: 23,
				},
			}
		},
		onlinkSubmit() {
			console.log("submit")
		},
	},
	props: {
		name: {
			type: String,
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
input
  text-align: center
h3
  margin: 40px 0 0

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983
</style>
