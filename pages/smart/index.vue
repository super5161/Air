<template>
	<view>
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		            当前站点
		        </view>
		        <view class="uni-list-cell-db">
		            <view class="uni-input">莘庄中学</view>
		        </view>
		    </view>
		</view>
		
		<view class="list">
				<view class="uni-flex uni-row off" style="min-height: 2rem;">
					<view class="text1">教室</view>
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
		 	
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-center">
		            当前场景
		        </view>
		    </view>
		</view>
		
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
                 101教室
		        </view>
		    </view>

			<view class="uni-list-cell">
		        <view class="uni-list-cell-db">
		            <view class="uni-input">周一,周二,周三,周四,周五 8:00~9:00</view>
		        </view>
			</view>
			
			<view class="uni-list-cell">
			    <view class="uni-list-cell-db">
			        <view class="uni-input">空调 制冷 25°C</view>
			    </view>
			</view>
		</view>
		
		<view class="uni-list">
		    <view class="uni-list-cell">
		        <view class="uni-list-cell-left">
		         102教室
		        </view>
		    </view>
		
			<view class="uni-list-cell">
		        <view class="uni-list-cell-db">
		            <view class="uni-input">周一,周二,周三,周四,周五 10:00~11:00</view>
		        </view>
			</view>
			
			<view class="uni-list-cell">
			    <view class="uni-list-cell-db">
			        <view class="uni-input">空调 制冷 25°C</view>
			    </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad: function(event) {
			
			uni.setNavigationBarTitle({
				title: 'Smart'
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
