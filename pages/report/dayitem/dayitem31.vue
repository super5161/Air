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
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">指标</view>
				<view class="text2">年浓度</view>
				<view class="text2">年平均</view>
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

		},
		methods: {
			getDate: function(year) {
				_self.http.get("getYearExponent", {
					year: year,
					fsiteNo: this.$store.state.userInfo.userOrgNo
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.dataList = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},
			setPageTitle: function(sDate) {
				uni.setNavigationBarTitle({
					title: sDate + ' 市空气指数'
				});
			},
			getNowFormatYear: function() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var currentdate = year;
				return currentdate;
			},
			bindPickerChange: function(e) {
				let date = e.target.value;
				this.sdate = date;
				this.setPageTitle(date);
				this.getDate(date);
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
