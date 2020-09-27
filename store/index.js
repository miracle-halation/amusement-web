import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
	return new Vuex.store({
		state: {
			currentUser: nil
		},
		mutations: {
			setUser(state, payload){
				state.currentUser = payload
			},
		},
		actions:{
		}
	})
}

export default store