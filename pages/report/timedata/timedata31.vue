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
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择设备
				</view>
				<view class="uni-list-cell-db">
					<picker @change="deviceChange" :value="deviceIndex" range-key="deviceName" :range="deviceList">
						<view class="uni-input">{{deviceName}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="list" style="margin-top: 20upx;">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text">温度°C</view>
				<view class="text">湿度°C</view>
				<view class="text">PM2.5</view>
				<view class="text">PM10</view>
				<view class="text">二氧化碳</view>
				<view class="text">甲醛</view>
				<view class="text">挥发性有机物</view>
			</view>
			<view class="uni-flex uni-row on" v-for="(item,index) in fastItem" :key="index">
				<view class="text">{{item.t}}</view>
				<view class="text">{{item.h}}</view>
				<view class="text">{{item.pm25}}</view>
				<view class="text">{{item.pm10}}</view>
				<view class="text">{{item.co2}}</view>
				<view class="text">{{item.hcho}}</view>
				<view class="text">{{item.tvoc}}</view>
			</view>
		</view>
		<!-- PM2.5 -->
		<canvas canvas-id="chartspm25" id="chartspm25" class="charts"></canvas>
		<!-- PM10 -->
		<canvas canvas-id="chartspm10" id="chartspm10" class="charts"></canvas>
		<!-- 二氧化碳 -->
		<canvas canvas-id="chartsco2" id="chartsco2" class="charts"></canvas>
		<!-- 甲醛  -->
		<canvas canvas-id="chartshcho" id="chartshcho" class="charts"></canvas>
		<!-- 挥发性有机物 -->
		<canvas canvas-id="chartstvoc" id="chartstvoc" class="charts"></canvas>
	</view>

	</view>
</template>

<script>
	var _self;
	var width;
	import {
		mapState
	} from 'vuex'
	export default {
		onLoad: function() {
			_self = this;
			uni.setNavigationBarTitle({
				title: '空气狗'
			});

			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			});
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
				deviceList: [],
				deviceName: '',
				deviceIndex: 0,
				deviceMac: '',
				item: [], //空气数据
				fastItem: [],
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
							_self.getDevices();
						} else {
							_self.util.showToast(e.data.msg)
						}
					});
				}
			},

			//获取设备
			getDevices: function() {
				if (this.schoolId !== '') {
					this.http.get("smartPhone/getAirDogBySiteNo", {
						fsiteNo: _self.schoolId,
					}).then(function(e) {
						if (e.data.code === 200) {
							_self.deviceList = e.data.data.list.map(function(item) {
								return {
									deviceName: `${item.fpointName}   ${item.fequipmentname}`,
									deviceMac: item.fmacno
								};
							});
							//默认显示第一项
							if (_self.deviceList.length > 0) {
								let device = _self.deviceList[0];
								_self.deviceName = device.deviceName;
								_self.deviceMac = device.deviceMac;
							}
							_self.showData();
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
				this.getDevices();
			},

			//设备选择
			deviceChange: function(e) {
				if (this.deviceMac === e.target.value) return;
				let device = this.deviceList[e.target.value];
				this.deviceName = device.deviceName;
				this.deviceMac = device.deviceMac;
				this.deviceIndex = e.target.value;
				this.showData();
			},

			//显示数据
			showData: function() {
				this.item = [];
				if (this.schoolId === '' || this.areaId === '' || this.deviceMac === '')
					return;
				this.http.get("smartPhone/get24AqiByFmacno", {
					fmacno: _self.deviceMac,
				}).then(function(e) {
					if (e.data.code === 200) {
						_self.item = e.data.data.list;
						if (_self.item.length > 0)
							_self.fastItem[0] = _self.item[0];
						_self.showCharts();
					} else {
						_self.util.showToast(e.data.msg)
					}
				});

			},

			//显示图表
			showCharts: function() {
				let categories = this.item.map(function(item) {
					return item.fhour;
				});

				let pm25 = [{
					name: 'PM2.5',
					data: this.item.map(function(item) {
						return item.pm25;
					})
				}];

				let pm10 = [{
					name: 'PM10',
					data: this.item.map(function(item) {
						return item.pm10;
					})
				}];

				let co2 = [{
					name: '二氧化碳',
					data: this.item.map(function(item) {
						return item.co2;
					})
				}];

				let hcho = [{
					name: '甲醛',
					data: this.item.map(function(item) {
						return item.hcho;
					})
				}];

				let tvoc = [{
					name: '挥发性有机物',
					data: this.item.map(function(item) {
						return item.tvoc;
					})
				}];

				this.util.showChartLine("chartspm25", categories, pm25, width);
				this.util.showChartLine("chartspm10", categories, pm10, width);
				this.util.showChartLine("chartsco2", categories, co2, width);
				this.util.showChartLine("chartshcho", categories, hcho, width);
				this.util.showChartLine("chartstvoc", categories, tvoc, width);
			},
		}
	}
</script>

<style>
	.text {
		width: 320upx;
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
