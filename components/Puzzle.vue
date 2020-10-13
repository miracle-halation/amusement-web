<template>
	<v-container>
		<h1>{{puzzle.name}}</h1>
		<div class="image">
			{{puzzle.image}}
		</div>
	</v-container>
</template>

<script>
import axios from "@/plugins/axios"

export default {
	data(){
		return{
			puzzle: []
		}
	},
	mounted(){
		axios.get(`/v1/puzzles/${this.$nuxt.$route.params.id}`).then((response) => this.puzzle = response.data)
	}
}
</script>

<style>

.image{
	width: 200px;
	height: 200px;
}

</style>