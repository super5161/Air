(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/daytotal/daytotal01"],{"320c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"f440"))},i=n("4f0e"),r={series:[{data:15,name:"优良"},{data:8,name:"轻度污染"},{data:5,name:"中度污染"},{data:3,name:"重度污染"},{data:2,name:"严重污染"}]},u={components:{wPicker:o},onLoad:function(){t.setNavigationBarTitle({title:this.getNowFormatMonth()+"市空气统计"}),t.getSystemInfo({success:function(t){a=t.screenWidth-10}})},data:function(){return{title:"Hello",sdate:this.getNowFormatMonth(),tabList:[{mode:"yearMonth",name:"年月",value:[this.getNowYear(),this.getNowMonth()]}],tabIndex:0}},computed:{mode:function(){return this.tabList[this.tabIndex].mode},defaultVal:function(){return this.tabList[this.tabIndex].value}},onReady:function(){this.ShowCharts("charts",r)},methods:{toggleTab:function(t){this.tabIndex=t,this.$refs.picker.show()},onConfirm:function(e){this.sdate=e.result,console.log(e.result," at pages\\report\\daytotal\\daytotal01.vue:158"),t.setNavigationBarTitle({title:e.result+"市空气统计"})},ShowCharts:function(t,e){new i({canvasId:t,type:"pie",fontSize:11,background:"#FFFFFF",animation:!0,series:e.series,width:a,height:280,dataLabel:!0,pixelRatio:1})},goDetail:function(e,n){var a={id:e,storeName:n,date:this.sdate};t.navigateTo({url:"daytotal02?detail="+encodeURIComponent(JSON.stringify(a))})},getNowFormatMonth:function(){var t=new Date,e="-",n=t.getFullYear(),a=t.getMonth()+1;a>=1&&a<=9&&(a="0"+a);var o=n+e+a;return o},getNowYear:function(){var t=new Date,e=t.getFullYear(),n=e-2018;return n},getNowMonth:function(){var t=new Date,e=t.getMonth()+1,n=e-1;return n}}};e.default=u}).call(this,n("6e42")["default"])},"4eea":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},9615:function(t,e,n){},"9f60":function(t,e,n){"use strict";var a=n("9615"),o=n.n(a);o.a},b075:function(t,e,n){"use strict";n.r(e);var a=n("4eea"),o=n("f63d");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("9f60");var r=n("2877"),u=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},f63d:function(t,e,n){"use strict";n.r(e);var a=n("320c"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["d136","common/runtime","common/vendor"]]]);