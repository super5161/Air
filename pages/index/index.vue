<template>
	<view class="content">
		<view class="banner">
			<swiper class="swiper" indicator-color="#DEDEDE" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration">
				<swiper-item>
					<image src="/static/image/swiper/1.jpg" mode="scaleToFill" lazy-load="true"></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/image/swiper/2.jpg" mode="scaleToFill" lazy-load="true"></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/image/swiper/1.jpg" mode="scaleToFill" lazy-load="true"></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/image/swiper/2.jpg" mode="scaleToFill" lazy-load="true"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="area">
			<view class="item">
				<navigator hover-class="none" url="/pages/report/timedata/index" open-type="navigate">
					<view class="iconfont shishishipinjiankong"></view>
					<text>实时监控</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" url="/pages/report/hourdata/hourdata" open-type="navigate">
					<view class="iconfont yuejie"></view>
					<text>每日空气</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" url="/pages/report/mondata/mondata" open-type="navigate">
					<view class="iconfont tmonth"></view>
					<text>每月空气</text>
				</navigator>
			</view>
		</view>
		
		<view class="area">
			<view class="item other">
				<navigator hover-class="none" url="/pages/report/daydata/index" open-type="navigate">
					<view class="iconfont pie"></view>
					<text>空气质量</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" url="/pages/report/daytotal/index" open-type="navigate">
					<view class="iconfont line"></view>
					<text>空气统计</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" url="/pages/report/dayitem/index" open-type="navigate">
					<view class="iconfont kongqizhiliangjianceshujufenxi"></view>
					<text>空气指数</text>
				</navigator>
			</view>		
		</view>
		
		<page-foot tab="0"></page-foot>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				indicatorDots: true, 
				autoplay: true, 
				interval: 2000, 
				duration: 800 
			}
		},
		onLoad: function() {
			that = this;
			//console.log(this.$store.state.hasLogin)
		},
		onReady: function() {
			//console.log(that.http)
			// that.http.get('https://www.baidu.com/', null).then(function(taget,res) {
			// 	console.log("成功")
			// }).catch(function(taget,res) {
			// 	console.log("失败")
			// });
		}
	}
</script>

<style>
	.iconfont {
		margin: 10upx auto;
		font-size: 50upx;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.swiper {
		height: 400upx;
	}

	.banner {
		width: 100%;
	}
</style>
