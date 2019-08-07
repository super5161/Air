<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-card" v-for="(item,index) in listData" :key="index">
				<view class="uni-card-header">{{item.ftitle}}</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">{{item.fmeg}}</view>
				</view>
			</view>
		</view>
		<page-foot tab="2"></page-foot>
	</view>
</template>
<script>
	var _self;
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {
				seq: 0,
				listData: [],
			}
		},
		onLoad() {
			_self = this;
			this.getWarning();
		},
		computed: {
			...mapState(["userInfo"]),
		},
		onReachBottom() {
			this.getWarning();
		},
		methods: {
			getWarning: function() {
				_self.http.get("smartPhone/getWarningInfo", {
					eqtType: 1,
					fsiteNo: this.userInfo.orgNo,
					seq: this.seq,
					userId: this.userInfo.userId
				}).then(function(e) {
					if (e.data.code === 200) {
						if (e.data.data.list.length > 0) {
							e.data.data.list.map(function(item) {
								_self.listData.push(item);
							});
							_self.seq += 1;
						}
					} else {
						_self.util.showToast(e.data.msg)
					}
				});
			}
		}
	}
</script>

<style>
	.text {
		margin: 16upx 0;
		width: 100%;
		background-color: #fff;
		height: 120upx;
		line-height: 120upx;
		text-align: center;
		color: #555;
		border-radius: 8upx;
	}

	.uni-card {
		margin-top: 50upx;
	}

	.uni-card-content-inner {
		height: 90upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}

	.uni-card-header {
		font-size: 30upx;
	}

	.uni-card-content-inner {
		font-size: 25upx;
	}

	.uni-card-footer {
		font-size: 22upx;
	}
</style>
