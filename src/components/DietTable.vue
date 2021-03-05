<template>
  <div id="dishForm" class="flex-column d-flex p-2 justify-content-center">
    <b-table striped hover :items="meals" :fields="fields">
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          v-b-modal.modal-1
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
          >Add a dish</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import axios from "axios"
//import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
export default {
  name: "DietTable",
  data() {
    return {
      optionsMeals: [
        { value: 1, text: "Breakfest" },
        { value: 2, text: "Lunch" },
        { value: 3, text: "Dinner" },
        { value: 4, text: "Supper" },
      ],
      meals: [],
      fields: [
        {
          key: "meal",
        },
        {
          key: "name",
        },
        {
          key: "kcal",
        },
        {
          key: "name",
        },
        { key: "actions", label: "Actions" },
      ],
    }
  },
  methods: {
    loadData() {
      axios
        .get(
          "https://fitvueapi.azurewebsites.net/users/" +
            this.userId +
            "/meals/" +
            this.date
          //"http://localhost:3000/users/" + this.userId + "/meals/" + this.date
        )
        .then(response => {
          this.meals = [...response.data]
          //console.log(this.meals)
          let i,
            kcal = 0,
            fat = 0,
            prot = 0,
            carb = 0
          for (i = 0; i < this.meals.length; i++) {
            kcal = parseInt(this.meals[i].kcal, 10) + kcal
            fat = parseInt(this.meals[i].fat, 10) + fat
            prot = parseInt(this.meals[i].protein, 10) + prot
            carb = parseInt(this.meals[i].carbo, 10) + carb
          }

          let sumaobj = {
            meal: "Suma",
            kcal: kcal,
            protein: prot,
            carbo: carb,
            fat: fat,
          }
          this.meals.push(sumaobj)
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    },
  },
  mounted() {
    this.loadData()
  },
  props: {
    userId: {
      type: String,
    },
    date: {
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
