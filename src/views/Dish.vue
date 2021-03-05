<template>
  <div>
    <!-- Page title -->
    <h1>Dish: {{ dishData.name }}</h1>
    <b-table striped hover stacked :items="dishData[0]"></b-table>
    <!-- Buttons -->
    <b-button v-b-modal.modal-1 variant="info">Edit</b-button>
    <b-button v-b-toggle.collapse-2>Delete</b-button>
    <b-modal id="modal-1" class="border border-secondary p-5">
      <FormDish v-bind:dishData="dishData[0]" />
    </b-modal>
    <b-collapse id="collapse-2" class="border border-secondary p-5">
      Do you want to delete this dish?
      <!-- Buttons -->
      <b-button variant="danger" @click="onDelete">Yes</b-button>
      <b-button v-b-toggle.collapse-2 variant="success">No</b-button>
    </b-collapse>
  </div>
</template>

<script>
import axios from "axios"
import router from "vue-router"
import FormDish from "@/components/FormDish.vue"
import { mapState, mapGetters, mapActions } from "vuex"

export default {
  name: "Dish",
  data() {
    return {
      dishData: [],
      dishID: this.$route.params.id,
    }
  },
  components: {
    FormDish,
  },
  computed: {
    ...mapGetters(["getDishById"]),
  },
  methods: {
    ...mapActions(["fetchDishes"]),
    onDelete() {
      axios.delete(
        "https://fitvueapi.azurewebsites.net/dishes/" + this.$route.params.id
      )
      setTimeout(() => this.$router.push({ path: "../dishes" }), 350)
    },
  },
  async mounted() {
    if (this.$store.state.dishesList) {
      this.dishData = this.getDishById(Number(this.$route.params.id))
    }
    await this.fetchDishes()
    this.dishData = this.getDishById(Number(this.$route.params.id))
  },
}
</script>
