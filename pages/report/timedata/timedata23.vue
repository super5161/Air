<template>
	<view>
		<view class="list">
					<view class="uni-flex uni-row off" style="min-height: 2rem;">
						<view class="text1">时间</view>
						<view class="text2">温度</view>
						<view class="text2">湿度</view>
						<view class="text2">PM2.5</view>
						<view class="text2">PM10</view>
						<view class="text2">甲醛</view>
						<view class="text2">CO2</view>
						<view class="text2">TVOC</view>
					</view>	
					
					<view class="uni-flex uni-row on" style="min-height: 2rem;" >
						<view class="text1">7:00</view>
						<view class="text2">25</view>
						<view class="text2">45</view>
						<view class="text2">76</view>
						<view class="text2">120</view>
						<view class="text2">0.03</view>
						<view class="text2">343</view>
						<view class="text2">420</view>
					</view>	
					
					<view class="uni-flex uni-row off" style="min-height: 2rem;" >
						<view class="text1">8:00</view>
						<view class="text2">26</view>
						<view class="text2">51</view>
						<view class="text2">76</view>
						<view class="text2">110</view>
						<view class="text2">0.02</view>
						<view class="text2">443</view>
						<view class="text2">320</view>
					</view>	
					
					<view class="uni-flex uni-row on" style="min-height: 2rem;" >
						<view class="text1">9:00</view>
						<view class="text2">28</view>
						<view class="text2">45</view>
						<view class="text2">76</view>
						<view class="text2">110</view>
						<view class="text2">0.02</view>
						<view class="text2">343</view>
						<view class="text2">420</view>
					</view>	
					
					<view class="uni-flex uni-row on" style="min-height: 2rem;" >
						<view class="text1">10:00</view>
						<view class="text2">26</view>
						<view class="text2">45</view>
						<view class="text2">76</view>
						<view class="text2">110</view>
						<view class="text2">0.02</view>
						<view class="text2">543</view>
						<view class="text2">320</view>
					</view>	
					
					<view class="uni-flex uni-row on" style="min-height: 2rem;" >
						<view class="text1">11:00</view>
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
	var _self;
	
	export default {
		onLoad: function(event) {
			_self = this;

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

		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
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
