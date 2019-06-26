<template>
	<view>
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">地区</view>
				<view class="text2">AQI</view>
				<view class="text2">空气类别</view>
				<view class="text2">首要污染物</view>
			</view>
			<view class="uni-flex uni-row" :class="[index%2===0 ? 'on' : 'off']" v-for="(item,index) in listData" :key="item.fsiteNo">
				<view class="text1">{{item.fpointName}}</view>
				<view class="text2">{{item.faqi|intFielter}}</view>
				<view class="text2">{{item.faqiType|emptyFielter}}</view>
				<view class="text2">{{item.fcontaminants|emptyFielter}}</view>
			</view>
		</view>

		<view>
			<canvas canvas-id="charts" id="charts" class="charts"></canvas>
		</view>

	</view>
</template>

<script>
	var _self;
	var Charts;
	var width;
	export default {
		onLoad: function(opts) {
			_self = this;
			try {
				this.detail = JSON.parse(decodeURIComponent(opts.detail));
			} catch (error) {
				this.detail = JSON.parse(opts.detail);
			}
			uni.setNavigationBarTitle({
				title: this.detail.date + this.detail.storeName + ' 空气监控'
			});

			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
				detail: {},
				listData: [],
			}
		},
		onReady: function() {
			_self.getListData();
			_self.getChartData();
		},
		methods: {
			getChartData: function() {
				let ds = this.detail.date.split(' ');
				let year = ds[0];
				let quarter = this.getQuarter(ds[1]);
				_self.http.get("getQuarterLineChart", {
					year: year,
					quarter: quarter,
					fsiteNo: this.detail.id
				}).then(function(e) {
					if (e.data.code === 200) {
						let categories = [];
						categories = e.data.data.list.map(function(item) {
							return parseInt(item.ftime);
						});
						let series = [];
						series[0] = {
							name: "AQI",
							data: [],
						}
						let datas = e.data.data.list.map(function(item) {
							return item.faqi;
						});
						series[0].data = datas || [];
						_self.util.showChartLine("charts", categories, series, width);
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},
			getListData: function() {
				let ds = this.detail.date.split(' ');
				let year = ds[0];
				let quarter = this.getQuarter(ds[1]);

				_self.http.get("getQuarterAirDataThree", {
					year: year,
					quarter: quarter,
					fsiteNo: this.detail.id
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.listData = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},
			getQuarter: function(quarterstr) {
				switch (quarterstr) {
					case "第一季度":
						return 1;
					case "第二季度":
						return 2;
					case "第三季度":
						return 3;
					default:
						return 4;
				}
			},
		}
	}
</script>

<style>
	page {
		height: auto;
	}

	.text1 {
		width: 320upx;
		color: #FFFFFF;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}

	.text2 {
		width: 143upx;
		color: #FFFFFF;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}

	.on {
		background: #54d6e3;
	}

	.off {
		background: #55cdd9;
	}

	.list {
		padding-bottom: 30upx;
		box-sizing: border-box;
		flex: 1;
		flex-direction: column;
		display: flex;
		padding-top: 10upx;
		height: 40%;
		flex: 2;
		text-align: left;
	}
</style>
