"use strict";

export default {
	/*缓存key*/
	_storageKey: 'sys_storage_key',
	/*默认配置*/
	_default: {
		updateServer: 'http://139.224.13.75:8080/', //服务器地址
		updateService: "smartPhone/getAppVersionInfo", //检测方法
		apiUrl: 'http://139.224.13.75:8080/', //api 地址
		sysVersion: '2.0.1', //当前系统版本
		appId: '03', //01：空气，02：SMART，03：维护
	},
	/*获取默认*/
	getDefault: function() {
		this.setSysInfo(); //缓存默认
		return this._default;
	},
	/*获取系统信息*/
	getSysInfo: function() {
		try {
			let sys = uni.getStorageSync(this._storageKey);
			if (sys == null || sys === '') sys = this.getDefault();
			return sys;
		} catch (e) {}
	},
	/*设置服务器*/
	setServerUrl: function(serverUrl) {
		let sys = this.getSysInfo();
		sys = sys || {};
		sys.serverUrl = serverUrl;
		this.setSysInfo(sys);
	},
	/*设置api 地址*/
	setApiUrl:function(apiUrl){
		let sys = this.getSysInfo();
		sys = sys || {};
		sys.apiUrl = apiUrl;
		this.setSysInfo(sys);
	},
	/*设置系统信息*/
	setSysInfo: function(opt) {
		try {
			opt = opt || {};
			let opts = Object.assign({}, this._default, opt);
			uni.setStorageSync(this._storageKey, opts);
		} catch (e) {
			// error
		}
	},
	/*移除缓存*/
	removeSysImfo: function() {
		try {
			uni.removeStorageSync(this._storageKey);
		} catch (e) {
			// error
		}
	},
}