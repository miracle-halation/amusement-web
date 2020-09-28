<template>
	<v-container>
		<div v-if="user">
			<p>{{user.name}}</p>
			<v-btn @click="logOut">ログアウト</v-btn>
		</div>
		<v-row>
			<v-col>
				<v-card
					class="mx-auto"
					max-width="344"
				>
					<v-card-text>
						<p class="display-1 text--primary">
							ラッキーパズル
						</p>
					</v-card-text>
					<v-card-actions>
						<v-btn text color="orange">
							編集する
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>

			<v-col>
				<v-card
					class="mx-auto"
					max-width="344"
				>
					<v-card-text>
						<p class="display-1 text--primary">
							お買い物ゲーム
						</p>
					</v-card-text>
					<v-card-actions>
						<v-btn text color="orange">
							編集する
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>

			<v-col>
				<v-card
					class="mx-auto"
					max-width="344"
				>
					<v-card-text>
						<p class="display-1 text--primary">
							漢字クイズ
						</p>
					</v-card-text>
					<v-card-actions>
						<v-btn text color="orange">
							編集する
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>

			<v-col>
				<v-card
					class="mx-auto"
					max-width="344"
				>
					<v-card-text>
						<p class="display-1 text--primary">
							都道府県クイズ
						</p>
					</v-card-text>
					<v-card-actions>
						<v-btn text color="orange">
							編集する
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>

		</v-row>
	</v-container>
</template>

<script>
	import firebase from "@/plugins/firebase";

	export default {
		components:{
		},
		computed: {
			user(){
				return this.$store.state.currentUser;
			}
		},
		data(){
			return {
			}
		},
		methods:{
			logOut() {
				firebase
					.auth()
					.signOut()
					.then(() => {
						this.$store.commit("setUser", null);
						this.$router.push("/login");
					})
					.catch(error => {
						console.log(error);
					});
			}
		},
		middleware: 'authenticated'
	}
</script>