<template>
	<div>
		<b-tabs content-class="mt-3">
			<b-tab title="Dishes" active>
				<dishes />
			</b-tab>
			<b-tab title="Meals">
				<Meals />
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import Dishes from "@/components/Dishes.vue"
import Meals from "@/components/Meals.vue"

export default {
	components: {
		Dishes,
		Meals,
	},
}
</script>

<style></style>
