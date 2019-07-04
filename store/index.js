import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false, //是否登录
		userInfo: {}, //用户信息
	},
	mutations: {
		//用户登录
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = {
				userId: provider.userId,
				userName: provider.userName,
				orgNo: provider.orgNo,
				orgName: provider.orgName,
				orgLevel: provider.orgLevel,
			};
			//保存到本地
			uni.setStorage({
				key: 'userInfo',
				data: provider
			})
		}, //用户退出
		logout(state) {
			state.hasLogin = false
			state.userInfo = {}
			uni.removeStorage({
				key: 'userInfo'
			})
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
