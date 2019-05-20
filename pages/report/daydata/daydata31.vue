<template>

	<view>
        <view class="uni-list">
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
        </view>
			
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">地区</view>
				<view class="text2">AQI</view>
				<view class="text2">空气类别</view>
				<view class="text2">首要污染物</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(200001,'闵行区')">
				<view class="text1">闵行区</view>
				<view class="text2">76</view>
				<view class="text2">良</view>
				<view class="text2">PM2.5</view>
			</view>	
			
			<view class="uni-flex uni-row off" style="min-height: 2rem;" @click="goDetail(200002,'浦东新区')">
				<view class="text1">浦东新区</view>
				<view class="text2">80</view>
				<view class="text2">良</view>
				<view class="text2">PM2.5</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(200003,'徐汇区')">
				<view class="text1">徐汇区</view>
				<view class="text2">83</view>
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
		categories: ['2019/1', '2019/2', '2019/3','2019/4', '2019/5', '2019/6'],
		series: [{
				name: 'AQI',
				data: [363, 370, 360,396, 423, 418]
			}
		]
	};
	var width;
	export default {
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: this.getNowFormatYear()+'市空气质量'
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
				title: this.array[this.index]+'市空气质量'
			});
			
            },
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
				let detail = {
						id: id,
						storeName:storeName,
						date:this.array[this.index]
					}
					uni.navigateTo({
						url: "daydata32?detail=" + encodeURIComponent(JSON.stringify(detail))
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
