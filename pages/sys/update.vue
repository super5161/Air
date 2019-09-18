<template>
	<view class="flex-column">
		<view class="content">
			<image class="logo" src="../../static/image/up-circle.png" />
			<view class="mainInfo">
				<text class="title">最新版本 v{{latestVerson}}</text>
				<text class="tip">\n当前版本 v{{currentVerson}}</text>
			</view>
			<text class="line" />
		</view>
		<view>
			<view class="infoContentTitle">
				<image class="infoPic" src="../../static/image/info-circle.png" />
				<text class="infoTitle">更新摘要</text>
			</view>
			<view class="infoContent">
				<text class="updateInfo" v-html="updateInfo"></text>
			</view>
		</view>
		<view class="minorContent">
			<view v-if="startProgress" class="smallTitle">
				<text>下载进度:{{ downloadProgress }}%</text>
				<progress class="minor-p" :percent="downloadProgress" stroke-width="5" />
			</view>
			<button :loading="buttonLoading" type="primary" @click="handleUpdate">更新</button>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				latestVerson: '', // 最新版本
				currentVerson: '',
				updateInfo: '', // 更新摘要
				buttonLoading: false, // 开始更新
				startProgress: false, // 下载进行
				downloadTask: null, // 下载任务
				downloadProgress: 0, // 更新进度
				androidLink: '', //安卓更新地址
				iosLink: '', //苹果更新地址
			}
		},
		onReady() {
			that = this;
			this.getLatest()
		},
		methods: {
			// 取得最新版本及其所有信息
			getLatest() {
				let sys = this.$sys.getSysInfo();
				this.http.get('smartPhone/getAppVersionInfo', {
					appNo: sys.appId
				}, {
					baseUrl: sys.updateServer
				}).then(function(e) {
					if (e.data.code === 200) {
						that.currentVerson = sys.sysVersion;
						that.latestVerson = e.data.data.verson;
						that.updateInfo = e.data.data.updateInfo;
						that.androidLink = e.data.data.androidLink;
						that.iosLink = e.data.data.iosLink;
					}
				});
			},
			//关闭下载任务
			closeTask() {
				this.downloadTask.abort()
				this.downloadTask = null;
				this.startProgress = false;
				this.buttonLoading = false;
				this.downloadProgress = 0;
			},
			//下载任务 按照
			createTask() {
				this.buttonLoading = true;
				this.startProgress = true;
				this.downloadProgress = 0;
				// 创建下载任务对象
				this.downloadTask = uni.downloadFile({
					url: that.androidLink,
					success: (res) => {
						if (res.statusCode === 200) {
							// 保存下载的安装包
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: (res) => {
									let packgePath = res.savedFilePath
									plus.runtime.install(packgePath, {
										force: true
									});
									this.closeTask()
								}
							})
						}
					}
				})
				// 进度条更新
				this.downloadTask.onProgressUpdate((res) => {
					this.downloadProgress = res.progress;
				})
			},

			/*更新*/
			handleUpdate() {
				switch (uni.getSystemInfoSync().platform) {
					case 'android':
						this.createTask();
						break;
					case 'ios':
						plus.runtime.openURL(this.iosLink);
						break;
					default:
						console.log('运行在开发者工具上')
						break;
				}
			}
		}
	}
</script>

<style>
	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.content {
		text-align: center;
	}

	.minorContent {
		width: 650upx;
		padding: 0 50upx;
		position: absolute;
		bottom: 100upx;
	}

	.process {
		margin-top: 200upx;
		margin-left: 30%;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 100upx;
	}

	.title {
		font-size: 36upx;
		color: #373737;
		font-weight: bold;
	}

	.infoTitle {
		font-size: 32upx;
		color: #373737;
		padding-left: 15upx;
		font-weight: bold;
	}

	.tip {
		font-size: 28upx;
		color: #7E7E83;
		vertical-align: text-top;
	}

	.line {
		padding: 0 600upx;
		border-bottom: 2upx solid #D8D8D8;
	}

	.infoPic {
		height: 50upx;
		width: 50upx;
	}

	.infoContentTitle {
		display: flex;
		align-items: center;
		padding: 40upx 80upx;
	}

	.infoContent {
		display: flex;
		align-items: center;
	}

	.updateInfo {
		font-size: 28upx;
		color: #7E7E83;
		padding: 0 80upx;
	}

	.smallTitle {
		font-size: 26upx;
		font-weight: 500;
		padding: 20upx 0;
		line-height: 1.5;
		color: #888;
	}

	.minor-p {
		margin-top: 18upx;
	}
</style>
