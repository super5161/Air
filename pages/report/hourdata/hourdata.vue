<template>

	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">日期选择 {{sdate}}</view>
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
	} from 'vuex';
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
			});
		},
		data() {
			return {
				title: 'Hello',
				sdate: this.getNowFormatDate(),
				tabList: [{
					mode: "date",
					name: "日期选择",
					value: [this.getNowYear(), this.getNowMonth(), this.getNowDay()] //年月日在列表的序号
				}],
				tabIndex: 0,
				//列表数据
				listData: [],
				//分类
				categories: [],
				chartData: [],
			}
		},
		onReady: function() {
			this.getListData();
			this.getChartData();
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
				this.sdate = val.result.replace(/-/g,'');
				this.setPageTitle();
				this.getListData();
				this.getChartData();
			},
			/*
			 * 获取列表数据
			 * */
			getListData: function() {
				_self.http.get("airReport/getDayAirData", {
					date: this.sdate,
					fsiteNo: this.userInfo.orgNo
				}).then(function(e) {
					console.log(e.data.data.list)
					if (e.data.code === 200) {
						_self.listData = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			getChartData: function() {
				_self.http.get("airReport/getDayLineChart", {
					date: this.sdate,
					fsiteNo: this.userInfo.orgNo
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

			goDetail: function(id, storeName) {
				let detail = {
					id: id,
					orgName: storeName,
					date: this.sdate
				}
				uni.navigateTo({
					url: "hourdata02?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},

			getNowFormatDate: function() {
				var date = new Date();
				var seperator1 = "";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate;
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

			getNowDay: function() {
				var date = new Date();
				var strDate = date.getDate();
				var currentdate = strDate - 1;
				return currentdate;
			},
			/**设置页面标题
			 */
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.sdate} ${this.userInfo.orgName} 每日空气`,
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
