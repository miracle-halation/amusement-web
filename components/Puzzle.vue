<template>
	<v-container>
		<v-row>
      <v-col
        cols="6"
        md="4"
				class="puzzle"
      >
        <h1>{{puzzle.name}}</h1>
				<div class="image">
					{{puzzle.image}}
				</div>
      </v-col>
    </v-row>
		<v-container class="grey lighten-5">
			<v-row>
				<v-col>
					.col
				</v-col>
			</v-row>
		</v-container>
		<v-container>
			<form>
				<div  class="field">
				</div>
				<v-btn color="primary" class="answer">
					送信
				</v-btn>
			</form>
		</v-container>
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

.puzzle{
	position: absolute;
	left: 450px;
	bottom: 800px;
	text-align: center;
}

.lighten-5{
	position: absolute;
	bottom: 700px;
	width: 100vw;
}

.image{
	width: 200px;
	height: 200px;
}

.field{
	background-color: white;
	height: 500px;
	position: relative;
	top: 200px;
}

.answer{
	position: relative;
	top: 200px;
	left: 1075px;
}

</style>