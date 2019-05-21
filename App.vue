<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("static/iconfont/iconfont.css");

	/*每个页面公共css */
	@import "./common/uni.css";

	.charts {
		width: 100%;
		height: 680upx;
		background-color: #FFFFFF;
		margin-top: 100upx;
	}

	.area {
		width: 98%;
		margin-top: 20upx;
		display: flex;
		justify-content: space-around;
	}

	.item {
		width: 30%;
		border: 1px solid #ccc;
		background-color: #36BBFF;
		color: #FFFFFF;
		height: 150upx;
		text-align: center;
		padding: 30upx 0;
		border-radius: 10upx;
		margin-left: 10upx;
		box-shadow: #365FFF;
	}

	.item image {
		width: 60upx;
		height: 60upx;
	}

	.item text {
		display: block;
		font-size: 30upx;
	}

	.item.other {
		background-color: #365FFF;
	}

	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
</style>
