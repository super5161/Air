<template>
	<view>
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;" >
				<view class="text1">地区</view>
				<view class="text2">AQI</view>
				<view class="text2">空气类别</view>
				<view class="text2">首要污染物</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(300001,'莘庄中学')">
				<view class="text1">莘庄中学</view>
				<view class="text2">76</view>
				<view class="text2">良</view>
				<view class="text2">PM2.5</view>
			</view>	
			
			<view class="uni-flex uni-row off" style="min-height: 2rem;" @click="goDetail(300002,'颛桥中学')">
				<view class="text1">颛桥中学</view>
				<view class="text2">80</view>
				<view class="text2">良</view>
				<view class="text2">PM2.5</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(300003,'北桥中学')">
				<view class="text1">北桥中学</view>
				<view class="text2">81</view>
				<view class="text2">良</view>
				<view class="text2">CO</view>
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
		categories: ['5/1', '5/2', '5/3', '5/4', '5/5', '5/6', '5/7'],
		series: [{
				name: 'AQI',
				data: [396, 363, 370, 360, 423, 418, 350]
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
				title: this.onload.date+this.onload.storeName+'空气质量'
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
					type: 'line',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					animation: true,
					categories: data.categories,
					series: data.series,
					width: width,
					height: 280,
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
						url: "daydata03?detail=" + encodeURIComponent(JSON.stringify(detail))
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
