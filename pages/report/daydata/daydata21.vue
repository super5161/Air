<template>

	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">季度选择 {{sdate}}</view>
			<w-picker :mode="mode" startYear="2018" endYear="2030" step="1" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
			 themeColor="#f00"></w-picker>
		</view>

		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">地区</view>
				<view class="text2">AQI</view>
				<view class="text2">空气类别</view>
				<view class="text2">首要污染物</view>
			</view>

			<view class="uni-flex uni-row" :class="[index%2===0 ? 'on' : 'off']" v-for="(item,index) in listData" :key="item.fsiteNo"
			 @click="goDetail(item.fsiteNo,item.fsiteName)">
				<view class="text1">{{item.fsiteName}}</view>
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
	import wPicker from "@/components/w-picker/w-picker.vue";
	var _self;
	var Charts;
	var width;
	export default {
		components: {
			wPicker
		},

		onLoad: function() {
			_self=this;
			let date = this.getNowQuarter();
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
			this.setPageTitle(date);
			let ds = date.split(' ');
			let year = ds[0];
			let quarter = this.getQuarter(ds[1]);

			this.getListData(year, quarter);
			this.getChartData(year, quarter);
		},
		data() {
			return {
				title: 'Hello',
				sdate: this.getNowQuarter(),
				tabList: [{
					mode: "yearQuarter",
					name: "年季",
					value: [this.getNowYear(), 0] //年月在列表的序号
				}],
				tabIndex: 0,
				listData: [],
			}
		},
		computed: {
			mode() {
				return this.tabList[this.tabIndex].mode
			},
			defaultVal() {
				return this.tabList[this.tabIndex].value
			}
		},
		onReady: function() {

		},
		methods: {
			toggleTab(index) {
				this.tabIndex = index;
				this.$refs.picker.show();
			},
			onConfirm(val) {
				let date = val.result;
				this.sdate = date;
				this.setPageTitle(date);
				let ds = date.split(' ');
				let year = ds[0];
				let quarter = this.getQuarter(ds[1]);

				this.getListData(year, quarter);
				this.getChartData(year, quarter);
			},
			getChartData: function(year, quarter) {
				_self.http.get("getQuarterLineChart", {
					year: year,
					quarter: quarter,
					fsiteNo: this.$store.state.userInfo.userOrgNo
				}).then(function(e) {
					if (e.data.code === 200) {
						let categories = [];
						categories = e.data.data.list.map(function(item) {
							return item.ftime;
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
			/*显示图表*/
			ShowCharts: function(categories, series) {
				if (series[0].data.length <= 0) {
					series[0].data.push(0);
				}
				Charts = new wxCharts({
					canvasId: "charts",
					type: 'line',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					animation: false,
					categories: categories,
					series: series,
					width: width,
					height: 280,
					pixelRatio: 1,
				});
			},
			/*
			 * 获取列表数据
			 * year 年
			 * quarter 季度
			 * */
			getListData: function(year, quarter) {
				_self.http.get("getQuarterAirData", {
					year: year,
					quarter: quarter,
					fsiteNo: this.$store.state.userInfo.userOrgNo
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.listData = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			goDetail: function(id, storeName) {
				let detail = {
					id: id,
					storeName: storeName,
					date: this.sdate
				}
				uni.navigateTo({
					url: "daydata22?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},

			getNowQuarter: function() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var quarter = "";
				if (month <= 3) {
					quarter = "第一季度";
				} else if (month <= 6) {
					quarter = "第二季度";
				} else if (month <= 9) {
					quarter = "第三季度";
				} else if (month <= 12) {
					quarter = "第四季度";
				}

				var currentdate = year + ' ' + quarter;
				return currentdate;
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

			getNowYear: function() {
				var date = new Date();
				var year = date.getFullYear();
				var currentdate = year - 2018;
				return currentdate;
			},
			/**设置页面标题
			 * @param {日期} sDate
			 */
			setPageTitle: function(sDate) {
				uni.setNavigationBarTitle({
					title: sDate + ' 市空气质量'
				});
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
