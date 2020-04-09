<template>
  <div>
    <b-table striped hover :items="dishesList" :fields="fields">
      <template v-slot:cell(name)="data">
        <router-link :to="`/dish/${data.item.id}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <b-button v-b-toggle.collapse-1 class="m-1">Add new dish</b-button>
    <!-- Add dish collapse -->
    <b-collapse id="collapse-1" class="border border-secondary p-5">
      <!-- Add dish form -->
      <FormDish @clicked="onClickChild" />
      <!-- Add dish buttons -->
      <b-button v-b-toggle.collapse-1 variant="success">Close</b-button>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import axios from "axios"
import FormDish from "@/components/FormDish.vue"
import { mapState, mapMutations } from "vuex"
export default {
  name: "Dishes",
  data: function() {
    return {
      dishesList: [],
      fields: ["name", "kcal", "protein", "carbo", "fat"],
    }
  },
  components: {
    FormDish,
  },
  computed: {
    ...mapState(["dishesData"]),
  },
  methods: {
    ...mapMutations(["SAVE_DISH"]),
    saveData: function() {
      this.SAVE_DISH(this.dishesList)
    },
    onClickChild() {
      this.loadData()
    },
    loadData() {
      axios({
        method: "get",
        url: "https://apifitvue.ew.r.appspot.com/dishes",
      })
        .then(response => {
          this.dishesList = [...response.data]
          //console.log(response.data)
          //this.saveData()
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
  /* 	mutations: {
		addUsers(state, dish) {
			state.dishesData.push(dish)
		},
	}, */
}
</script>

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
