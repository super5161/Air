(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/column"],{a702:function(n,t,e){"use strict";e.r(t);var a=e("b435"),o=e("e0b3");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);var u=e("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},b435:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},b9dd:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=e("50be"),r={categories:["2012","2013","2014","2015"],series:[{name:"成交量",data:[396,423,418,363]},{name:"成交量",data:[337,336,327,337]},{name:"成交量",data:[14,15,13,14]},{name:"成交量",data:[68,84,89,86]}]},u={data:function(){return{}},onLoad:function(){n.getSystemInfo({success:function(n){a=n.screenWidth-10}})},onReady:function(){this.ShowCharts("charts",r)},methods:{ShowCharts:function(n,t){new o({canvasId:n,type:"column",legend:!0,fontSize:11,background:"#FFFFFF",yAxis:{format:function(n){return n+"万"},min:0},animation:!0,categories:t.categories,series:t.series,width:a,height:280})}}};t.default=u}).call(this,e("6e42")["default"])},e0b3:function(n,t,e){"use strict";e.r(t);var a=e("b9dd"),o=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=o.a}},[["2a42","common/runtime","common/vendor"]]]);