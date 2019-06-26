<!--引导页-->
<template>
	<view class="content">
		<swiper class="swiper" :autoplay="autoplay" :duration="duration" circular=false>
			<swiper-item>
				<image class="sw-image" src="../../static/image/guide/1.jpg"></image>
				<view class="sw-title">
					可视化数据
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<image class="sw-image" src="../../static/image/guide/2.jpg"></image>
				<view class="sw-title">
					大数据展示
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<image class="sw-image" src="../../static/image/guide/3.jpg"></image>
				<view class="sw-title">
					多维度展示
				</view>
				<view class="experience" @tap="launchFlag()">{{experience}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>file:///C:/Users/Administrator/Desktop/2.jpg

<script>
	export default {
		data() {
			return {
				autoplay: true,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验'
			}
		},
		methods: {
			launchFlag: function() {
				uni.setStorage({
					key: 'launchFlag',
					data: true,
				});
				uni.reLaunch({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>
<style>
	page,
	.content {
		width: 100%;
		height: 100%;
		background-size: 100% auto;
		padding: 0;
		background: #FFFFFF;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.sw-image {
		width: 100%;
		height: 100%;
	}

	.sw-title {
		color: #FFFFFF;
		position: fixed;
		bottom: 300upx;
		left: 50%;
		transform: translateX(-50%);
		font-size: 50upx;
	}

	.jump-over,
	.experience {
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		font-size: 32upx;
		color: #454343;
		border: 1px solid #FFFFFF;
		z-index: 999;
	}

	.jump-over {
		right: 50upx;
		top: 100upx;
		color: #FFFFFF;
	}

	.experience {
		right: 50%;
		margin-right: -105upx;
		color: #FFFFFF;
		bottom: 150upx;
	}
</style>
