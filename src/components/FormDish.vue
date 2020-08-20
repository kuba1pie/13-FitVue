<template>
  <div id="dishForm">
    <b-form>
      <b-form-group id="input-name" label label-for="input-name" description>
        <b-form-input
          id="input-0"
          v-model="dishData.name"
          type="text"
          placeholder="Name"
        ></b-form-input>
        <b-form-input
          id="input-1"
          v-model="dishData.kcal"
          type="number"
          placeholder="Kcal"
        ></b-form-input>
        <b-form-input
          id="input-2"
          v-model="dishData.protein"
          type="number"
          placeholder="Proteins"
        ></b-form-input>
        <b-form-input
          id="input-3"
          v-model="dishData.carbo"
          type="number"
          placeholder="Carbs"
        ></b-form-input>
        <b-form-input
          id="input-3"
          v-model="dishData.fat"
          type="number"
          placeholder="Fats"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button type="submit" @click="onSubmit()" variant="primary"
      >Submit</b-button
    >
  </div>
</template>

<script lang="ts">
import axios from "axios"
import { mapState, mapMutations, mapGetters, mapActions } from "vuex"
import firstDish from "./firstDish"
export default {
  name: "FormDish",
  data() {
    return {
      dishesList: [],
    }
  },
  methods: {
    onSubmit: function() {
      let idek = this.$route.params.id
      console.log(this.dishData._id)
      if (idek == null) {
        let link = "https://apifitvue.ew.r.appspot.com/dishes/"
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
          "https://apifitvue.ew.r.appspot.com/dishes/" + idek
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
      type: Array,
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
