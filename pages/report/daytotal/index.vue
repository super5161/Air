<template>
	<view>
		<view class="area">
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.monthUrl" open-type="navigate">
					<view class="iconfont tmonth"></view>
					<text>每月空气统计</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.quarterUrl" open-type="navigate">
					<view class="iconfont line"></view>
					<text>每季空气统计</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.yearUrl" open-type="navigate">
					<view class="iconfont tyear"></view>
					<text>每年空气统计</text>
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
			//1 市 2 区 3 学校
			// var level = this.$store.state.userInfo.orgLevel;
			// if (level === 1) {
			this.pageUrl.monthUrl = "/pages/report/daytotal/daytotal01";
			this.pageUrl.quarterUrl = "/pages/report/daytotal/daytotal21";
			this.pageUrl.yearUrl = "/pages/report/daytotal/daytotal31";
			// } else if (level === 2) {
			// 	this.pageUrl.monthUrl = "/pages/report/daytotal/daytotal02";
			// 	this.pageUrl.quarterUrl = "/pages/report/daytotal/daytotal22";
			// 	this.pageUrl.yearUrl = "/pages/report/daytotal/daytotal32";
			// } else {
			// 	this.pageUrl.monthUrl = "/pages/report/daytotal/daytotal03";
			// 	this.pageUrl.quarterUrl = "/pages/report/daytotal/daytotal23";
			// 	this.pageUrl.yearUrl = "/pages/report/daytotal/daytotal33";
			// }
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
