<template>
	<view>
		<view class="head">
			<view class="user-fa">
				<view class="warpper">
					<img src="../../static/image/fa.jpg"></img>
				</view>
			</view>
			<view class="user-info">
				<view class="title">{{userInfo.userName}}</view>
				<view class="desc">ID:{{userInfo.userId}}</view>
				<view class="desc">{{userInfo.orgName}}</view>
			</view>
		</view>
		<button style="width: 50%;margin-top: 100upx;" type="warn" @click="LoginOut">退出登录</button>
		<page-foot tab="3"></page-foot>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';

	var that;
	export default {
		data() {
			return {

			}
		},
		onReady() {
			that = this;
		},
		computed: mapState(['hasLogin', 'userInfo']),
		methods: {
			LoginOut: function() {
				uni.showModal({
					title: '提示',
					content: '您确定要退当前用户吗？',
					success: function(res) {
						if (res.confirm) {
							//that.$store.commit("logout");
							uni.reLaunch({
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
	.head {
		width: 100%;
		height: 400upx;
		background-color: #336e7b;
		color: #FFFFFF;
	}

	.user-fa {
		float: left;
		height: 400upx;
		width: 250upx;
	}

	.user-fa .warpper {
		width: 200upx;
		height: 200upx;
		margin: 0 30upx;
		margin-top: 200upx;
		transform: translateY(-100upx);
		border-radius: 50%;

	}

	.user-fa .warpper img {
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}

	.user-info {
		padding-top: 100upx;
		margin-left: 260upx;
	}

	.user-info .title {
		font-size: 25px;
	}

	.user-info .desc {
		font-size: 16px;
	}
</style>
