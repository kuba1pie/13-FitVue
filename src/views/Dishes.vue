<template>
  <div>
    <b-table striped hover :items="dishesList" :fields="fields">
      <template v-slot:cell(name)="data">
        <router-link :to="`/dish/${data.item.dishId}`">{{
          data.value
        }}</router-link>
      </template>
    </b-table>
    <b-button v-b-modal.modal-1 class="m-1">Add new dish</b-button>
    <!-- Add dish collapse -->
    <b-modal id="modal-1" class="row border border-secondary p-5">
      <!-- Add dish form -->
      <FormDish @clicked="onClickChild" />
    </b-modal>
  </div>
</template>

<script lang="ts">
import FormDish from "@/components/FormDish.vue"
import { mapState, mapMutations, mapActions } from "vuex"
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
    ...mapMutations(["SAVE_DISHESLIST"]),
    ...mapActions(["fetchDishes"]),
  },
  async mounted() {
    if (this.$store.state.dishesList) {
      this.dishesList = this.$store.state.dishesList
    }
    await this.fetchDishes()
    this.dishesList = this.$store.state.dishesList
  },
}
</script>
