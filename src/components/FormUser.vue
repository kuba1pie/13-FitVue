<template>
  <div id="userForm">
    <b-form @reset="onReset">
      <b-form-group id="input-name" label label-for="input-name" description>
        <b-form-input
          id="input-1"
          v-model="userData[0].name"
          type="text"
          placeholder="Name"
        ></b-form-input>
        <b-form-input
          id="input-2"
          v-model="userData[0].lastname"
          type="text"
          placeholder="Lastname"
        ></b-form-input>
        <b-form-input
          id="input-3"
          v-model="userData[0].email"
          type="email"
          placeholder="Email"
        ></b-form-input>
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
        <b-form-select
          id="input-7"
          v-model="userData[0].activity"
          :options="activity"
          required
        ></b-form-select>
      </b-form-group>
    </b-form>
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
  computed: {
    ...mapGetters(["getUserById"]),
  },
  methods: {
    onReset() {},
    onSubmit: function() {
      let idek = this.$route.params.id
      console.log(idek)
      if (idek == null) {
        console.log(this.userData)
        let link = "https://fitvueapi.azurewebsites.net/users"
        axios
          .post(link, this.userData[0])
          .then(function(response) {
            console.log(response)
          })
          .catch(function(error) {
            console.log(error)
          })
      } else {
        let link = "https://fitvueapi.azurewebsites.net/users/" + idek
        axios
          .put(link, this.userData[0])
          .then(function(response) {
            //console.log("response" + response)
          })
          .catch(function(error) {
            console.log(error)
          })
      }
      setTimeout(() => this.$emit("clicked", "someValue"), 350)
    },
    onExample() {},
  },
  async mounted() {
    if (this.$store.state.usersList) {
      this.userData = this.getUserById(Number(this.$route.params.id))
    }
    await this.fetchUsers()
    this.userData = this.getUserById(Number(this.$route.params.id))
  },
  props: {
    userData: {
      type: Array,
      default: function() {
        return [
          { name: null },
          { lastname: null },
          { email: null },
          { age: null },
          { gender: null },
          { weight: null },
          { height: null },
          { activity: null },
          { value: null },
        ]
      },
      /* default: [name: null, lastname: null, email: null, age: null, gender: null, weight: null, height: null, activity: null, value: null], */
    },
  },
}
</script>
