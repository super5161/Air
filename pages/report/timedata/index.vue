<template>
	<view>
		<view class="area">
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.outdoorUrl" open-type="navigate">
					<view class="iconfont line"></view>
					<text>室外空气</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.indoorUrl" open-type="navigate">
					<view class="iconfont line"></view>
					<text>室内空气</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" :url="pageUrl.airDdeviceUrl" open-type="navigate">
					<view class="iconfont line"></view>
					<text>空气狗</text>
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
					outdoorUrl: '',
					indoorUrl: '/pages/report/timedata/timedata21',
					airDdeviceUrl: '/pages/report/timedata/timedata31'
				}
			}
		},
		onReady() {
			//1 市 2 区 3 学校
			var level = this.$store.state.userInfo.orgLevel;
			if (level === 1) {
				this.pageUrl.outdoorUrl = "/pages/report/timedata/timedata01";

			} else if (level === 2) {
				this.pageUrl.outdoorUrl = "/pages/report/timedata/timedata02";
			} else {
				this.pageUrl.outdoorUrl = "/pages/report/timedata/timedata03";
			}
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
