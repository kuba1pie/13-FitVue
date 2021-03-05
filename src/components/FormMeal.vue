<template>
  <div id="dishForm" class="flex-column d-flex p-2 justify-content-center">
    <vue-bootstrap-typeahead
      :serializer="item => item.name"
      v-model="form.name"
      :data="dishesList"
      @hit="form = $event"
    />
    <b-form>
      <b-form-input
        id="formPortion"
        type="number"
        min="0"
        label="Portion"
        v-model="form.portion"
        placeholder="Portion"
      ></b-form-input>
      <b-form-select
        v-model="form.meal"
        :options="optionsMeals"
      ></b-form-select>
      <b-form-input></b-form-input>
    </b-form>

    <b-button v-b-toggle.collapse-1 variant="primary">Custom Dish</b-button>

    <b-collapse id="collapse-1" class="mt-2">
      <b-form>
        <b-form-group label-for="formName" invalid-feedback="Name is required">
          <b-form-input
            id="formName"
            required
            v-model="form.name"
          ></b-form-input>
          <b-form-input
            id="formName"
            required
            v-model="form.userId"
            class="d-none"
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
    <b-button v-on:click="onSubmit()" variant="primary">Submit</b-button>
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
      optionsMeals: [
        { value: 1, text: "Breakfest" },
        { value: 2, text: "Lunch" },
        { value: 3, text: "Dinner" },
        { value: 4, text: "Supper" },
      ],
      form: {
        mealId: null,
        date: this.mealTarget.date,
        userId: this.$route.params.id,
        meal: this.mealTarget.meal,
        name: null,
        dishId: null,
        portion: null,
        kcal: null,
        protein: null,
        carbo: null,
        fat: null,
      },
    }
  },
  computed: {
    ...mapState(["usersData"]),
  },
  methods: {
    ...mapMutations(["SAVE_DATA"]),
    loadData() {
      axios({
        method: "get",
        url: "https://fitvueapi.azurewebsites.net/dishes",
      })
        .then(response => {
          this.dishesList = [...response.data]
          //this.saveData()
          //localStorage.setItem("storedData", this.usersList)
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    },
    onSubmit: function() {
      let link = "https://fitvueapi.azurewebsites.net/meals/"
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
      //const valid = this.$refs.form.checkValidity()
      //this.nameState = valid
      //return valid
    },
    handleOk(bvModalEvt) {
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
      this.onSubmit(),
        //        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide("modal-prevent-closing")
        })
    },
  },
  mounted() {
    //this.loadDishesList()
    this.loadData()
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
