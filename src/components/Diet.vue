<template>
  <div class="hello">
    <date-pick v-model="mealTarget.date"></date-pick>
    <b-table striped hover :items="meals" :fields="fields">
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          v-b-modal.modal-1
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
          >Add a disheeeeee</b-button
        >
      </template>
    </b-table>
    <!-- Form modal -->
    <b-modal id="modal-1" :title="formModal.title">
      <FormMeal :mealTarget="mealTarget" />
    </b-modal>
    <DietTable :userId="mealTarget.userId" :date="mealTarget.date" />
  </div>
</template>

<script lang="ts">
import axios from "axios"
import router from "vue-router"
import FormMeal from "@/components/FormMeal.vue"
import DietTable from "@/components/DietTable.vue"
import DatePick from "vue-date-pick"
import "vue-date-pick/dist/vueDatePick.css"
export default {
  name: "Diet",
  data: function() {
    return {
      dishesList: [],
      meals: [
        { name: "Breakfest", id: 1 },
        { name: "Lunch", id: 2 },
        { name: "Dinner", id: 3 },
        { name: "Supper", id: 4 },
      ],
      fields: [
        {
          key: "name",
          label: "Meal",
        },
        { key: "actions", label: "Actions" },
      ],
      formModal: {
        id: "form-modal",
        title: "",
        content: "",
      },
      mealTarget: {
        meal: null,
        userId: this.$route.params.id,
        date: "2020-04-16",
      },
      //userID: this.$route.params.id,
    }
  },
  components: {
    FormMeal,
    DatePick,
    DietTable,
  },
  methods: {
    loadData() {
      axios({
        method: "get",
        url: "https://fitvueapi.azurewebsites.net/dishes",
      })
        .then(response => {
          this.dishesList = [...response.data]
          //console.log(this.dishesList)
          //this.saveData()]
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    },
    info(item, index, button) {
      //this.formModal.title = `Add ${item.name}`
      //console.log(item.name)
      this.mealTarget.meal = item.id
      //this.$root.$emit("bv::show::modal", this.formModal.id, button)
    },
  },
  mounted() {
    this.loadData() // Load Dishes
    //console.log(this.post.title)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
