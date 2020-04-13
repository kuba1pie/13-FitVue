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
					console.log(response)
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
}
</script>
