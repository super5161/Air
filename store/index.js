/*
*
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userId:'',
	},
	mutations: {
		login(state,userId) {
			state.hasLogin = true;
			state.userId=userId;
		},
		logout(state) {
			state.hasLogin = false
			state.userId='';
		},
	},
	actions: {
		
		// lazy loading openid
		// getUserOpenId: async function ({
		// 	commit,
		// 	state
		// }) {
		// 	return await new Promise((resolve, reject) => {
		// 		if (state.openid) {
		// 			resolve(state.openid)
		// 		} else {
		// 			uni.login({
		// 				success: (data) => {
		// 					commit('login')
		// 					setTimeout(function () { 
		// 						const openid = '123456789'
		// 						console.log('uni.request mock openid[' + openid + ']');
		// 						commit('setOpenid', openid)
		// 						resolve(openid)
		// 					}, 1000)
		// 				},
		// 				fail: (err) => {
		// 					console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
		// 					reject(err)
		// 				}
		// 			})
		// 		}
		// 	})
		// }
	}
})

export default store