<template>
<view>
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;" >
				<view class="text1">地区</view>
				<view class="text2">AQI</view>
				<view class="text3">刷新时间</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;">
				<view class="text1">闵行区</view>
				<view class="text2">164</view>
				<view class="text3">2019-05-05 16:59:01</view>
			</view>	
			
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">浦东新区</view>
				<view class="text2">180</view>
				<view class="text3">2019-05-05 16:59:01</view>
			</view>	
			
			<view class="uni-flex uni-row on" style="min-height: 2rem;">
				<view class="text1">徐汇区</view>
				<view class="text2">181</view>
				<view class="text3">2019-05-05 16:59:01</view>
			</view>	
			
		</view>
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
		width: 133upx;
		color: #FFFFFF;
		text-align: center;
		height: 70upx;
		line-height: 70upx;
	}
	
	.text3 {
		width: 296upx;
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
