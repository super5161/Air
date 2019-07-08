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
				orgLevel: provider.orgLevel, //组织层级
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
	actions: {}
})

export default store
