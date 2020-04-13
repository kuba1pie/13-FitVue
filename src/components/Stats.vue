<template>
  <div class="stats">
    <h1>Stats component</h1>
    <p>{{ msg }}</p>
    <b-table striped hover :fields="fields" :items="formularze"></b-table>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex"
export default {
  name: "Stats",
  data() {
    return {
      msg: "",
      fields: [
        "name",
        "lastname",
        "weight",
        "height",
        {
          key: "birthYear",
          label: "Calculated BMI",
          formatter: (value, key, item) => {
            return Number(
              (item.weight / (item.height / 100) / (item.height / 100)).toFixed(
                1
              )
            )
          },
        },
      ],
    }
  },
  computed: {
    ...mapGetters(["countLinks"]),
    ...mapState([
      "title",
      "formularze",
      "forms",
      " forms: state => state.forms.all",
    ]),
  },
  methods: {
    ...mapMutations(["ADD_FORM"]),
  },
  props: {
    form: {
      type: Object,
    },
  },
}
</script>

<style scoped lang="sass">
.stats
	background-color: #4444
</style>
