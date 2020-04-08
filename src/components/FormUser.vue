<template>
  <div id="userForm" class="row">
    <div class="col-6">
      <b-form @reset="onReset">
        <b-form-group id="input-name" label label-for="input-name" description>
          <b-form-input
            id="input-1"
            v-model="userData.name"
            type="text"
            placeholder="Name"
          ></b-form-input>
          <b-form-input
            id="input-2"
            v-model="userData.lastname"
            type="text"
            placeholder="Lastname"
          ></b-form-input>
          <b-form-input
            id="input-3"
            v-model="userData.email"
            type="email"
            placeholder="Email"
          ></b-form-input>
          <b-form-input
            id="input-4"
            v-model="userData.age"
            type="date"
            required
            placeholder="Birth"
          ></b-form-input>
          <b-form-radio-group
            v-model="userData.selected"
            :options="genders"
            name="form.gender"
            required
          ></b-form-radio-group>
          <b-form-input
            id="input-5"
            v-model="userData.weight"
            type="number"
            required
            placeholder="Weight"
          ></b-form-input>
          <b-form-input
            id="input-6"
            v-model="userData.height"
            type="number"
            required
            placeholder="Height"
          ></b-form-input>
          <b-form-select
            id="input-7"
            v-model="userData.activity"
            :options="activity"
            required
          ></b-form-select>
          <b-form-input
            id="range-2"
            v-model="userData.value"
            type="range"
            min="0"
            max="5"
            step="0.5"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
    <b-button type="submit" @click="onSubmit" variant="primary"
      >Submit</b-button
    >
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
        let link = "https://apifitvue.ew.r.appspot.com/users"
        axios
          .post(link, this.userData)
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
      default: () => firstForm,
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
