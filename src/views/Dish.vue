<template>
  <div>
    <!-- Page title -->
    <h1>Dish</h1>
    <b-table striped hover stacked :items="dishData"></b-table>
    <!-- Buttons -->
    <b-button v-b-toggle.collapse-1 variant="info">Edit</b-button>
    <b-button v-b-toggle.collapse-2>Delete</b-button>
    <b-collapse id="collapse-1" class="border border-secondary p-5">
<!--       <FormDish v-bind:dishData="dishD[0]" /> -->
    </b-collapse>
    <b-collapse id="collapse-2" class="border border-secondary p-5">
      Do you want to delete this user?
      <!-- Buttons -->
      <b-button variant="danger" @click="onDelete">Yes</b-button>
      <b-button v-b-toggle.collapse-2 variant="success">No</b-button>
    </b-collapse>
  </div>
</template>

<script>
import axios from "axios"
import router from "vue-router"
//import FormDish from "@/components/FormDish.vue"
import { mapState } from "vuex"

export default {
  name: "Dish",
  data() {
    return {
      dishData: [],
      dishID: this.$route.params.id,
    }
  },
  components: {
    //ormDish,
  },
  computed: {
    ...mapState(["dishesData"]),
    // Return datas from user from url path
    /*     dishD: function() {
      return this.dishesData.filter(x => x._id === this.dishID)
    }, */
  },
  methods: {
    // Get UserData from API by Id
    loadData() {
      axios
        .get(
          "https://apifitvue.ew.r.appspot.com/dishes/" + this.$route.params.id
        )
        .then(response => {
          this.dishData = response.data
        })
        .catch(err => {
          // Manage the state of the application if the request
          // has failed
        })
    },
    // Delete User request
    onDelete() {
      axios.delete(
        "https://apifitvue.ew.r.appspot.com/dishes/" + this.$route.params.id
      )
      // Reload to /users after timeout due to serve response
      setTimeout(() => this.$router.push({ path: "../dishes" }), 350)
    },
  },
  mounted() {
    this.loadData()
  },
}
</script>
<style></style>
