<template>

	<view>
	
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">指标</view>
				<view class="text2">年浓度</view>
				<view class="text2">年平均</view>
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
			
			uni.getSystemInfo({
				success(res) {
					width = res.screenWidth - 10;
				}
			})
		},
		data() {
			return {
	
			}
		},
		onReady: function() {
			//this.hideLoading();
		},
		methods: {	
			goDetail:function(id,storeName){			
				let detail = {
						id: id,
						storeName:storeName
					}
					uni.navigateTo({
						url: "dayitem33?detail=" + encodeURIComponent(JSON.stringify(detail))
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
