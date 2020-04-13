<template>
  <div id="dishForm" class="row">
    <div class="col-6">
      <b-form>
        <b-form-group id="input-name" label label-for="input-name" description>
          <b-form-input
            id="input-0"
            v-model="mealData.name"
            type="text"
            placeholder="Name"
          ></b-form-input>
          <b-form-input
            id="input-1"
            v-model="mealData.portion"
            type="number"
            placeholder="Kcal"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
    <b-button type="submit" @click="onSubmit" variant="primary"
      >Submit</b-button
    >
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
  },
  props: {
    dishData: {
      default: () => firstDish,
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
