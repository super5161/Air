<template>
	<view>
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            选择地区
		        </view>
		        <view class="uni-list-cell-db">
		            <picker @change="bindPickerChange" :value="index" :range="array1">
		                <view class="uni-input">{{array1[index]}}</view>
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
					<picker @change="bindPickerChange" :value="index" :range="array2">
						<view class="uni-input">{{array2[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
		
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            空气狗
		        </view>
		        <view class="uni-list-cell-db">
		            <view class="uni-input">101教室</view>
		        </view>
		    </view>
		</view>

        <view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            温度:26°C
		        </view>
		        <view class="uni-list-cell-right">
		            湿度:67
		        </view>
		    </view>
		</view>
		
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            PM2.5:68
		        </view>
				<view class="uni-list-cell-center">
				    PM10:167
				</view>
				<view class="uni-list-cell-right">
				    二氧化碳:67
				</view>
		    </view>
		</view>
		
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            甲醛:0.01
		        </view>
		        <view class="uni-list-cell-right">
		            挥发性有机物:467
		        </view>
		    </view>
		</view>
		
		<view>
			<!-- PM2.5 -->
			<canvas canvas-id="charts1" id="charts1" class="charts"></canvas>
		</view>
		
		<view>
			<!-- PM10 -->
			<canvas canvas-id="charts2" id="charts2" class="charts"></canvas>
		</view>
		
		<view>
			<!-- 二氧化碳 -->
			<canvas canvas-id="charts3" id="charts3" class="charts"></canvas>
		</view>
		
		<view>
			<!-- 甲醛  -->
			<canvas canvas-id="charts4" id="charts4" class="charts"></canvas>
		</view>
		
		<view>
			<!-- 挥发性有机物 -->
			<canvas canvas-id="charts5" id="charts5" class="charts"></canvas>
		</view>
		
	</view>
</template>

<script>
	var wxCharts = require("../../../utils/wxcharts.js");
	var _self;
	var Charts;
	
	var Data1 = {
		categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		series: [{
				name: 'PM2.5',
				data: [36, 43, 48, 63, 70, 60, 50, 43, 48, 63, 70, 60, 50, 48, 63, 70]
			}
		]
	};
	
	var Data2 = {
		categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		series: [{
				name: 'PM10',
				data: [136, 143, 148, 163, 170, 160, 150, 143, 148, 163, 170, 160, 150, 148, 163, 170]
			}
		]
	};
	
	var Data3 = {
		categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		series: [{
				name: '二氧化碳',
				data: [336, 343, 448, 363, 470, 460, 450, 443, 448, 463, 470, 460, 350, 348, 363, 270]
			}
		]
	};
	
	var Data4 = {
		categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		series: [{
				name: '甲醛',
				data: [0.01, 0.01, 0.01, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01]
			}
		]
	};
	
	var Data5 = {
		categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
		series: [{
				name: '挥发性有机物',
				data: [336, 343, 448, 363, 470, 460, 450, 443, 448, 463, 470, 460, 350, 348, 363, 270]
			}
		]
	};
	
	var width;
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
			})
		},
		data() {
			return {
			  title: 'picker',
			  array1: ['黄埔区', '浦东新区', '徐汇区', '闵行区'],
			  array2: ['莘庄中学', '颛桥中学', '马桥中学', '北桥中学'],
			  index: 3,
				
			}
		},
		onReady: function() {
			this.ShowCharts1("charts1", Data1);
			this.ShowCharts1("charts2", Data2);
			this.ShowCharts1("charts3", Data3);
			this.ShowCharts1("charts4", Data4);
			this.ShowCharts1("charts5", Data5);
		},
		methods: {
			bindPickerChange: function(e) {
			this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			
			/*显示图表*/
			ShowCharts1: function(canvasId, data) {
				Charts = new wxCharts({
					canvasId: canvasId,
					type: 'line',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					animation: true,
					categories: data.categories,
					series: data.series,
					width: width,
					height: 250,
					pixelRatio:1,
				});
			},
		}
	}
</script>

<style>

</style>
