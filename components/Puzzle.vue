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
					<div class="pieces">
						<div v-for="piece in pieces" :key="piece.id" class="piece" v-drag>
							<div :class="piece.name">
							</div>
						</div>
					</div>
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
		<div class="piece-bar">
			<v-toolbar
				dark
				prominent
				src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
			>
				<v-toolbar-title>ピースを操作してください</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn icon>
					<i class="mdi mdi-face" />
				</v-btn>
			</v-toolbar>
		</div>
	</v-container>
</template>

<script>
import drag from '@branu-jp/v-drag'
import axios from "@/plugins/axios"

export default {
	directives: {
    drag
  },
	data(){
		return{
			puzzle: [],
			pieces:[
				{id: 1, name:"small-triangle"},
				{id: 2, name:"middle-triangle"},
				{id: 3, name:"under-middle-triangle"},
				{id: 4, name:"large-triangle"},
				{id: 5, name:"top-large-triangle"},
				{id: 6, name:"square"},
				{id: 7, name:"parallelogram"}
			]
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
	bottom: 600px;
	width: 100vw;
}

.image{
	width: 200px;
	height: 200px;
}

.field{
	background-color: white;
	height: 500px;
	margin-top: 500px;
}

.answer{
	float: right;
}

.piece{
	position: relative;
	float: left;
}

.small-triangle{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 75px 0 75px 75px;
	border-color: transparent transparent transparent #007bff;
}

.middle-triangle{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 150px 150px 0 0;
	border-color: #007bff transparent transparent transparent;
}

.under-middle-triangle{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 75px 75px 0 75px;
	border-color: #007bff transparent transparent transparent;
}

.large-triangle{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 150px 150px 150px 0;
	border-color: transparent #007bff transparent transparent;
}

.top-large-triangle{
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 150px 150px 150px;
	border-color: transparent transparent #007bff transparent;
}

.square{
  width        : 105px;
  height       : 105px;
  background   : #007bff;
  transform    : rotate(45deg);
}

.parallelogram{
  margin       : auto;
  width        : 120px;
  height       : 55px;
  transform    : rotate(90deg);
}

.parallelogram::after{
	content      : "";
  top          : 0;
  left         : 0;
  position     : absolute;
  width        : 150px;
  height       : 75px;
  background   : #007bff;
  transform    : skewX(45deg);
}

.piece-bar{
	position: relative;
	top: 50px;
}

</style>