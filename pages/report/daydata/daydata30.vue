<template>
	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">年份选择 {{sdate}}</view>
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
				sdate: this.getNowFormatYear(),
				tabList: [{
					mode: "year",
					name: "年",
					value: [this.getYearIndex()]
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
			...mapState(["userInfo"])
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
				let date = val.result;
				this.sdate = date;
				this.setPageTitle();
				this.getListData();
				this.getChartData();
			},
			getChartData: function() {
				_self.http.get("airReport/getYearLineChart", {
					year: this.sdate,
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
							return item.faqi || 0;
						});
						series[0].data = datas || [];
						_self.util.showChartLine("charts", categories, series, width);
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},
			/*
			 * 获取列表数据
			 * year 年
			 * quarter 季度
			 * */
			getListData: function(year) {
				_self.http.get("airReport/getYearAirData", {
					year: this.sdate,
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
					url: "daydata31?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			getNowFormatYear: function() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var currentdate = year;
				return currentdate;
			},
			getYearIndex() {
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
