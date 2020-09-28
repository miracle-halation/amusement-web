<template>
	<v-row>
		<v-col cols="12" md="4">
			<h2>Login</h2>
			<form>
				<v-text-field v-model="email" :counter="20" label="email" data-vv-name="email" required></v-text-field>
				<v-text-field
					v-model="password"
					label="password"
					data-vv-name="password"
					required
					:type="show ? 'text' : 'password'"
					:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
					@click:append="show = !show"
				></v-text-field>
				<v-btn class="mr-4" @click="login">submit</v-btn>
				<p v-if="error" class="errors">{{error}}</p>
			</form>
		</v-col>
	</v-row>
</template>

<script>
	import firebase from "@/plugins/firebase";

	export default {
		data(){
			return {
				email: "",
				password: "",
				show: false,
				error: ""
			};
		},
		methods: {
			login(){
				this.$store.commit("setLoading", true);
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(() => {
						this.$store.commit("setLoading", false);
						this.$router.push("/admin")
					})
					.catch(error => {
						console.log(error);
						this.error = (code => {
							switch (code){
							case "auth/user-not-found":
								return "メールアドレスが間違っています";
							case "auth/wrong-password":
								return "*パスワードが正しくありません";
							default:
								return "*メールアドレスとパスワードをご確認ください"
							}
						})(error.code);
					});
			}
		}
	};
</script>

<style scoped>
	.errors{
		color: red;
		margin-top: 20px;
	}
</style>
