<template>
	<view>
		<view class="area">
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.monthUrl" open-type="navigate">
					<view class="iconfont tmonth"></view>
					<text>每月空气指数</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.quarterUrl" open-type="navigate">
					<view class="iconfont line"></view>
					<text>每季空气指数</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.yearUrl" open-type="navigate">
					<view class="iconfont tyear"></view>
					<text>每年空气指数</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageUrl: {
					monthUrl: '',
					quarterUrl: '',
					yearUrl: '',
				}
			}
		},
		onReady() {
			this.pageUrl.monthUrl = "/pages/report/dayitem/dayitem01";
			this.pageUrl.quarterUrl = "/pages/report/dayitem/dayitem21";
			this.pageUrl.yearUrl = "/pages/report/dayitem/dayitem31";
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
