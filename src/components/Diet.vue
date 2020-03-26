<template>
	<div class="hello">
		<b-table striped hover :items="meals"></b-table>

		<!--- SECOND TABLE-->
		<b-table-simple hover small caption-top responsive>
			<colgroup>
				<col />
				<col />
			</colgroup>
			<colgroup>
				<col />
				<col />
				<col />
			</colgroup>
			<colgroup>
				<col />
				<col />
			</colgroup>
			<b-thead head-variant="dark">
				<b-tr>
					<b-th>Dish</b-th>
					<b-th>Meal</b-th>
					<b-th>B</b-th>
					<b-th>W</b-th>
					<b-th>T</b-th>
					<b-th>kcal</b-th>
					<b-th>grams</b-th>
				</b-tr>
			</b-thead>
			<b-tbody>
				<b-tr>
					<b-th rowspan="3">Belgium</b-th>
					<b-th class="text-right">Antwerp</b-th>
					<b-td>56</b-td>
					<b-td>22</b-td>
					<b-td>43</b-td>
					<b-td variant="success">72</b-td>
					<b-td>23</b-td>
				</b-tr>
				<b-tr>
					<b-th class="text-right">Gent</b-th>
					<b-td>46</b-td>
					<b-td variant="warning">18</b-td>
					<b-td>50</b-td>
					<b-td>61</b-td>
					<b-td variant="danger">15</b-td>
				</b-tr>
				<b-tr>
					<b-th class="text-right">Brussels</b-th>
					<b-td>51</b-td>
					<b-td>27</b-td>
					<b-td>38</b-td>
					<b-td>69</b-td>
					<b-td>28</b-td>
				</b-tr>
				<b-tr>
					<b-th rowspan="2">The Netherlands</b-th>
					<b-th class="text-right">Amsterdam</b-th>
					<b-td variant="success">89</b-td>
					<b-td>34</b-td>
					<b-td>69</b-td>
					<b-td>85</b-td>
					<b-td>38</b-td>
				</b-tr>
				<b-tr>
					<b-th class="text-right">Utrecht</b-th>
					<b-td>80</b-td>
					<b-td variant="danger">12</b-td>
					<b-td>43</b-td>
					<b-td>36</b-td>
					<b-td variant="warning">19</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>
		<!-- -->
	</div>
</template>

<script lang="ts">
import axios from "axios"
import router from "vue-router"
export default {
	name: "Diet",
	data: function() {
		return {
			//userData: [],
			dishesList: [],
			meals: [
				{ name: "Breakfest" },
				{ name: "Lunch" },
				{ name: "Dinner" },
				{ name: "Supper" },
			],
			//userID: this.$route.params.id,
		}
	},
	methods: {
		loadData() {
			axios({
				method: "get",
				url: "https://jsonbox.io/box_c6b9b4b43ad746f983b6/",
			})
				.then(response => {
					this.dishesList = [...response.data]
					console.log(this.dishesList)
					//this.saveData()]
				})
				.catch(err => {
					// Manage the state of the application if the request
					// has failed
				})
		},
	},
	mounted() {
		this.loadData() // Load Dishes
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
