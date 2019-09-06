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
	import {
		mapState
	} from "vuex";
	var _self;
	var Charts;
	var width;
	export default {
		components: {
			wPicker
		},
		onLoad: function() {
			_self = this;
			this.setPageTitle();
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
				title: 'Hello',
				sdate: this.getNowYearQuarter(),
				tabList: [{
					mode: "yearQuarter",
					name: "年季",
					value: [this.getNowYear(), this.getQuarter(this.getNowQuarter()) - 1]
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
			},
			year() {
				let ds = this.sdate.split(' ');
				return ds[0];
			},
			quarter() {
				let ds = this.sdate.split(' ');
				return this.getQuarter(ds[1]);
			},
			...mapState(["userInfo"]),
		},
		onReady: function() {
			this.getListData();
			this.getChartData();
		},
		methods: {
			toggleTab(index) {
				this.tabIndex = index;
				this.$refs.picker.show();
			},
			onConfirm(val) {
				let date = val.result.replace('-', ' ');
				this.sdate = date;
				this.setPageTitle();
				this.getListData();
				this.getChartData();
			},
			getChartData: function() {
				_self.http.get("airReport/getQuarterLineChart", {
					year: this.year,
					quarter: this.quarter,
					fsiteNo: this.userInfo.orgNo
				}, {
					baseUrl: this.$sys.getApiUrl()
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
			/* 获取列表数据 */
			getListData: function() {
				_self.http.get("airReport/getQuarterAirData", {
					year: this.year,
					quarter: this.quarter,
					fsiteNo: this.userInfo.orgNo
				}, {
					baseUrl: this.$sys.getApiUrl()
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
					orgName: storeName,
					date: this.sdate
				}
				uni.navigateTo({
					url: "daydata21?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			/*获取年+季度描述*/
			getNowYearQuarter: function() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var quarter = this.getNowQuarter();
				var currentdate = year + ' ' + quarter;
				return currentdate;
			},
			/*获取当前季度描述*/
			getNowQuarter: function() {
				var date = new Date();
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
				return quarter;
			},
			/*根据描述获取季度值*/
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
			/**设置页面标题*/
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.sdate} ${this.userInfo.orgName} 空气质量`,
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
