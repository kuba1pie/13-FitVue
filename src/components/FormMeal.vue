<template>
  <div id="dishForm" class="row col-6">
    <form id="xyz" ref="form" @submit.stop.prevent="handleSubmit">
      <vue-bootstrap-typeahead
        id="search"
        :data="['Canada', 'USA', 'Mexico']"
      />
      <b-form>
        <b-form-input
          id="formPortion"
          type="number"
          min="0"
          placeholder="Portion"
        ></b-form-input>
        <b-form-select
          v-model="mealTarget.meal"
          :options="optionsMeals"
        ></b-form-select>
        <b-form-input v-model="search"></b-form-input>
      </b-form>

      <b-button v-b-toggle.collapse-1 variant="primary">Custom Dish</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-form>
          <b-form-group
            label-for="formName"
            invalid-feedback="Name is required"
          >
            <b-form-input id="formName" required></b-form-input>

            <b-form-input
              id="formKcal"
              type="number"
              min="0"
              placeholder="kcal"
            ></b-form-input>
            <b-form-input
              id="formProtein"
              type="number"
              min="0"
              placeholder="protein"
            ></b-form-input>
            <b-form-input
              id="formCarbo"
              type="number"
              min="0"
              placeholder="carbo"
            ></b-form-input>
            <b-form-input
              id="formFat"
              type="number"
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
export default {
  name: "FormDish",
  data() {
    return {
      mealList: [],
      //selected: mealTarget.meal,
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
      if (this.dishData._id == null) {
        let link = "https://jsonbox.io/box_c6b9b4b43ad746f983b6/"
        axios
          .post(link, this.dishData)
          .then(function(response) {
            console.log(response)
          })
          .catch(function(error) {
            console.log(error)
          })
      } else {
        let link =
          "https://jsonbox.io/box_c6b9b4b43ad746f983b6/" + this.dishData._id
        axios
          .put(link, this.dishData)
          .then(function(response) {
            console.log(response)
          })
          .catch(function(error) {
            console.log(error)
          })
      }
      setTimeout(() => this.$emit("clicked", "someValue"), 350)
    },
    onExample() {},
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      console.log(this.name)
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
