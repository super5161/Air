<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择地区
				</view>
				<view class="uni-list-cell-db">
					<picker @change="areaChange" :value="areaIndex" :range="areaList" range-key="fsiteName">
						<view class="uni-input">{{areaName}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择站点
				</view>
				<view class="uni-list-cell-db">
					<picker @change="schoolChange" :value="schoolIndex" range-key="fsiteName" :range="schoolList">
						<view class="uni-input">{{schoolName}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3" style="margin-left: 375upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="canvasArcbar4" id="canvasArcbar4" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="canvasArcbar5" id="canvasArcbar5" class="charts3" style="margin-left: 375upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="canvasArcbar6" id="canvasArcbar6" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="canvasArcbar7" id="canvasArcbar7" class="charts3" style="margin-left: 375upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="canvasArcbar8" id="canvasArcbar8" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="canvasArcbar9" id="canvasArcbar9" class="charts3" style="margin-left: 375upx;"></canvas>
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

			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100001,'1号教学楼')">
				<view class="text1">1号教学楼</view>
				<view class="text2">25</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">120</view>
				<view class="text2">0.03</view>
				<view class="text2">343</view>
				<view class="text2">420</view>
			</view>

			<view class="uni-flex uni-row off" style="min-height: 2rem;" @click="goDetail(100002,'2号教学楼')">
				<view class="text1">2号教学楼</view>
				<view class="text2">26</view>
				<view class="text2">51</view>
				<view class="text2">76</view>
				<view class="text2">110</view>
				<view class="text2">0.02</view>
				<view class="text2">443</view>
				<view class="text2">320</view>
			</view>

			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100003,'行政大楼')">
				<view class="text1">行政大楼</view>
				<view class="text2">28</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">110</view>
				<view class="text2">0.02</view>
				<view class="text2">343</view>
				<view class="text2">420</view>
			</view>

			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100004,'图书馆')">
				<view class="text1">图书馆</view>
				<view class="text2">26</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">110</view>
				<view class="text2">0.02</view>
				<view class="text2">543</view>
				<view class="text2">320</view>
			</view>

			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100005,'食堂')">
				<view class="text1">食堂</view>
				<view class="text2">28</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">120</view>
				<view class="text2">0.04</view>
				<view class="text2">563</view>
				<view class="text2">220</view>
			</view>

		</view>

	</view>


</template>

<script>
	var wxCharts = require("../../../utils/wxcharts.js");
	var _self;
	var Charts1;
	var Charts2;

	var Data3 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: 'PM2.5',
			data: 86
		}]
	};
	var Data1 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: 'PM10',
			data: [97]
		}]
	};

	var Data4 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: '甲醛',
			data: 0.05
		}]
	};

	var Data5 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: 'TVOC',
			data: 350
		}]
	};

	var Data6 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: '温度',
			data: 31
		}]
	};

	var Data7 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: '湿度',
			data: 35
		}]
	};

	var Data8 = {
		categories: [{
			value: 0.2,
			color: '#2fc25b'
		}, {
			value: 0.8,
			color: '#f04864'
		}, {
			value: 1,
			color: '#1890ff'
		}],
		series: [{
			name: '二氧化碳',
			data: 535
		}]
	};
	import {
		mapState
	} from 'vuex'
	var width;
	export default {
		onLoad: function() {
			_self = this;
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
			this.getQuInfo();
		},
		computed: {
			...mapState(['userInfo']),
		},
		data() {
			return {
				title: 'picker',
				areaList: [],
				areaName: '',
				areaIndex: 0,
				areaId: '',
				schoolList: [],
				schoolName: '',
				schoolIndex: 0,
				schoolId: '',

				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				pixelRatio: 2
			}
		},
		onReady: function() {

		},
		methods: {
			//获取区信息
			getQuInfo: function() {
				_self.http.get("smartPhone/getQuInfoByUserId", {
					userId: this.userInfo.userId,
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.areaList = e.data.data.list;
						if (_self.areaList.length > 0) {
							let area = _self.areaList[0];
							_self.areaName = area.fsiteName;
							_self.areaId = area.fsiteNo;
						}
						_self.getSchools();
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			//获取学校
			getSchools: function() {
				if (this.areaId !== '') {
					this.http.get("smartPhone/getSchoolInfo", {
						fsiteNo: _self.areaId,
						userId: this.userInfo.userId,
					}).then(function(e) {
						if (e.data.code === 200) {
							_self.schoolList = e.data.data.list;
							//默认显示第一项
							if (_self.schoolList.length > 0) {
								let school = _self.schoolList[0];
								_self.schoolName = school.fsiteName;
								_self.schoolId = school.fsiteNo;
							}
							_self.showDate();
						} else {
							_self.util.showToast(e.data.msg)
						}
					});
				}
			},

			//区域选择
			areaChange: function(e) {
				if (this.areaId === e.target.value) return;
				let area = this.areaList[e.target.value];
				this.areaName = area.fsiteName;
				this.areaId = area.fsiteNo;
				this.areaIndex = e.target.value;
				this.getSchools();
			},

			//学校选择
			schoolChange: function(e) {
				if (this.schoolId === e.target.value) return;
				let school = this.schoolList[e.target.value];
				this.schoolName = school.fsiteName;
				this.schoolId = school.fsiteNo;
				this.schoolIndex = e.target.value;
				this.showDate();
			},
			/*设置标题*/
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.areaName}${this.schoolName}实时监控`,
				});
			},

			showDate: function() {
				this.setPageTitle();
				this.showCharts();
			},
			//显示图表
			showCharts: function() {
				_self.http.get("smartPhone/getOftenAirAqiByFsiteNo", {
					fsiteNo: this.schoolId,
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.util.showChartGauge("canvasArcbar3","PM2.5",Data3.series,_self.cWidth,_self.pixelRatio,_self.gaugeWidth)
						//_self.showArcbar3("canvasArcbar3", Data3);
						_self.showArcbar3("canvasArcbar1", Data1);
						_self.showArcbar3("canvasArcbar4", Data4);
						_self.showArcbar3("canvasArcbar5", Data5);
						_self.showArcbar3("canvasArcbar6", Data6);
						_self.showArcbar3("canvasArcbar7", Data7);
						_self.showArcbar3("canvasArcbar8", Data8);
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			},

			goDetail: function(id, storeName) {
				let detail = {
					id: id,
					storeName: storeName
				}
				uni.navigateTo({
					url: "timedata22?detail=" + encodeURIComponent(JSON.stringify(detail))
				})
			},

	
			showArcbar3(canvasId, chartData) {
				let categories =[{
						value: 0.2,
						color: '#2fc25b'
					},
					{
						value: 0.8,
						color: '#f04864'
					}, {
						value: 1,
						color: '#1890ff'
					}
				];
				
				debugger;
				new wxCharts({
					canvasId: canvasId,
					type: 'gauge',
					fontSize: 4,
					legend: false,				
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 5 * _self.pixelRatio,
						offsetY: 9 * _self.pixelRatio, 
					},
					extra: {
						gauge: {
							type: 'default',
							width: _self.gaugeWidth * 1 * _self.pixelRatio, //仪表盘背景的宽度
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							splitLine: {
								fixRadius: 0,
								splitNumber: 10,
								width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
								color: '#FFFFFF',
								childNumber: 5,
								childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio, //仪表盘背景的宽度
							},
							pointer: {
								width: _self.gaugeWidth * 0.4 * _self.pixelRatio, //指针宽度
								color: 'auto'
							}
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
				});
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
		width: 120upx;

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
