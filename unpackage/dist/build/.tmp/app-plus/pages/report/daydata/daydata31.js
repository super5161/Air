(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/daydata/daydata31"],{"16ec":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=a("4f0e"),r={categories:["2019/1","2019/2","2019/3","2019/4","2019/5","2019/6"],series:[{name:"AQI",data:[363,370,360,396,423,418]}]},o={onLoad:function(){t.setNavigationBarTitle({title:this.getNowFormatYear()+"市空气质量"}),t.getSystemInfo({success:function(t){n=t.screenWidth-10}})},data:function(){return{sdate:this.getNowFormatYear(),array:["2017","2018","2019","2020"],index:2}},onReady:function(){this.ShowCharts("charts",r)},methods:{bindPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value," at pages\\report\\daydata\\daydata31.vue:94"),this.index=e.target.value,t.setNavigationBarTitle({title:this.array[this.index]+"市空气质量"})},ShowCharts:function(t,e){new i({canvasId:t,type:"line",legend:!0,fontSize:11,background:"#FFFFFF",animation:!0,categories:e.categories,series:e.series,width:n,height:280,pixelRatio:1})},goDetail:function(e,a){var n={id:e,storeName:a,date:this.array[this.index]};t.navigateTo({url:"daydata32?detail="+encodeURIComponent(JSON.stringify(n))})},getNowFormatYear:function(){var t=new Date,e=t.getFullYear(),a=e;return a}}};e.default=o}).call(this,a("6e42")["default"])},"98d5":function(t,e,a){},b58d:function(t,e,a){"use strict";a.r(e);var n=a("f8ab"),i=a("d4c3");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("b821");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},b821:function(t,e,a){"use strict";var n=a("98d5"),i=a.n(n);i.a},d4c3:function(t,e,a){"use strict";a.r(e);var n=a("16ec"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},f8ab:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}},[["c756","common/runtime","common/vendor"]]]);