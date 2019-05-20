<template>

	<view>
	    <view class="content">
	      <view class="tab" @tap="toggleTab(0)">季度选择 {{sdate}}</view>
	      <w-picker :mode="mode" startYear="2018" endYear="2030" step="1" :defaultVal="defaultVal" @confirm="onConfirm" ref="picker" themeColor="#f00"></w-picker>
	    </view>
		
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">指标</view>
				<view class="text2">季浓度</view>
				<view class="text2">季平均</view>
				<view class="text2">同比浓度</view>
				<view class="text2">同比</view>
				<view class="text2">环比浓度</view>
				<view class="text2">环比</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100001,'PM2.5')">
				<view class="text1">PM2.5</view>
				<view class="text2">31~35</view>
				<view class="text2">34</view>
				<view class="text2">36~42</view>
				<view class="text2">38</view>
				<view class="text2">40~50</view>
				<view class="text2">45</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100003,'O3')">
				<view class="text1">O3</view>
				<view class="text2">13~20</view>
				<view class="text2">16</view>
				<view class="text2">18~30</view>
				<view class="text2">24</view>
				<view class="text2">20~30</view>
				<view class="text2">25</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100004,'重度污染')">
				<view class="text1">SO2</view>
				<view class="text2">1~5</view>
				<view class="text2">3</view>
				<view class="text2">6~10</view>
				<view class="text2">8</view>
				<view class="text2">3~9</view>
				<view class="text2">6</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100005,'PM10')">
				<view class="text1">PM10</view>
				<view class="text2">52~60</view>
				<view class="text2">56</view>
				<view class="text2">58~68</view>
				<view class="text2">63</view>
				<view class="text2">50~56</view>
				<view class="text2">53</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100006,'NO2')">
				<view class="text1">NO2</view>
				<view class="text2">21~31</view>
				<view class="text2">26</view>
				<view class="text2">31~41</view>
				<view class="text2">36</view>
				<view class="text2">18~20</view>
				<view class="text2">19</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;" @click="goDetail(100007,'CO')">
				<view class="text1">CO</view>
				<view class="text2">4~10</view>
				<view class="text2">7</view>
				<view class="text2">6~8</view>
				<view class="text2">7</view>
				<view class="text2">10~12</view>
				<view class="text2">11</view>
			</view>	
		</view>
	
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	
	var width;
	export default {
		components:{
			wPicker
		},
		onLoad: function() {
			uni.setNavigationBarTitle({
				title: this.getNowQuarter()+'市空气指数'
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
	           	value:[1,0] //年月在列表的序号
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
			goDetail:function(id,storeName){			
				let detail = {
						id: id,
						storeName:storeName,
						date:this.sdate
					}
					uni.navigateTo({
						url: "dayitem22?detail=" + encodeURIComponent(JSON.stringify(detail))
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
