<template>
	<div>
		<ul class="test-list" v-for="todo in todosList" :key="todo.id">
			<li class="test-list--item">
				{{ todo.title }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			todosList: [],
		}
	},
	mounted() {
		axios
			.get("https://jsonbox.io/box_d2944147cb0e6fdb71df")
			.then(response => {
				//console.log(response)
				this.todosList = [...response.data].slice(0, 5)
				console.log(todosList)
			})
			.catch(err => {
				// Manage the state of the application if the request
				// has failed
			})
	},
}
</script>
<style>
.test-list {
	font-family: Roboto;
	list-style: none;
	margin: 20px auto;
	width: 50%;
}

.test-list--item {
	border: 1px solid rgb(41, 41, 41);
	border-radius: 5px;
	text-align: center;
	display: block;
	box-shadow: 2px 2px rgba(138, 124, 124, 0.4);
}

.test-list--id {
	font-weight: 300;
	margin: 10px auto;
}

.test-list--title {
	font-weight: 500;
	margin: 20px auto;
	text-transform: capitalize;
}

.test-list--complete {
	font-weight: 600;
	margin: 10px auto;
	color: #56ca86;
}

.test-list--incomplete {
	font-weight: 600;
	margin: 10px auto;
	color: #ca5656;
}
</style>
