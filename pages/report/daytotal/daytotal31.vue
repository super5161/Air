<template>

	<view>

		<view class="uni-list-cell">
			<view class="uni-list-cell-left">
				年份选择
			</view>
			<view class="uni-list-cell-db">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
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
	import {mapState} from "vuex";
	export default {
		onLoad: function() {
			_self = this;
			let year = this.getNowFormatYear();
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
			this.setPageTitle(year);
			this.getDate(year);
		},
		data() {
			return {
				sdate: this.getNowFormatYear(),
				array: ['2017', '2018', '2019', '2020'],
				index: 2,
				dataList: [],
			}
		},
		onReady: function() {

		},computed:{
			...mapState(["userInfo"]),
		},
		methods: {
			bindPickerChange: function(e) {
				let date = e.target.value;
				this.sdate = date;
				this.setPageTitle(date);
				this.getDate(date);
			},
			getDate: function(year, quarter) {
				_self.http.get("airReport/getYearStatistics", {
					year: year,
					fsiteNo: this.userInfo.orgNo
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
			setPageTitle: function(sDate) {
				uni.setNavigationBarTitle({
					title: sDate + ' 市空气统计'
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
