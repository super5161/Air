(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/timedata/timedata02"],{"3c05":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},4336:function(e,t,a){},"48ba":function(e,t,a){"use strict";a.r(t);var i=a("3c05"),n=a("5632");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("526b");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"526b":function(e,t,a){"use strict";var i=a("4336"),n=a.n(i);n.a},5632:function(e,t,a){"use strict";a.r(t);var i=a("6be7"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},"6be7":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=a("4f0e"),o={categories:["莘庄中学","颛桥中学","北桥中学"],series:[{name:"AQI",data:[50,46,41]}]},r={categories:["同比"],series:[{name:"同比",data:[90]}]},s={categories:["环比"],series:[{name:"环比",data:[93]}]},c={series:[{data:85,name:"联网"},{data:15,name:"断网"}]},d={onLoad:function(t){i=this;new Object;JSON.parse(decodeURIComponent(t.detail));try{this.onload=JSON.parse(decodeURIComponent(t.detail))}catch(a){this.onload=JSON.parse(t.detail)}console.log(this.onload," at pages\\report\\timedata\\timedata02.vue:129"),e.setNavigationBarTitle({title:this.onload.storeName+"室外空气"}),e.getSystemInfo({success:function(e){e.screenWidth-10,i.pixelRatio=2}}),this.cWidth3=e.upx2px(135),this.cHeight3=e.upx2px(135)},data:function(){return{cWidth3:"",cHeight3:"",pixelRatio:1}},onReady:function(){this.ShowCharts("charts",o),this.showArcbar3("canvasArcbar3",r),this.showArcbar3("canvasArcbar1",s),this.ShowCharts2("canvasArcbar2",c)},methods:{ShowCharts2:function(e,t){new n({canvasId:e,type:"pie",fontSize:11,background:"#FFFFFF",animation:!0,series:t.series,width:165,height:165,dataLabel:!0,pixelRatio:1})},touch:function(t){console.log(t," at pages\\report\\timedata\\timedata02.vue:173");var a={id:"200001",storeName:"莘庄中学"};e.navigateTo({url:"timedata03?detail="+encodeURIComponent(JSON.stringify(a))})},ShowCharts:function(e,t){new n({canvasId:e,type:"column",legend:!0,fontSize:10,background:"#FFFFFF",animation:!0,categories:t.categories,series:t.series,width:350,height:350,pixelRatio:1,rotate:!0,xAxis:{disableGrid:!1},yAxis:{disabled:!1},dataLabel:!0,extra:{column:{width:300}}})},showArcbar3:function(e,t){console.log(t," at pages\\report\\timedata\\timedata02.vue:224"),new n({canvasId:e,type:"arcbar",fontSize:11,legend:!1,title:{name:t.series[0].data+"%",color:"#667766",fontSize:10},subtitle:{name:t.series[0].name,color:"#666666",fontSize:10},extra:{arcbar:{type:"default",width:10,startAngle:0,backgroundColor:"#ffe3e8"},ringChart:1e3},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:t.series,animation:!0,width:i.cWidth3*i.pixelRatio,height:i.cHeight3*i.pixelRatio,dataLabel:!0})}}};t.default=d}).call(this,a("6e42")["default"])}},[["ad0c","common/runtime","common/vendor"]]]);