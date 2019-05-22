<template>
	<view>
		<view class="uni-flex uni-row">
			<view style="width: 550upx;">
				<view>
					温度:28.9°C
				</view>
				<view>
					湿度32.5%
				</view>
				<view>
					AQI:52
				</view>
				<view>
					空气质量:优
				</view>
				<view>
					首要污染物:PM10
				</view>
				<view>
					最近24小时AQI:60
				</view>
			</view>
			<view class="uni-center" >
				<image class="image" mode="aspectFit" src="../../../static/image/t.png" style="width: 200upx; height: 200upx; " />
			</view>
		</view>
		<view class="uni-flex uni-row">
			对健康的影响:空气质量令人满意，基本无空气污染
		</view>
		<view class="uni-flex uni-row">
			建议措施:各类人群可正常活动
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3" style="margin-left: 250upx;"></canvas>
			<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 500upx;"></canvas>
		</view>
		<view class="uni-flex uni-row">
			<canvas canvas-id="charts" id="charts" @touchstart="touch" class="charts"></canvas>
		</view>

		<view class="uni-flex uni-row">
			异常警告一览
		</view>
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">告警时间</view>
				<view class="text2">检测站点</view>
				<view class="text2">AQI</view>
			</view>

			<view class="uni-flex uni-row on" style="min-height: 2rem;">
				<view class="text1">2019-05-05 09:05:10</view>
				<view class="text2">上海体育馆</view>
				<view class="text2">112</view>
			</view>

			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">2019-05-05 09:05:10</view>
				<view class="text2">闵行体育公园</view>
				<view class="text2">118</view>
			</view>
		</view>

	</view>
</template>

<script>
	var wxCharts = require("../../../utils/wxcharts.js");
	var _self;
	var Charts1;
	var Charts2;

	var Data = {
		categories: ['闵行区', '浦东新区', '徐汇区', '静安区', '杨浦区', '松江区', '奉贤区'],
		series: [{
			name: 'AQI',
			data: [80, 70, 60, 56, 50, 46, 35]
		}]
	};
	var Data3 = {
		categories: ['同比'],
		series: [{
			name: '同比',
			data: [86]
		}]
	};
	var Data1 = {
		categories: ['环比'],
		series: [{
			name: '环比',
			data: [97]
		}]
	};
	var Data2 = {
		series: [{
				data: 90,
				name: '联网'
			},
			{
				data: 10,
				name: '断网'
			}
		]
	};
	var width;
	export default {
		onLoad: function() {
			_self = this;
			// 			uni.setNavigationBarTitle({
			// 				title: '新的标题'
			// 			});
			// uni.showLoading({
			// 	title: '加载中...',
			// 	mask:true,
			// });
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
					_self.pixelRatio = 2;
				}
			})
			this.cWidth3 = uni.upx2px(135);
			this.cHeight3 = uni.upx2px(135);
		},
		data() {
			return {
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				pixelRatio: 1
			}
		},
		onReady: function() {
			this.ShowCharts("charts", Data);
			this.showArcbar3("canvasArcbar3", Data3);
			this.showArcbar3("canvasArcbar1", Data1);
			this.ShowCharts2("canvasArcbar2", Data2);
		},
		methods: {
			ShowCharts2: function(canvasId, data) {
				Charts2 = new wxCharts({
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					background: '#FFFFFF',
					animation: true,
					series: data.series,
					width: 165,
					height: 165,
					dataLabel: false,
					pixelRatio: 1,
				});
			},
			touch: function(e) {
				var index = Charts1.getCurrentDataIndex(e);
				let detail = {
					id: "100001",
					storeName: Data.categories[index]
				}
				uni.navigateTo({
					url: "timedata02?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			/*显示图表*/
			ShowCharts: function(canvasId, data) {
				//console.log(data)
				Charts1 = new wxCharts({
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 10,
					background: '#FFFFFF',
					animation: true,
					categories: data.categories,
					series: data.series,
					width: 350,
					height: 350,
					pixelRatio: 1,
					rotate: true, //横屏模式
					xAxis: {
						disableGrid: false,
					},
					yAxis: {
						disabled: false
					},
					dataLabel: true,
					extra: {
						column: {
							width: 300 //_self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					}
				});
			},

			/*显示图表*/
			showArcbar3(canvasId, chartData) {
				console.log(chartData);

				new wxCharts({
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: chartData.series[0].data + '%',
						color: '#667766',
						fontSize: 10
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 10
					},
					extra: {
						arcbar: {
							type: 'default', //整圆类型进度条图
							width: 10, //_self.arcbarWidth*_self.pixelRatio,//圆弧的宽度
							startAngle: 0, //整圆类型只需配置起始角度即可
							backgroundColor: '#ffe3e8',
						},
						ringChart: 1000
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,

				});

			},
		}
	}
</script>

<style>
	.text1 {
		width: 350upx;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}

	.text2 {
		width: 175upx;
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

	.image {
		margin: 40upx 0;
		width: 200upx;
	}

	.canvasViewBar {
		flex: 1;
		display: flex;
		height: 550upx;
		width: 750upx;
	}

	.charts3 {
		position: absolute;
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}
</style>
