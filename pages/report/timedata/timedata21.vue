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
			<canvas canvas-id="chartpm25" id="chartpm25" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="chartpm10" id="chartpm10" class="charts3" style="margin-left: 375upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="charthcho" id="charthcho" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="charttvoc" id="charttvoc" class="charts3" style="margin-left: 375upx;"></canvas>
		</view>
		<view class="uni-flex uni-row" style="height: 200upx;">
			<canvas canvas-id="charth" id="charth" class="charts3" style="margin-left: 0upx;"></canvas>
			<canvas canvas-id="chartw" id="chartw" class="charts3" style="margin-left: 375upx;"></canvas>
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
	var _self;

	var Data3 = {
		series: [{
			name: 'PM2.5',
			data: 86
		}]
	}
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
						let pixelRatio = _self.pixelRatio;
						let gaugeWidth = uni.upx2px(10);
						let width = uni.upx2px(200);
						let height = uni.upx2px(150);
						let data = e.data.data.list;
						if (data && data.length === 1) {
							let item = data[0];
							let pm25 = [{
								name: 'PM2.5',
								data: item.fpm25
							}];
							let pm10 = [{
								name: 'PM10',
								data: item.fpm10
							}];
							let hcho = [{
								name: '甲醛',
								data: item.fjq
							}];
							let tvoc = [{
								name: '挥发性有机物',
								data: item.fyjw
							}];
							let h = [{
								name: '温度',
								data: item.fsd2
							}];
							let w = [{
								name: '湿度',
								data: item.fwd2
							}];
							_self._showCharts("chartpm25", pm25)
							_self._showCharts("chartpm10", pm10)
							_self._showCharts("charthcho", hcho)
							_self._showCharts("charttvoc", tvoc)
							_self._showCharts("charth", h)
							_self._showCharts("chartw", w)
						}
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
					storeName: storeName
				}
				uni.navigateTo({
					url: "timedata22?detail=" + encodeURIComponent(JSON.stringify(detail))
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
