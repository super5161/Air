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
			canvasId: chartid,
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
	},

	/**
	 * 显示仪表盘 显示为百分比
	 * chartid 图表ID
	 * name 显示名称
	 * pixelRatio 
	 * gaugeWidth 仪表盘背景的宽度
	 * width 宽度
	 * height 高度
	 * */
	showChartGauge(chartid, series, pixelRatio, gaugeWidth, width, height) {
		let categories = [{
				min: 0,
				max: 100,
				value: 0.2,
				color: '#8DC120'
			},
			{
				value: 0.4,
				color: '#E8BE2C'
			},
			{
				value: 0.6,
				color: '#EF8724'
			},
			{
				value: 0.8,
				color: '#BF1229'
			}, {
				value: 1,
				color: '#5C1E82'
			}
		];
		let Charts = new wxCharts({
			canvasId: chartid,
			type: 'gauge',
			fontSize: 4,
			legend: false,
			subtitle: {
				name: series[0].name,
				color: '#666666',
				fontSize: 5 * pixelRatio,
				offsetY: 9 * pixelRatio,
			},
			extra: {
				gauge: {
					type: 'default',
					width: gaugeWidth * 1 * pixelRatio,
					startAngle: 0.75,
					endAngle: 0.25,
					startNumber: 0,
					endNumber: 100,
					splitLine: {
						fixRadius: 0,
						splitNumber: 10,
						width: gaugeWidth * pixelRatio,
						color: '#FFFFFF',
						childNumber: 5,
						childWidth: gaugeWidth * 0.4 * pixelRatio,
					},
					pointer: {
						width: gaugeWidth * 0.4 * pixelRatio, //指针宽度
						color: 'auto'
					}
				}
			},
			background: '#FFFFFF',
			pixelRatio: pixelRatio,
			categories: categories,
			series: series,
			animation: true,
			width: width * pixelRatio,
			height: height * pixelRatio,
			dataLabel: true,
		});
	},

	/**
	 * 显示圆弧图
	 *  chartid 图表ID
	 * chartData 数据
	 * */
	showChartArcbar(chartid, chartData, pixelRatio, width, height) {
		let Charts = new wxCharts({
			canvasId: chartid,
			type: 'arcbar',
			fontSize: 11,
			legend: false,
			title: {
				name: chartData.series[0].data * 100 + '%',
				color: '#667766',
				fontSize: 10
			},
			subtitle: {
				name: chartData.series[0].name,
				color: '#666666',
				fontSize: 10
			},
			extra: {
				arcbar: {
					type: 'default', //整圆类型进度条图
					width: 10,
					startAngle: 0, //整圆类型只需配置起始角度即可
					backgroundColor: '#ffe3e8',
				},
				ringChart: 1000
			},
			background: '#FFFFFF',
			pixelRatio: pixelRatio,
			series: chartData.series,
			animation: true,
			width: width * pixelRatio,
			height: height * pixelRatio,
			dataLabel: true,
		});
	},

	/**
	 * 显示柱状图
	 * chartid 图表ID
	 * chartData 数据
	 * */
	showChartColumn(chartid, chartData) {
		if (chartData.categories.length <= 0) {
			chartData.categories.push('');
		}
		chartData.series[0].data = chartData.series[0].data || [];
		if (chartData.series[0].data.length <= 0) {
			chartData.series[0].name = "没有数据";
			chartData.series[0].data.push(0);
		}
		let Charts = new wxCharts({
			canvasId: chartid,
			type: 'column',
			legend: true,
			fontSize: 10,
			background: '#FFFFFF',
			animation: true,
			categories: chartData.categories,
			series: chartData.series,
			width: 350,
			height: 350,
			pixelRatio: 1,
			rotate: true, //横屏模式
			xAxis: {
				disableGrid: false,
			},
			yAxis: {
				disabled: false
			},
			dataLabel: true,
			extra: {
				column: {
					width: 300
				}
			}
		});
		return Charts;
	},

	/**
	 * 百分比计算
	 * value需要计算的值
	 */
	percentage(value) {
		if (value) {
			return value / 100;
		}
		return 0;
	},

	/*
	 *异步错误返回
	 */
	asyncError(msg) {
		return new Promise((resolve, reject) => {
			reject(msg);
		});
	},
};
