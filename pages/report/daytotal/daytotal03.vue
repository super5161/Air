<template>
	<view>
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
				<view class="text2">25</view>
				<view class="text2">83.33</view>
				<view class="text2">15</view>
				<view class="text2">49.8</view>
				<view class="text2">28</view>
				<view class="text2">80.7</view>
			</view>	
			
			<view class="uni-flex uni-row off" style="min-height: 2rem;" @click="goDetail(100002,'轻度污染')">
				<view class="text1">轻度污染</view>
				<view class="text2">4</view>
				<view class="text2">13.33</view>
				<view class="text2">16</view>
				<view class="text2">50.2</view>
				<view class="text2">2</view>
				<view class="text2">10.3</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100003,'中度污染')">
				<view class="text1">中度污染</view>
				<view class="text2">1</view>
				<view class="text2">3.33</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100004,'重度污染')">
				<view class="text1">重度污染</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100005,'严重污染')">
				<view class="text1">严重污染</view>
				<view class="text2">0</view>
				<view class="text2">0</view>
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
				data: 25,
				name: '优良'
			},
			{
				data: 4,
				name: '轻度污染'
			},
			{
				data: 1,
				name: '中度污染'
			},
			{
				data: 0,
				name: '重度污染'
			},
			{
				data: 0,
				name: '严重污染'
			}
		]
	};
	var width;
	export default {
		onLoad: function(event) {
			var detail = new Object();
			detail = JSON.parse(decodeURIComponent(event.detail))
			
			try {
				this.onload = JSON.parse(decodeURIComponent(event.detail));
			} catch (error) {
				this.onload = JSON.parse(event.detail);
			}
			console.log(this.onload);
			uni.setNavigationBarTitle({
				title: this.onload.date+this.onload.storeName+'空气统计'
			});		
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
				onload:{}
			}
		},
		onReady: function() {
			this.ShowCharts("charts", Data);
			//this.hideLoading();
		},
		methods: {
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
				console.log(storeName);
				
				let detail = {
						id: id,
						storeName:storeName,
						date:this.onload.date
					}
					uni.navigateTo({
						url: "daytotal04?detail=" + encodeURIComponent(JSON.stringify(detail))
					})
			}
		}
	}
</script>

<style>
page {
		height: auto;
	}
	
   .text1 {
		width: 320upx;
		color: #FFFFFF;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}

	.text2 {
		width: 143upx;
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
