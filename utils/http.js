/*
import http from './http'
http.config.baseUrl = "http://localhost:8080/api/"
http.get('user/list', {status: 1}).then((res)=>{console.log(JSON.stringify(res))})
http.post('user', {id:1, status: 1}).then((res)=>{console.log(JSON.stringify(res))})
http.put('user/1', {status: 2}).then((res)=>{console.log(JSON.stringify(res))})
http.delete('user/1').then((res)=>{console.log(JSON.stringify(res))}) 
*/
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
		let baseUrl = "http://139.224.13.75:8080/airReport/"; //请求基本地址
		options = options || {};
		options.url = baseUrl + options.url;
		/*
		_token  数据签名
		*/
		/*
		 * Promise  then 成功调用 catch 失败调用  
		 */
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
	get(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		options = options || {};
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
};
