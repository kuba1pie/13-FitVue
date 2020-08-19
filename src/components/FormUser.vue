<template>
  <div id="userForm">
    <b-form @reset="onReset">
      <b-form-group id="input-name" label label-for="input-name" description>
        <b-form-input id="input-1" v-model="userData[0].name" type="text" placeholder="Name"></b-form-input>
        <b-form-input
          id="input-2"
          v-model="userData[0].lastname"
          type="text"
          placeholder="Lastname"
        ></b-form-input>
        <b-form-input id="input-3" v-model="userData[0].email" type="email" placeholder="Email"></b-form-input>
        <b-form-input
          id="input-4"
          v-model="userData[0].birth"
          type="date"
          required
          placeholder="Birth"
        ></b-form-input>
        <b-form-radio-group
          v-model="userData[0].gender"
          :options="genders"
          name="form.gender"
          required
        ></b-form-radio-group>
        <b-form-input
          id="input-5"
          v-model="userData[0].weight"
          type="number"
          required
          placeholder="Weight"
        ></b-form-input>
        <b-form-input
          id="input-6"
          v-model="userData[0].height"
          type="number"
          required
          placeholder="Height"
        ></b-form-input>
        <b-form-select id="input-7" v-model="userData[0].activity" :options="activity" required></b-form-select>
      </b-form-group>
    </b-form>
    <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
  </div>
</template>

<script lang="ts">
import axios from "axios"
import VuexPersistence from "vuex-persist"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import firstForm from "./firstForm"

export default {
	name: "FormUser",
	data() {
		return {
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
			usersList: [],
		}
	},
	methods: {
		onReset() {},
		onSubmit: function() {
			if (this.userData._id == null) {
				console.log(this.userData)
				let link = "https://apifitvue.ew.r.appspot.com/users"
				axios
					.post(link, this.userData[0])
					.then(function(response) {
						console.log(response)
					})
					.catch(function(error) {
						console.log(error)
					})
			} else {
				let link =
					"https://apifitvue.ew.r.appspot.com/users" + this.userData._id
				axios
					.put(link, this.userData)
					.then(function(response) {
						console.log("response" + response)
					})
					.catch(function(error) {
						console.log(error)
					})
			}

			setTimeout(() => this.$emit("clicked", "someValue"), 350)
		},
		onExample() {},
	},
	props: {
		userData: {
			type: Array,
			default: function() {
				return [{name: null}, {lastname: null}, {email: null}, {age: null}, {gender: null}, {weight: null}, {height: null}, {activity: null}, {value: null}]
			},
			/* default: [name: null, lastname: null, email: null, age: null, gender: null, weight: null, height: null, activity: null, value: null], */
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
