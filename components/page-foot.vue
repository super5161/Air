<template>
	<view>
		<view class="footer-row"></view>
		<view class="footer" :style="footerTop">
			<navigator :url="item.page" open-type="navigate" :key="item.id" v-for="item in foots" hover-class="none">
				<view class="footer-item" :class="{active:tab==item.id}">
					<view class="iconfont" :class="item.type"></view>
					<text class="footer-text">{{item.text}}</text>
				</view>
			</navigator>
		</view>
	</view>
</template>
<script>
	var that;
	export default {
		name: 'page-foot',
		data() {
			return {
				footerTop: '',
				foots: [],
			}
		},
		props: {
			tab: '',
		},
		/*组件创建完成事件*/
		created: function() {
			that = this;
			//that.$i18n.locale="en-US";
			/*解决输入法面板*/
			uni.getSystemInfo({
				success(res) {
					that.footerTop = 'top:' + (res.screenHeight - 60) + 'px';
				}
			});
			/*加载语言环境*/
			that.foots = [{
				id: 0,
				text: that.res.honeText,
				type: 'home',
				page: '/pages/index/index',
			}, {
				id: 2,
				text: that.res.mynote,
				type: 'my',
				page: '/pages/note/index',
			}, {
				id: 3,
				text: that.res.myText,
				type: 'my',
				page: '/pages/user/index',
			}];
		},
		computed: {
			res() {
				return this.$t('res.foot');
			}
		},
		methods: {

		}
	}
</script>
<style>
	.footer-row {
		height: 120upx;
	}

	.footer {
		position: fixed;
		left: 0px;
		bottom: 0px;
		background-color: #FFFFFF;
		z-index: 999;
		width: 100%;
		height: 120upx;
		flex: 0 0 auto;
		border-top: 1px solid #bac1d4;
		justify-content: space-around;
		display: flex;
	}

	.footer-item.active {
		color: #36BBFF;
	}

	.footer-item {
		width: 100%;
		text-align: center;
		color: #999;
		display: block;
		padding: 8upx 0;
	}

	.iconfont {
		display: block;
		font-size: 32upx;
	}
	
	.footer-item .footer-text {
		font-size: 26upx;
		display: block;
	}
</style>
