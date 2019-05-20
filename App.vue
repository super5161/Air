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
		page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
</style>
