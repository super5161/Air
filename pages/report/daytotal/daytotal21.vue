<template>

	<view>
		<view class="content">
		  <view class="tab" @tap="toggleTab(0)">季度选择 {{sdate}}</view>
		  <w-picker :mode="mode" startYear="2018" endYear="2030" step="1" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker" themeColor="#f00"></w-picker>
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
	import wPicker from "@/components/w-picker/w-picker.vue";
	
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
		components:{
			wPicker
		},
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: this.getNowQuarter()+'市空气统计'
			});
			
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
	           title: 'Hello',
	           sdate: this.getNowQuarter(),
	           tabList:[{
	           	mode:"yearQuarter",
	           	name:"年季",
	           	value:[this.getNowYear(),0] //年月在列表的序号
	           }],
	           tabIndex:0
			}
		},
		computed:{
			mode(){
				return this.tabList[this.tabIndex].mode
			},
			defaultVal(){
				return this.tabList[this.tabIndex].value
			}
		},
		onReady: function() {
			this.ShowCharts("charts", Data);
			//this.hideLoading();
		},
		methods: {
			toggleTab(index){
				this.tabIndex=index;
				this.$refs.picker.show();
			},
			onConfirm(val){
				//当前所选择的日期
				this.sdate = val.result;
				console.log(val.result);
				
				uni.setNavigationBarTitle({
				title: val.result+'市空气质量'
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
						date: this.sdate
					}
					uni.navigateTo({
						url: "daytotal22?detail=" + encodeURIComponent(JSON.stringify(detail))
					})
			},
			
			getNowQuarter: function() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var quarter = "";
				if(month<=3){
					quarter="第一季度";
				}else if(month<=6){
					quarter="第二季度";
				}else if(month<=9){
					quarter="第三季度";
				}else if(month<=12){
					quarter="第四季度";
				}
				
				var currentdate = year + ' ' + quarter ;
				return currentdate;
			},
			
			getNowYear: function() {
				var date = new Date();
				var year = date.getFullYear();
				var currentdate = year -2018 ;
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
