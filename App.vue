<script>
	export default {
		onLaunch: function() {
			let platform = uni.getSystemInfoSync().platform;
			switch (platform) {
				case 'android':
				case 'ios':
					this.$sys.removeSysImfo();//重置缓存
					let sys = this.$sys.getSysInfo();
					this.http.get('smartPhone/getAppVersionInfo', {
						appNo: sys.appId
					}, {
						baseUrl: sys.updateServer
					}).then(function(e) {
						if (e.data.code === 200) {
							let currentVerson = parseInt(sys.sysVersion.replace(/\./g, ''));
							let latestVerson = parseInt(e.data.data.verson.replace(/\./g, ''));
							console.log('currentVerson:' + currentVerson + '  latestVerson:' + latestVerson);
							if (latestVerson > currentVerson) {
								if (platform === 'android' && (e.data.data.androidLink == '' || e.data.data.androidLink == null)) return;
								if (platform === 'ios' && (e.data.data.iosLink == '' || e.data.data.iosLink == null)) return;
								uni.redirectTo({
									url: "/pages/sys/update"
								});
							}
						}
					});
					break;
				default:
					console.log('运行在开发者工具上');
					break;
			}
		},
		onShow: function() {

		},
		onHide: function() {

		},
		created: function() {

		}
	}
</script>

<style>
	@import url("static/iconfont/iconfont.css");

	/*每个页面公共css */
	@import "./common/uni.css";

	html,
	body {
		height: 100%;
		margin: 1px 0 0 0;
	}

	.charts {
		width: 100%;
		height: 680upx;
		background-color: #FFFFFF;
		margin-top: 20upx;
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

	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
</style>
