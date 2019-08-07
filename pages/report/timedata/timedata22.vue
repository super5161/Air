<template>
	<view>

		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="chartpm10" id="chartpm10" class="charts3" style="margin-left: 375upx;"></canvas>
			<canvas canvas-id="chartpm25" id="chartpm25" class="charts3" style="margin-left: 0upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="charttvoc" id="charttvoc" class="charts3" style="margin-left: 375upx;"></canvas>
			<canvas canvas-id="charthcho" id="charthcho" class="charts3" style="margin-left: 0upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="chartw" id="chartw" class="charts3" style="margin-left: 375upx;"></canvas>
			<canvas canvas-id="charth" id="charth" class="charts3" style="margin-left: 0upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 50upx;"></view>

		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">监测点</view>
				<view class="text2">温度</view>
				<view class="text2">湿度</view>
				<view class="text2">PM2.5</view>
				<view class="text2">PM10</view>
				<view class="text2">甲醛</view>
				<view class="text2">CO2</view>
				<view class="text2">TVOC</view>
			</view>	
			<view class="uni-flex uni-row" :class="[index%2===0 ? 'on' : 'off']" v-for="(item,index) in listData" :key="item.fpointNo"
			 @click="goDetail(item.fpointNo,item.fpointName)">
				<view class="text1">{{item.fpointName}}</view>
				<view class="text2">{{parseInt(item.fwd)}}</view>
				<view class="text2">{{parseInt(item.fsd)}}</view>
				<view class="text2">{{parseInt(item.fmoniterPm25)}}</view>
				<view class="text2">{{parseInt(item.fmoniterPm10)}}</view>
				<view class="text2">{{parseInt(item.fmoniterJq)}}</view>
				<view class="text2">{{parseInt(item.fmoniterCo2)}}</view>
				<view class="text2">{{parseInt(item.fmoniterYjw)}}</view>
			</view>
		</view>
	</view>


</template>

<script>
	var _self;
	var width;
	export default {
		onLoad: function(event) {
			_self = this;
			let ds;
			try {
				ds = JSON.parse(decodeURIComponent(event.detail));
			} catch (error) {}
			let userifo = this.userInfo;
			this.orgId = ds.id;
			this.orgName = ds.orgName;
			uni.getSystemInfo({
				success(res) {
					width = 200;
					_self.pixelRatio = 2;
				}
			})
			this.cWidth = uni.upx2px(200);
			this.cHeight = uni.upx2px(150);
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.gaugeWidth = uni.upx2px(10);
		},
		data() {
			return {
				orgId: '',
				orgName: '',
				listData: [],
				pixelRatio: 2
			}
		},
		onReady: function() {
			this.showDate();
		},
		methods: {
			/*设置标题*/
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${_self.orgName} 实时监控`,
				});
			},
			showDate: function() {
				this.setPageTitle();
				this.showCharts();
				this.showCharts();
				_self.http.get("air/getAirDataByFpointNo", {
					fpointNo: this.orgId
				}).then(function(e) {
					if (e.data.code === 200) {
						console.log(e.data.data.list)
						_self.listData = e.data.data.list;
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},
			//显示图表
			showCharts: function() {
				_self.http.get("smartPhone/getPointAirAqiByFpointNo", {
					fpointNo: this.orgId,
				}).then(function(e) {
					if (e.data.code === 200) {
						let pixelRatio = _self.pixelRatio;
						let gaugeWidth = uni.upx2px(10);
						let width = uni.upx2px(200);
						let height = uni.upx2px(150);
						let item = e.data.data;

						let pm25 = [{
							name: 'PM2.5',
							data: _self.util.percentage(item.fpm25)
						}];
						let pm10 = [{
							name: 'PM10',
							data: _self.util.percentage(item.fpm10)
						}];
						let hcho = [{
							name: '甲醛',
							data: _self.util.percentage(item.fjq)
						}];
						let tvoc = [{
							name: '挥发性有机物',
							data: _self.util.percentage(item.fyjw)
						}];
						let h = [{
							name: '温度',
							data: _self.util.percentage(item.fsd2)
						}];
						let w = [{
							name: '湿度',
							data: _self.util.percentage(item.fwd2)
						}];
						_self._showCharts("chartpm25", pm25)
						_self._showCharts("chartpm10", pm10)
						_self._showCharts("charthcho", hcho)
						_self._showCharts("charttvoc", tvoc)
						_self._showCharts("charth", h)
						_self._showCharts("chartw", w)

					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			_showCharts: function(chartid, series) {
				let pixelRatio = _self.pixelRatio;
				let gaugeWidth = uni.upx2px(10);
				let width = uni.upx2px(200);
				let height = uni.upx2px(150);
				_self.util.showChartGauge(chartid, series, pixelRatio, gaugeWidth, width, height);
			},

			goDetail: function(id, storeName) {
				let detail = {
					id: id,
					orgName: storeName
				}
				uni.navigateTo({
					url: "timedata23?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
		}
	}
</script>

<style>
	.charts3 {
		position: absolute;
		width: 350upx;
		height: 260upx;
		background-color: #FFFFFF;
	}

	.text1 {
		width: 160upx;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}

	.text2 {
		width: 90upx;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
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

	.on {
		background: #54d6e3;
	}

	.off {
		background: #55cdd9;
	}
</style>
