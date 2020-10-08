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
						<h2>タングラム</h2>
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

				<v-list>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
					>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-row>
	</v-container>
</template>

<script>
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
			}
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