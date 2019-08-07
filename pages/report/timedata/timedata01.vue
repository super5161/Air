<template>
	<view>
		<view style="margin-left: 10upx;">
			<view class="uni-flex uni-row">
				<view style="width: 400upx;">
					<view>
						温度:{{aqi.fwd}}°C 湿度{{aqi.fsd}}%
					</view>
					<view class="aqi">
						{{aqi.faqi}}
					</view>
					<view>
						空气质量:{{quality}}
					</view>
					<view>
						污染级别：{{level}}级
					</view>
					<view>
						首要污染物:{{aqi.fcontaminants}}
					</view>
				</view>
				<view class="uni-center">
					<image class="image" mode="aspectFit" :src="imagSrc" style="width: 200upx; height: 200upx; " />
				</view>
			</view>
			<view class="uni-flex uni-row">
				对健康的影响:{{aqi.fYX}}
			</view>
			<view class="uni-flex uni-row">
				建议措施:{{aqi.fCS}}
			</view>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="chartTb" id="chartTb" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="chartHb" id="chartHb" class="charts3" style="margin-left: 375upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="margin-top: 20upx;">
			<canvas canvas-id="charts" id="charts" @click="click" class="charts"></canvas>
		</view>
	</view>
</template>

<script>
	var _self;
	var ChartTop;
	import {
		mapState
	} from "vuex";
	var width;
	export default {
		onLoad: function() {
			_self = this;
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
					_self.pixelRatio = 2;
				}
			})

			this.setPageTitle();
			this.getAqiDate();
			this.getAqiTop();
		},
		data() {
			return {
				aqi: {},
				pixelRatio: 1,
				listDate: []
			}
		},
		computed: {
			...mapState(["userInfo"]),
			quality() {
				var ds = ['优', '良', '轻度', '中度', '重度', '严重'];
				let i = this._getAqiIndex(this.aqi.faqi);
				return ds[i];
			},
			level() {
				return this._getAqiIndex(this.aqi.faqi) + 1;
			},
			imagSrc() {
				return `../../../static/image/ico_0${this._getAqiIndex(this.aqi.faqi) + 1}.png`;
			}
		},
		onReady: function() {

		},
		methods: {
			//设置标题
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.userInfo.orgName} 实时监控`,
				});
			},
			
			//或者AQI
			getAqiDate: function() {
				_self.http.get("air/getAirPointByFsiteNo", {
					fsiteNo: this.userInfo.orgNo,
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.aqi = e.data.data;
						let width = uni.upx2px(135);
						let heigth = uni.upx2px(135);
						let tData = {
							categories: ['同比'],
							series: [{
								name: '同比',
								data: [_self.util.percentage(_self.aqi.faqiTb)]
							}]
						};
						let hDate = {
							categories: ['环比'],
							series: [{
								name: '环比',
								data: [_self.util.percentage(_self.aqi.faqiHb)]
							}]
						}
						_self.util.showChartArcbar("chartTb", tData, _self.pixelRatio, width, heigth);
						_self.util.showChartArcbar("chartHb", hDate, _self.pixelRatio, width, heigth);
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			//获取aqi 排行
			getAqiTop: function() {
				_self.http.get("air/getAQIByUserId", {
					fsiteParent: this.userInfo.orgNo,
					userId: this.userInfo.userId
				}).then(function(e) {
					if (e.data.code === 200) {
						let list = e.data.data.list;
						_self.listDate = list;
						let categories = list.map(function(item) {
							return item.fsiteName
						});
						let dates = list.map(function(item) {
							return item.faqi
						});
						let chartDate = {
							categories: categories,
							series: [{
								name: 'AQI',
								data: dates
							}]
						};
						ChartTop = _self.util.showChartColumn("charts", chartDate);
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			//获取AQI等级
			_getAqiIndex: function(aqi) {
				let index = 0;
				if (aqi <= 50) {
					index = 0;
				} else if (aqi <= 100) {
					index = 1;
				} else if (aqi <= 150) {
					index = 2;
				} else if (aqi <= 200) {
					index = 3;
				} else if (aqi <= 300) {
					index = 4;
				} else {
					index = 5;
				}
				return index;
			},

			click: function(e) {
				var index = ChartTop.getCurrentDataIndex(e);
				var item = this.listDate[index];
				let detail = {
					id: item.fsiteNo,
					orgName: item.fsiteName
				}
				uni.navigateTo({
					url: "timedata02?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
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
		height: 100%;
	}

	.canvasViewBar {
		flex: 1;
		display: flex;
		height: 550upx;
		width: 750upx;
	}

	.charts3 {
		position: absolute;
		width: 375upx;
		height: 250upx;
		background-color: #FFFFFF;
	}

	.aqi {
		font-size: 60upx;
		margin-left: 20upx;
	}
</style>
