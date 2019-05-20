/*
*ajax 文件上传
* import {upload} from './utils/ajax.js' 引入
*/
"use strict";
const uploadFile = opt => {
	opt = opt || {};
	opt.url = opt.url || '';
	opt.filePath = opt.filePath || null;   
	opt.name = opt.name || null; 
	opt.filePath = opt.filePath || null;
	opt.success = opt.success || function() {};
	uni.uploadFile({
		url: ApiUrl + opt.url,
		filePath: opt.filePath,
		name: opt.name,
		success: function(res) {
			opt.success(res);
		},
		fail: function() {
			uni.showToast({
				title: '请稍后重试'
			});
		}
	})
}


export {
	uploadFile
}