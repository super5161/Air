<template>
	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">年份选择 {{sdate}}</view>
			<w-picker :mode="mode" startYear="2018" endYear="2030" step="1" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
			 themeColor="#f00"></w-picker>
		</view>
		<view class="uni-flex uni-row" :class="[index%2===0 ? 'on' : 'off']" v-for="(item,index) in dataList" :key="item.fsiteNo">
			<view class="text1">{{item.faqiName}}</view>
			<view class="text2">{{item.faqiDay|intFielter}}</view>
			<view class="text2">{{item.faqiRate|emptyFielter}}</view>
			<view class="text2">{{item.ftbDay|emptyFielter}}</view>
			<view class="text2">{{item.ftbRate|intFielter}}</view>
			<view class="text2">{{item.fhbDay|emptyFielter}}</view>
			<view class="text2">{{item.fhbRate|emptyFielter}}</view>
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
	import wPicker from "@/components/w-picker/w-picker.vue";
	import {
		mapState
	} from "vuex";
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
				dataList: [],
			}
		},
		onReady: function() {
			this.getDate();
		},
		computed: {
			mode() {
				return this.tabList[this.tabIndex].mode
			},
			defaultVal() {
				return this.tabList[this.tabIndex].value
			},
			...mapState(["userInfo"]),
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
				this.getDate();
			},
			getDate: function() {
				_self.http.get("airReport/getYearStatistics", {
					year: this.sdate,
					fsiteNo: this.userInfo.orgNo
				}, {
					baseUrl: this.$sys.getApiUrl()
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.dataList = e.data.data.list;
						let chartsData = [];
						if (e.data.data.list && e.data.data.list.length > 0) {
							e.data.data.list.map(function(item) {
								chartsData.push({
									name: item.faqiName,
									data: parseInt(item.faqiDay)
								});
							});
						}
						_self.util.showChartPie('charts', chartsData, width);
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
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
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.sdate} ${this.userInfo.orgName} 市空气统计`,
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
		width: 150upx;
		color: #FFFFFF;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}

	.text2 {
		width: 100upx;
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
