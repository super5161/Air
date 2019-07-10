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
			<view class="item item1">
				<navigator hover-class="none" url="/pages/report/timedata/index" open-type="navigate">
					<view class="iconfont shishishipinjiankong"></view>
					<text>实时监控</text>
				</navigator>
			</view>
			<view class="item item2">
				<navigator hover-class="none" :url="pageUrl.hourdata" open-type="navigate">
					<view class="iconfont yuejie"></view>
					<text>每日空气</text>
				</navigator>
			</view>
			<view class="item item3">
				<navigator hover-class="none" :url="pageUrl.mondata" open-type="navigate">
					<view class="iconfont tmonth"></view>
					<text>每月空气</text>
				</navigator>
			</view>
		</view>
		<view class="area">
			<view class="item item4">
				<navigator hover-class="none" url="/pages/report/daydata/index" open-type="navigate">
					<view class="iconfont pie"></view>
					<text>空气质量</text>
				</navigator>
			</view>
			<view class="item item5">
				<navigator hover-class="none" url="/pages/report/daytotal/index" open-type="navigate">
					<view class="iconfont line"></view>
					<text>空气统计</text>
				</navigator>
			</view>
			<view class="item item6">
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
				duration: 800,
				pageUrl: {
					hourdata: "",
					mondata: "",
				},
			}
		},
		onReady: function() {
			//1 市 2 区 3 学校
			var level = this.$store.state.userInfo.orgLevel;
			if (level === 1) {
				this.pageUrl.hourdata = "/pages/report/hourdata/hourdata";
				this.pageUrl.mondata = "/pages/report/mondata/mondata";
			} else if (level === 2) {
				this.pageUrl.hourdata = "/pages/report/hourdata/hourdata02";
				this.pageUrl.mondata = "/pages/report/mondata/mondata02";
			} else {
				this.pageUrl.hourdata = "/pages/report/hourdata/hourdata03";
				this.pageUrl.mondata = "/pages/report/mondata/mondata03";
			}
		}
	}
</script>

<style>
	.iconfont {
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

	.item1 {
		background-color: #3b4446;
	}

	.item2 {
		background-color: #002147;
	}

	.item3 {
		background-color: #abb8af;
	}

	.item4 {
		background-color: #ff7900;
	}

	.item5 {
		background-color: #057855;
	}

	.item6 {
		background-color: #766a65;
	}
</style>
