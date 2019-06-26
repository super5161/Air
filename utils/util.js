//全局工具函数
"use strict";
var wxCharts = require("./wxcharts.js");
export default {
	/*计算固定位置*/
	fixedTop(h) {
		return new Promise((resolve, reject) => {
			uni.getSystemInfo({
				success(res) {
					var height = res.windowHeight;
					var navHeight = res.windowTop === undefined ? 0 : res.windowTop;
					var top = height + navHeight - h;
					resolve(top);
				}
			});
		});
	},
	//显示Toast消息
	showToast(msg) {
		uni.showToast({
			title: msg,
			icon: "none"
		})
	},
	/*
	 *显示饼图
	 * chartid 图表ID
	 * data 饼图数据
	 * width 图表显示宽度
	 */
	showChartPie(chartid, data, width) {
		data = data || [];
		if (data.length <= 0) {
			data.push({
				name: '没有数据',
				data: 0
			});
		}
		let Charts = new wxCharts({
			canvasId: chartid,
			type: 'pie',
			fontSize: 11,
			background: '#FFFFFF',
			animation: true,
			series: data,
			width: width,
			height: 280,
			dataLabel: true,
			pixelRatio: 1,
		});
	},

	/*
	 * 显示折线图
	 * chartid 图表ID
	 * categories 组
	 * series 数据
	 * width 图表显示宽度
	 */
	showChartLine(chartid, categories, series, width) {
		categories = categories || [];
		if (categories.length <= 0) {
			categories.push('');
		}
		series[0].data = series[0].data || [];
		if (series[0].data.length <= 0) {
			series[0].name = "没有数据";
			series[0].data.push(0);
		}

		let Charts = new wxCharts({
			canvasId: "charts",
			type: 'line',
			legend: true,
			fontSize: 11,
			background: '#FFFFFF',
			animation: false,
			series: series,
			categories: categories,
			width: width,
			height: 280,
			pixelRatio: 1,
		});
	}

};
