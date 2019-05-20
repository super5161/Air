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
				<view class="text2">天数</view>
				<view class="text2">占比</view>
				<view class="text2">同比天数</view>
				<view class="text2">同比</view>
				<view class="text2">环比天数</view>
				<view class="text2">环比</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100001,'优良')">
				<view class="text1">优良</view>
				<view class="text2">70</view>
				<view class="text2">77.78</view>
				<view class="text2">15</view>
				<view class="text2">49.8</view>
				<view class="text2">28</view>
				<view class="text2">80.7</view>
			</view>	
			
			<view class="uni-flex uni-row off" style="min-height: 2rem;" @click="goDetail(100002,'轻度污染')">
				<view class="text1">轻度污染</view>
				<view class="text2">8</view>
				<view class="text2">8.89</view>
				<view class="text2">16</view>
				<view class="text2">50.2</view>
				<view class="text2">2</view>
				<view class="text2">10.3</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100003,'中度污染')">
				<view class="text1">中度污染</view>
				<view class="text2">5</view>
				<view class="text2">5.56</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100004,'重度污染')">
				<view class="text1">重度污染</view>
				<view class="text2">5</view>
				<view class="text2">5.56</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100005,'严重污染')">
				<view class="text1">严重污染</view>
				<view class="text2">2</view>
				<view class="text2">2.22</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
			</view>	
			
		</view>

     <view>
		<canvas canvas-id="charts" id="charts" class="charts"></canvas>
	</view>
	
	</view>
</template>

<script>
	var wxCharts = require("../../../utils/wxcharts.js");
	var _self;
	var Charts;
	
	var Data = {
		series: [{
				data: 70,
				name: '优良'
			},
			{
				data: 8,
				name: '轻度污染'
			},
			{
				data: 5,
				name: '中度污染'
			},
			{
				data: 5,
				name: '重度污染'
			},
			{
				data: 2,
				name: '严重污染'
			}
		]
	};
	var width;
	export default {
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: this.getNowFormatYear()+'市空气统计'
			});
			
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
	           sdate: this.getNowFormatYear(),
	           array: ['2017','2018', '2019', '2020'],
	           index: 2,
			}
		},
		onReady: function() {
			this.ShowCharts("charts", Data);
			//this.hideLoading();
		},
		methods: {
			bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value)
			this.index = e.target.value
			
			uni.setNavigationBarTitle({
				title: this.array[this.index]+'市空气统计'
			});
			
			},
			
			/*显示图表*/
			ShowCharts: function(canvasId, data) {
				Charts = new wxCharts({
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					background: '#FFFFFF',
					animation: true,
					series: data.series,
					width: width,
					height: 280,
					dataLabel: true,
					pixelRatio:1,
				});
			},
			
			goDetail:function(id,storeName){			
				let detail = {
						id: id,
						storeName:storeName,
						date:this.array[this.index]
					}
					uni.navigateTo({
						url: "daytotal32?detail=" + encodeURIComponent(JSON.stringify(detail))
					})
			},
			
			getNowFormatYear: function() {
				var date = new Date();
				var seperator1 = "-";
				var year = date.getFullYear();
				var currentdate = year ;
				return currentdate;
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
