<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt" @click="goDetail(1001,'AQI报警')">
			<view class="uni-card">
				<view class="uni-card-header">AQI报警</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						2019/5/5 17:00:00 AQI异常
					</view>
				</view>
			</view>
		</view>
		
		<view class="uni-padding-wrap uni-common-mt" @click="goDetail(1002,'AQI报警')">
			<view class="uni-card">
				<view class="uni-card-header">AQI报警</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						2019/5/5 17:05:00 AQI异常
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				data: [],
				fNoticeID: [],
				fNoticeTitle: [],
				content: [],
				fStartDate: [],
				fEndDate: [],
				date: '2018-12-29 00:00~2018-12-29 23:59',
				loadMoreText: "加载中...",
				showLoadMore: false,
				max: 0,
				state: 1
			}
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		onReachBottom() {
			if (this.state == 0) {
				this.loadMoreText = "没有更多数据了!"
				console.log('没有更多数据了')
				return;
			} else {
				this.showLoadMore = true;
				this.setDate();
			}

		},
		onPullDownRefresh() {
			this.initData();
		},
		methods: {
			initData() {
				setTimeout(() => {
					this.max = 0;
					this.fNoticeID.length = 0
					this.fNoticeTitle.length = 0
					this.content.length = 0
					this.fStartDate.length = 0
					this.fEndDate.length = 0
					this.loadMoreText = ''
					uni.stopPullDownRefresh();
				}, 300);
			},
			goDetail: function(id, title) {
				let detail = {
					id: id,
					title: title
				}
				uni.navigateTo({
					url: "notedata?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
		}
	}
</script>

<style>
	.text {
		margin: 16upx 0;
		width: 100%;
		background-color: #fff;
		height: 120upx;
		line-height: 120upx;
		text-align: center;
		color: #555;
		border-radius: 8upx;
	}

	.uni-card {
		margin-top: 50upx;
	}

	.uni-card-content-inner {
		height: 90upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	.uni-card-header {
		font-size: 30upx;
	}
	.uni-card-content-inner{
		font-size: 25upx;
	}
	.uni-card-footer{
		font-size: 22upx;
	}

</style>
