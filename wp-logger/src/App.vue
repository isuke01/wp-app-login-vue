<template>
	<div id="app">
		
			<button  style="margin: 15px 0; background-color: indigo; color: #fff; cursor: pointer; padding: 10px 15px;" @click="checkLoginStatus">TEST VALIDATION</button>	
			<div> Token is needed to user this button</div>
			<hr />

		<div v-if="getStore.isUserLogged">
			<label style="display: block">
				<span>Post Title: </span>
				<input v-model="postTitle" type="text" id="posttitle" />
			</label>
			<button style="margin: 15px 0; background-color: royalblue; color: #fff; cursor: pointer; padding: 10px 15px;" @click="testPost">TEST ADD POST</button>	
			<hr />
		</div>
		<div v-else style="padding: 15px; margin: 15px;">Add post will be avaible after user is logged in</div>
		

		<form v-if="!getStore.isUserLogged" v-on:submit.prevent>
			<label style="display: block">
				<span>Username: </span>
				<input v-model="user.username" type="text" id="username" />
			</label>
			<label v-if="!isResetPassword" style="display: block">
				<span>Password: </span>
				<input v-model="user.password" type="password" id="password" />
			</label>
			<label v-if="!isResetPassword" style="display: block">
				<span>Remember me: </span>
				<input v-model="user.remember" type="checkbox" id="remember" />
			</label>

			<div style="margin: 15px 0;">
				<p v-if="!isResetPassword" >Psssst man ... did you forget your password? <a @click="swapForm" style="color: royalblue;">CLICK ME!</a></p>
				<p v-else>Neee, just kidding, back me to login form :D <a @click="swapForm" style="color: royalblue;">CLICK ME!</a></p>
			</div>

			<button  style="margin: 15px 0; background-color: red; color: #fff; cursor: pointer; padding: 10px 15px;" type="submit"
			@click="logMeIn"
			v-html="(isResetPassword)? 'RESET PASSWORD': 'LOG IN'"
			>
			</button>	
		</form>

		
		<form v-if="getStore.isUserLogged" v-on:submit.prevent>
			<button  style="margin: 15px 0; background-color: red; color: #fff; cursor: pointer; padding: 10px 15px;" type="submit" @click="userLogout">LOGOUT</button>	
		</form>

		<hr />

		<h3 style="color: red">DEBUG:</h3>
		<pre v-html="debug">DEBUG</pre>	
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'app',
	data(){
		return {
			postTitle: "TEST 01",
			isResetPassword: false,
			user: {
				password: 'adam',
				username: 'adam',
				remember: false,
			}
		}
	},
	components: {
		HelloWorld
	},
	mounted(){
		this.checkLoginStatus();
	},
	computed:{
		...mapGetters([
			'getStore'
		]),
		debug(){
			return this.getStore;
		}
	},
	methods:{
		...mapActions([
			'loginUserAction',
			'resetPasswordRequest',
			'userLogout',
			'checkLoginStatus',
			'testPost'
		]),
		swapForm() {this.isResetPassword = !this.isResetPassword},
		logMeIn(){
			if(this.isResetPassword) this.resetPasswordRequest(this.user)
			else this.loginUserAction(this.user)
		}
	}
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';
</style>
