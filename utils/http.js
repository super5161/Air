"use strict";
export default {
	/*基本配置*/
	config: {
		url: '',
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: "GET",
		dataType: "json",
		responseType: "text",
	},

	//基础请求方式
	request(options) {
		options = options || {};
		options.url = options.baseUrl + options.url;
		return new Promise((resolve, reject) => {
			let _config = Object.assign({}, this.config, options);
			_config.requestId = new Date().getTime();
			_config.success = function(res) {
				resolve(res)
			};
			_config.fail = function(res) {
				reject(res);
			};
			uni.request(_config);
		});
	},
	
	/*
	* get 请求
	*/
	get(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	/*
	* post 请求
	*/
	post(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	/*
	* put 请求
	*/
	put(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	/*
	* delete 请求
	*/
	delete(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
};
