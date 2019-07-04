<template>

	<view>
		<view class="uni-list">
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
	import {
		mapState
	} from "vuex";
	var _self;
	var Charts;
	var width;
	export default {
		onLoad: function() {
			_self = this;
			let date = this.getNowFormatYear();
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
			this.setPageTitle(date);

			this.getListData(date);
			this.getChartData(date);
		},
		data() {
			return {
				sdate: this.getNowFormatYear(),
				array: ['2017', '2018', '2019', '2020'],
				index: 2,
				listData: [],

			}
		},
		computed: {
			...mapState(["userInfo"])
		},
		onReady: function() {

		},
		methods: {
			bindPickerChange: function(e) {
				let date = e.target.value;
				this.sdate = date;
				this.getListData(date);
				this.getChartData(date);
			},
			getChartData: function(year) {
				_self.http.get("getYearLineChart", {
					year: year,
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
			/*
			 * 获取列表数据
			 * year 年
			 * quarter 季度
			 * */
			getListData: function(year) {
				_self.http.get("getYearAirData", {
					year: year,
					fsiteNo: this.userInfo.userOrgNo
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
					date: this.array[this.index]
				}
				uni.navigateTo({
					url: "daydata32?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			getNowFormatYear: function() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var currentdate = year;
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
