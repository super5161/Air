<template>
	<view>
	
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
	 
	 <view class="uni-flex uni-row" style="height: 50upx;">
	 
	 </view>
	 
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
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100001,'101教室')">
				<view class="text1">101教室</view>
				<view class="text2">25</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">120</view>
				<view class="text2">0.03</view>
				<view class="text2">343</view>
				<view class="text2">420</view>
			</view>	
			
			<view class="uni-flex uni-row off" style="min-height: 2rem;" @click="goDetail(100002,'102教室')">
				<view class="text1">102教室</view>
				<view class="text2">26</view>
				<view class="text2">51</view>
				<view class="text2">76</view>
				<view class="text2">110</view>
				<view class="text2">0.02</view>
				<view class="text2">443</view>
				<view class="text2">320</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100003,'103教室')">
				<view class="text1">103教室</view>
				<view class="text2">28</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">110</view>
				<view class="text2">0.02</view>
				<view class="text2">343</view>
				<view class="text2">420</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100004,'104教室')">
				<view class="text1">104教室</view>
				<view class="text2">26</view>
				<view class="text2">45</view>
				<view class="text2">76</view>
				<view class="text2">110</view>
				<view class="text2">0.02</view>
				<view class="text2">543</view>
				<view class="text2">320</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100005,'105教室')">
				<view class="text1">105教室</view>
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
		categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		series: [{
				name: 'PM2.5',
				data: 86
			}
		]
	};
	var Data1 = {
		categories: [{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		
		series: [{
				name: 'PM10',
				data: [97]
			}
		]
	};
	
	var Data4 = {
		categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		series: [{
				name: '甲醛',
				data: 0.05
			}
		]
	};
	
	var Data5 = {
		categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		series: [{
				name: 'TVOC',
				data: 350
			}
		]
	};
	
	var Data6 = {
		categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		series: [{
				name: '温度',
				data: 31
			}
		]
	};
	
	var Data7 = {
		categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		series: [{
				name: '湿度',
				data: 35
			}
		]
	};
	
	var Data8 = {
		categories:[{value:0.2,color:'#2fc25b'},{value:0.8,color:'#f04864'},{value:1,color:'#1890ff'}],series:[{ name: '完成率', data: 0.85 }],
		series: [{
				name: '二氧化碳',
				data: 535
			}
		]
	};
	
	var Data9 = {
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
		onLoad: function(event) {
			_self = this;
			// 			uni.setNavigationBarTitle({
			// 				title: '新的标题'
			// 			});
			// uni.showLoading({
			// 	title: '加载中...',
			// 	mask:true,
			// });
			var detail = new Object();
			detail = JSON.parse(decodeURIComponent(event.detail))
			
			try {
				this.onload = JSON.parse(decodeURIComponent(event.detail));
			} catch (error) {
				this.onload = JSON.parse(event.detail);
			}
			console.log(this.onload);
			uni.setNavigationBarTitle({
				title: this.onload.storeName+'室内空气'
			});	
			
			uni.getSystemInfo({
				success(res) {
					width = 200;//res.screenWidth - 10;
					_self.pixelRatio =2;
				}
			})
			// this.cWidth3=uni.upx2px(135);
			// this.cHeight3=uni.upx2px(135);
			this.cWidth=uni.upx2px(200);
			this.cHeight=uni.upx2px(150);
			this.cWidth3=uni.upx2px(250);
			this.cHeight3=uni.upx2px(250);
			this.gaugeWidth=uni.upx2px(10);
		},
		data() {
			return {		  
			  cWidth3:'',//圆弧进度图
			  cHeight3:'',//圆弧进度图
			  pixelRatio:2
			}
		},
		onReady: function() {
			this.showArcbar3("canvasArcbar3", Data3);
			this.showArcbar3("canvasArcbar1", Data1);
			
			this.showArcbar4("canvasArcbar4", Data4);
			this.showArcbar5("canvasArcbar5", Data5);
			
			this.showArcbar6("canvasArcbar6", Data6);
			this.showArcbar6("canvasArcbar7", Data7);
			
			this.showArcbar7("canvasArcbar8", Data8);
			this.ShowCharts2("canvasArcbar9", Data9);
		},
		methods: {
			goDetail:function(id,storeName){			
				let detail = {
						id: id,
						storeName:storeName
					}
					uni.navigateTo({
						url: "timedata23?detail=" + encodeURIComponent(JSON.stringify(detail))
					})
			},
			
			/*显示图表*/
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
					dataLabel: true,
					pixelRatio:1,
				});
			},
			
			//显示PM2.5,PM10
			showArcbar3(canvasId,chartData){			 
				new wxCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:4,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data)+'%',
						color: '#2fc25b',//chartData.categories[1].color,
						fontSize: 5*_self.pixelRatio,
						offsetY:10*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 5*_self.pixelRatio,
						offsetY:9*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*1*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:100,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.4*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				
				});
				
			},
			
			//显示甲醛
			showArcbar4(canvasId,chartData){			 
				new wxCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:4,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data)+'%',
						color: '#2fc25b',//chartData.categories[1].color,
						fontSize: 5*_self.pixelRatio,
						offsetY:10*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 5*_self.pixelRatio,
						offsetY:9*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*1*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:5,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.4*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				
				});
				
			},
			
			//显示TVOC
			showArcbar5(canvasId,chartData){
				new wxCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:4,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data)+'%',
						color: '#2fc25b',//chartData.categories[1].color,
						fontSize: 5*_self.pixelRatio,
						offsetY:10*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 5*_self.pixelRatio,
						offsetY:9*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*1*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:4000,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.4*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				
				});
				
			},
			
			//显示温度，湿度
			showArcbar6(canvasId,chartData){
				new wxCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:4,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data)+'%',
						color: '#2fc25b',//chartData.categories[1].color,
						fontSize: 5*_self.pixelRatio,
						offsetY:10*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 5*_self.pixelRatio,
						offsetY:9*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*1*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:50,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.4*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				
				});
				
			},
					
			//显示二氧化碳
			showArcbar7(canvasId,chartData){
				new wxCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:4,
					legend:false,
					title: {
						name: Math.round(chartData.series[0].data)+'%',
						color: '#2fc25b',//chartData.categories[1].color,
						fontSize: 5*_self.pixelRatio,
						offsetY:10*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 5*_self.pixelRatio,
						offsetY:9*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*1*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:800,
							splitLine:{
								fixRadius:0,
								splitNumber:10,
								width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
							pointer:{
								width: _self.gaugeWidth*0.4*_self.pixelRatio,//指针宽度
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				
				});
				
			},
			
		}
	}
</script>

<style>
  .charts3{position: absolute;width: 350upx; height:260upx;background-color: #FFFFFF;}
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
