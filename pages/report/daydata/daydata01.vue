<template>

	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">月份选择 {{sdate}}</view>
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
			_self = this;
			var sDate = this.getNowFormatMonth();
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
			this.setPageTitle(sDate);
			this.getListData(sDate);
			this.getChartData(sDate);
		},
		data() {
			return {
				title: 'Hello',
				sdate: this.getNowFormatMonth(),
				tabList: [{
					mode: "yearMonth",
					name: "年月",
					value: [this.getNowYear(), this.getNowMonth()] //年月在列表的序号
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
				let date = val.result.replace('-', '');
				this.sdate = date;
				this.setPageTitle(date);
				this.getListData(date);
				this.getChartData(date);
			},
			getChartData: function(sDate) {
				_self.http.get("getMonthLineChart", {
					date: sDate,
					fsiteNo: this.$store.state.userInfo.userOrgNo
				}).then(function(e) {
					if (e.data.code === 200) {
						let categories = e.data.data.list.map(function(item) {
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
			/*
			 * 获取列表数据
			 * sDate 查询日期
			 * */
			getListData: function(sDate) {
				_self.http.get("getDayAirData", {
					date: sDate,
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
					url: "daydata02?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},

			getNowFormatMonth: function() {
				var date = new Date();
				var seperator1 = "";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				var currentdate = year + seperator1 + month;
				return currentdate;
			},

			getNowYear: function() {
				var date = new Date();
				var year = date.getFullYear();
				var currentdate = year - 2018;
				return currentdate;
			},

			getNowMonth: function() {
				var date = new Date();
				var month = date.getMonth() + 1;
				var currentdate = month - 1;
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
