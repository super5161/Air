<template>
	<view>
		<view class="list">
			<view class="uni-flex uni-row off" style="min-height: 2rem;">
				<view class="text1">采集时间</view>
				<view class="text2">PM2.5</view>
				<view class="text2">PM10</view>
				<view class="text2">甲醛</view>
				<view class="text2">tvoc</view>
				<view class="text2">温度</view>
				<view class="text2">湿度</view>
			</view>
			<view class="uni-flex uni-row" :class="[index%2===0 ? 'on' : 'off']" v-for="(item,index) in listData" :key="index">
				<view class="text1">{{item.ftime}}</view>
				<view class="text2">{{item.pm25}}</view>
				<view class="text2">{{item.pm10}}</view>
				<view class="text2">{{item.hcho}}</view>
				<view class="text2">{{item.tvoc}}</view>
				<view class="text2">{{item.t}}</view>
				<view class="text2">{{item.h}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;

	export default {
		onLoad: function(event) {
			_self = this;
			let ds;
			try {
				ds = JSON.parse(decodeURIComponent(event.detail));
			} catch (error) {}
			this.orgId = ds.id;
			this.orgName = ds.orgName;
			this.setPageTitle();
		},
		onReady() {
			_self.http.get("smartPhone/getAqiByFpointNo", {
				fpointNo: this.orgId,
			}, {
				baseUrl: this.$sys.getApiUrl()
			}).then(function(e) {
				if (e.data.code === 200) {
					_self.listData = e.data.data.list;
				} else {
					_self.util.showToast(e.data.msg)
				}
			});
		},
		data() {
			return {
				orgId: '',
				orgName: '',
				listData: [],
			}
		},
		methods: {
			/**设置页面标题**/
			setPageTitle: function() {
				uni.setNavigationBarTitle({
					title: `${this.orgName} 室内空气`,
				});
			},
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
