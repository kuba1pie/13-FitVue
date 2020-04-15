<template>
  <div id="dishForm" class="row col-6">
    {{ form }}
    <form id="xyz" ref="form" @submit.stop.prevent="handleSubmit">
      <vue-bootstrap-typeahead v-model="form.name" :data="countries" />
      <b-form>
        <b-form-input
          id="formPortion"
          type="number"
          min="0"
          v-model="form.portion"
          placeholder="Portion"
        ></b-form-input>
        <b-form-select
          v-model="mealTarget.meal"
          :options="optionsMeals"
        ></b-form-select>
        <b-form-input></b-form-input>
      </b-form>
      <b-button v-on:click="onSubmit()" variant="primary">Submit</b-button>

      <b-button v-b-toggle.collapse-1 variant="primary">Custom Dish</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-form>
          <b-form-group
            label-for="formName"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="formName"
              required
              v-model="form.name"
            ></b-form-input>

            <b-form-input
              id="formKcal"
              type="number"
              v-model="form.kcal"
              min="0"
              placeholder="kcal"
            ></b-form-input>
            <b-form-input
              id="formProtein"
              type="number"
              v-model="form.protein"
              min="0"
              placeholder="protein"
            ></b-form-input>
            <b-form-input
              id="formCarbo"
              type="number"
              v-model="form.carbo"
              min="0"
              placeholder="carbo"
            ></b-form-input>
            <b-form-input
              id="formFat"
              type="number"
              v-model="form.fat"
              min="0"
              placeholder="fat"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-collapse>
    </form>
  </div>
</template>

<script lang="ts">
import axios from "axios"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import mealForm from "./mealForm"
export default {
  name: "FormDish",
  data() {
    return {
      mealList: [],
      countries: ["Canada", "USA", "Mexico"],
      optionsMeals: [
        { value: 1, text: "Breakfest" },
        { value: 2, text: "Lunch" },
        { value: 3, text: "Dinner" },
        { value: 4, text: "Supper" },
      ],
    }
  },
  methods: {
    onSubmit: function() {
      //let link = "https://apifitvue.ew.r.appspot.com/meals/"
      let link = "http://localhost:3000/meals/"
      console.log(link)
      console.log(this.form)
      axios
        .post(link, this.form)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
      //setTimeout(() => this.$emit("clicked", "someValue"), 350)
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    handleOk(bvModalEvt) {
      console.log(this.form)
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      /*       if (!this.checkFormValidity()) {
        return
      } */
      // Push the name to submitted names
      console.log(this.form)
      this.onSubmit(),
        //        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide("modal-prevent-closing")
        })
    },
  },
  props: {
    mealTarget: {
      type: Object,
    },
    form: {
      default: () => mealForm,
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
