<template>
	<v-container>
		<h1 class="title">ラッキーパズル</h1>
		<v-row
			class="d-flex"
			justify="center"
		>
			<v-menu
				v-model="showMenu"
				absolute
				offset-y
				style="max-width: 600px"
			>
				<template v-slot:activator="{ on, attrs }">
					<div class="puzzles">
						<h2 v-for="shape in shapes">{{shape.name}}</h2>
						<v-card
							class="portrait"
							:img="require('@/assets/tangram.png')"
							height="300"
							width="300"
							v-bind="attrs"
							v-on="on"
						></v-card>
					</div>
				</template>
				<v-list v-for="(shape, index) in shapes" :key="index">
					<v-list-item
						v-for="(puzzle, index) in shape.puzzles"
						:key="index"
					>
						<v-list-item-title>{{ puzzle.name }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-row>
	</v-container>
</template>

<script>
	import axios from "@/plugins/axios"

	export default{
		data(){
			return {
				showMenu: false,
				items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
				],
				shapes: [],
			}
		},
		mounted(){
		 axios.get(`/v1/puzzles`).then((response) => this.shapes = response.data)
		}
	}
</script>

<style>
	.title{
		color: black;
		text-align: center;
		padding-bottom: 300px;
	}

</style>