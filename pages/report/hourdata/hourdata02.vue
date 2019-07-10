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
	var _self;
	var Charts;
	import wPicker from "@/components/w-picker/w-picker.vue";
	import {
		mapState
	} from 'vuex';
	var width;
	export default {
		components: {
			wPicker
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
		onLoad: function(opt) {
			_self = this;
			let ds;
			try {
				ds = JSON.parse(decodeURIComponent(opt.detail));
			} catch (error) {}
			let userifo = this.userInfo;
			this.orgId = ds ? ds.id : userifo.orgNo;
			this.orgName = ds ? ds.orgName : userifo.orgName;
			this.sdate = ds ? ds.date : this.getNowFormatDate();

			this.setPageTitle();
			this.loadwPicker();
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
				orgId: '',
				orgName: '',
				sdate: '',
				tabList: [{
					mode: "date",
					name: "日期选择",
					value: [0, 0, 0] //年月日在列表的序号
				}],
				tabIndex: 0,
				//列表数据
				listData: [],
			}
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
				this.sdate = val.result;
				this.setPageTitle()
				this.getListData();
				this.getChartData();
			},
			loadwPicker: function() {
				this.tabList[0].value[0] = this.getYear();
				this.tabList[0].value[1] = this.getMonth();
				this.tabList[0].value[2] = this.getDay();
			},
			getNowFormatDate: function() {
				var date = new Date();
				var seperator1 = "-";
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

			getYear: function() {
				var date = new Date(this.sdate);
				var year = date.getFullYear();
				var currentdate = year - 2018;
				return currentdate;
			},

			getMonth: function() {
				var date = new Date(this.sdate);
				var month = date.getMonth() + 1;
				var currentdate = month - 1;
				return currentdate;
			},

			getDay: function() {
				var date = new Date(this.sdate);
				var strDate = date.getDate();
				var currentdate = strDate - 1;
				return currentdate;
			},
			/**设置页面标题**/
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.sdate} ${this.orgName} 每日空气`,
				});
			},

			getChartData: function() {
				_self.http.get("airReport/getDayLineChart", {
					date: this.sdate,
					fsiteNo: this.orgId
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
					url: "hourdata03?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},

			/*
			 * 获取列表数据
			 * */
			getListData: function() {
				_self.http.get("airReport/getDayAirData", {
					date: this.sdate,
					fsiteNo: this.orgId,
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.listData = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
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
