<template>

	<view>
		<view class="content">
			<view class="tab" @tap="toggleTab(0)">季度选择 {{sdate}}</view>
			<w-picker :mode="mode" startYear="2018" endYear="2030" step="1" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker"
			 themeColor="#f00"></w-picker>
		</view>

		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">指标</view>
				<view class="text2">季浓度</view>
				<view class="text2">季平均</view>
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
	import wPicker from "@/components/w-picker/w-picker.vue";

	var width;
	var _self;
	export default {
		components: {
			wPicker
		},
		onLoad: function() {
			_self = this;
			let date = this.getNowQuarter();
			this.setPageTitle(date);

			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})

			let ds = date.split(' ');
			let year = ds[0];
			let quarter = this.getQuarter(ds[1]);
			this.getDate(year, quarter);
		},
		data() {
			return {
				title: 'Hello',
				sdate: this.getNowQuarter(),
				tabList: [{
					mode: "yearQuarter",
					name: "年季",
					value: [1, 0] //年月在列表的序号
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
				//当前所选择的日期
				this.sdate = date;
				this.setPageTitle(date);
				let ds = date.split('-');
				let year = ds[0];
				let quarter = this.getQuarter(ds[1]);
				this.getDate(year, quarter);
			},
			getDate: function(year, quarter) {
				_self.http.get("getQuarterExponent", {
					year: year,
					quarter: quarter,
					fsiteNo: this.$store.state.userInfo.userOrgNo
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.dataList = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
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
			setPageTitle: function(sDate) {
				uni.setNavigationBarTitle({
					title: sDate + ' 市空气指数'
				});
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
