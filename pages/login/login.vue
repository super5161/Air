<template>
	<view class="content">
		<view class="logo-content">
			<image class="logo" src="/static/image/log.png"></image>
			<view class="logo-text">{{res.sysName}}</view>
		</view>
		<view class="form-content">
			<view class="input-group">
				<label for="username">{{res.lblUserName}}</label>
				<input name="username" type="text" v-model="username" maxlength="10" :placeholder='res.placUserName' />
			</view>
			<view class="input-group">
				<label for="password" v-html="res.lblPassword"></label>
				<input name="password" v-model="password" maxlength="10" password="true" type="text" :placeholder='res.placPassword' />
			</view>
			<view class="input-group">
				<label v-html="res.lblLange"></label>
				<text @click="ChangeLange">{{langText}}</text>
			</view>
			<button type="primary" @click="Login">登录</button>
		</view>
		<view class="version" :style="versionTop">Copyright © 1996-2020 轶伦.版权所有 ver 1.0</view>
	</view>
</template>
<script>
	var that;
	var langs = [{
		key: "zh-CN",
		text: "中文简体"
	}, {
		key: "zh-Tw",
		text: "中文繁体"
	}, {
		key: "en-US",
		text: "English"
	}];

	var langKeys;
	var langText;

	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				username: '',
				password: '',
				versionTop: '',
				langText: '中文简体',
				langKey: "",
			}
		},
		computed: {
			res() {
				return this.$t('res.login');
			}
		},
		onLoad: function() {
			that = this;
			langKeys = langs.map(function(l) {
				return l.key;
			});
			langText = langs.map(function(l) {
				return l.text;
			});
		},
		onReady: function() {

		},
		methods: {
			Login: function() {
				var uId = that.username.trim();
				var pwd = that.password.trim();
				if (uId.length == 0) {
					uni.showToast({
						title: "用户名必须填写",
						icon: "none"
					})
					return;
				}

				if (pwd.length == 0) {
					uni.showToast({
						title: "密码必须填写",
						icon: "none"
					})
					return;
				}
				that.http.post("data/person/login", {
					fuserno: uId,
					fpassword: pwd,
				}).then(function(e) {
					if (e.data.code === 200) {
						var data = {
							userId: uId,
							userName: e.data.data.fusername,
							orgNo: e.data.data.fsiteNo,
							orgName: e.data.data.fsiteName,
							orgLevel: e.data.data.fsiteLevel
						};
						that.login(data);
						uni.redirectTo({
							url: "/pages/index/index"
						})
					} else {
						that.util.showToast(e.data.msg)
					}
				}).catch(function(e){
					that.util.showToast("服务器响应超时")
				});
			},
			//切换语言
			ChangeLange: function() {
				uni.showActionSheet({
					itemList: langText,
					success: function(res) {
						that.langText = langText[res.tapIndex];
						that.langKeys = langKeys[res.tapIndex];
						that.$i18n.locale = that.langKeys;
					}
				});
			},
			...mapMutations(['login'])
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 100%;
		overflow: hidden;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 40upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 180upx;
	}

	.logo-text {
		font-size: 50upx;
		color: #365fff;
		text-shadow: 1px 1px 1px #36bbff;
	}

	.form-content {
		margin-top: 80upx;
	}

	input {
		border-bottom: 2upx #dedede solid;
		display: inline-block;
		text-align: left;
		padding-left: 5upx;
	}

	label {
		line-height: 32upx;
		padding-right: 20upx;
	}

	button {
		width: 80%;
		margin-top: 100upx;
		border-radius: 50upx;
		font-size: 16px;
		color: #fff;
		background: linear-gradient(to right, #365fff, #36bbff);
	}

	.version {
		text-align: center;
		height: 30px;
		width: 100%;
		padding: 10upx 0;
		margin-bottom: 10upx;
		font-size: 22upx;
		margin-top: 150upx;
	}
</style>
