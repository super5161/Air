<template>
	<view>
		<view class="area">
			<view class="item">
				<navigator hover-class="none" url="/pages/report/timedata/timedata01" open-type="navigate">
					<view class="iconfont line"></view>
					<text>室外空气</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" url="/pages/report/timedata/timedata21" open-type="navigate">
					<view class="iconfont line"></view>
					<text>室内空气</text>
				</navigator>
			</view>
			<view class="item">
				<navigator hover-class="none" url="/pages/report/timedata/timedata31" open-type="navigate">
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
				
			}
		},
		methods: {
			
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
