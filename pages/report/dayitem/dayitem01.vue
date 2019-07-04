<template>
	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">月份选择 {{sdate}}</view>
			<w-picker :mode="mode" startYear="2018" endYear="2030" step="1" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
			 themeColor="#f00"></w-picker>
		</view>
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">指标</view>
				<view class="text2">月浓度</view>
				<view class="text2">月平均</view>
				<view class="text2">同比浓度</view>
				<view class="text2">同比</view>
				<view class="text2">环比浓度</view>
				<view class="text2">环比</view>
			</view>
			<view class="uni-flex uni-row" :class="[index%2===0 ? 'on' : 'off']" v-for="(item,index) in dataList" :key="item.fsiteNo">
				<view class="text1">{{item.fitemName}}</view>
				<view class="text2">{{item.fitemRange}}</view>
				<view class="text2">{{item.fitemValue}}</view>
				<view class="text2">{{item.ftbValue}}</view>
				<view class="text2">{{item.ftbRate}}</view>
				<view class="text2">{{item.fhbValue}}</view>
				<view class="text2">{{item.fhbRate}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	var width;
	var _self;
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
			let date = this.getNowFormatMonth();
			this.setPageTitle(date)
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			});
			this.getDate(date)
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
				dataList: [],
			}
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
				this.getDate(date);
			},
			getDate: function(date) {
				_self.http.get("airReport/getMonthExponent", {
					month: date,
					fsiteNo: this.userInfo.orgNo,
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.dataList = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});

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
