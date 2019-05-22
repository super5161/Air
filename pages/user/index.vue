<template>
	<view>
		<view>当前登录用户:{{this.$store.state.userId}}</view>
		<button style="width: 50%;margin-top: 100upx;" type="warn" @click="LoginOut">退出登录</button>
		<page-foot tab="3"></page-foot>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {

			}
		},
		onReady() {
			that = this;
		},
		methods: {
			LoginOut: function() {
				uni.showModal({
					title: '提示',
					content: '您确定要退当前用户吗？',
					success: function(res) {
						if (res.confirm) {
							that.$store.commit("logout");
							uni.navigateTo({
								url: "../login/login"
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
</style>
