(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/timedata/timedata22"],{"37ce":function(e,t,i){},"3a58":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o})},"46b9":function(e,t,i){"use strict";var a=i("37ce"),o=i.n(a);o.a},"8cc5":function(e,t,i){"use strict";(function(e){function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=i("4f0e"),l=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"PM2.5",data:86}]),n=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"PM10",data:[97]}]),s=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"甲醛",data:.05}]),c=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"TVOC",data:350}]),d=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"温度",data:31}]),u=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"湿度",data:35}]),h=a({categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},"series",[{name:"二氧化碳",data:535}]),g={series:[{data:90,name:"联网"},{data:10,name:"断网"}]},f={onLoad:function(t){o=this;new Object;JSON.parse(decodeURIComponent(t.detail));try{this.onload=JSON.parse(decodeURIComponent(t.detail))}catch(i){this.onload=JSON.parse(t.detail)}console.log(this.onload," at pages\\report\\timedata\\timedata22.vue:202"),e.setNavigationBarTitle({title:this.onload.storeName+"室内空气"}),e.getSystemInfo({success:function(e){200,o.pixelRatio=2}}),this.cWidth=e.upx2px(200),this.cHeight=e.upx2px(150),this.cWidth3=e.upx2px(250),this.cHeight3=e.upx2px(250),this.gaugeWidth=e.upx2px(10)},data:function(){return{cWidth3:"",cHeight3:"",pixelRatio:2}},onReady:function(){this.showArcbar3("canvasArcbar3",l),this.showArcbar3("canvasArcbar1",n),this.showArcbar4("canvasArcbar4",s),this.showArcbar5("canvasArcbar5",c),this.showArcbar6("canvasArcbar6",d),this.showArcbar6("canvasArcbar7",u),this.showArcbar7("canvasArcbar8",h),this.ShowCharts2("canvasArcbar9",g)},methods:{goDetail:function(t,i){var a={id:t,storeName:i};e.navigateTo({url:"timedata23?detail="+encodeURIComponent(JSON.stringify(a))})},ShowCharts2:function(e,t){new r({canvasId:e,type:"pie",fontSize:11,background:"#FFFFFF",animation:!0,series:t.series,width:165,height:165,dataLabel:!0,pixelRatio:1})},showArcbar3:function(e,t){new r({$this:o,canvasId:e,type:"gauge",fontSize:4,legend:!1,title:{name:Math.round(t.series[0].data)+"%",color:"#2fc25b",fontSize:5*o.pixelRatio,offsetY:10*o.pixelRatio},subtitle:{name:t.series[0].name,color:"#666666",fontSize:5*o.pixelRatio,offsetY:9*o.pixelRatio},extra:{gauge:{type:"default",width:1*o.gaugeWidth*o.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:100,splitLine:{fixRadius:0,splitNumber:10,width:o.gaugeWidth*o.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*o.gaugeWidth*o.pixelRatio},pointer:{width:.4*o.gaugeWidth*o.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:t.categories,series:t.series,animation:!0,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,dataLabel:!0})},showArcbar4:function(e,t){new r({$this:o,canvasId:e,type:"gauge",fontSize:4,legend:!1,title:{name:Math.round(t.series[0].data)+"%",color:"#2fc25b",fontSize:5*o.pixelRatio,offsetY:10*o.pixelRatio},subtitle:{name:t.series[0].name,color:"#666666",fontSize:5*o.pixelRatio,offsetY:9*o.pixelRatio},extra:{gauge:{type:"default",width:1*o.gaugeWidth*o.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:5,splitLine:{fixRadius:0,splitNumber:10,width:o.gaugeWidth*o.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*o.gaugeWidth*o.pixelRatio},pointer:{width:.4*o.gaugeWidth*o.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:t.categories,series:t.series,animation:!0,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,dataLabel:!0})},showArcbar5:function(e,t){new r({$this:o,canvasId:e,type:"gauge",fontSize:4,legend:!1,title:{name:Math.round(t.series[0].data)+"%",color:"#2fc25b",fontSize:5*o.pixelRatio,offsetY:10*o.pixelRatio},subtitle:{name:t.series[0].name,color:"#666666",fontSize:5*o.pixelRatio,offsetY:9*o.pixelRatio},extra:{gauge:{type:"default",width:1*o.gaugeWidth*o.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:4e3,splitLine:{fixRadius:0,splitNumber:10,width:o.gaugeWidth*o.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*o.gaugeWidth*o.pixelRatio},pointer:{width:.4*o.gaugeWidth*o.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:t.categories,series:t.series,animation:!0,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,dataLabel:!0})},showArcbar6:function(e,t){new r({$this:o,canvasId:e,type:"gauge",fontSize:4,legend:!1,title:{name:Math.round(t.series[0].data)+"%",color:"#2fc25b",fontSize:5*o.pixelRatio,offsetY:10*o.pixelRatio},subtitle:{name:t.series[0].name,color:"#666666",fontSize:5*o.pixelRatio,offsetY:9*o.pixelRatio},extra:{gauge:{type:"default",width:1*o.gaugeWidth*o.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:50,splitLine:{fixRadius:0,splitNumber:10,width:o.gaugeWidth*o.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*o.gaugeWidth*o.pixelRatio},pointer:{width:.4*o.gaugeWidth*o.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:t.categories,series:t.series,animation:!0,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,dataLabel:!0})},showArcbar7:function(e,t){new r({$this:o,canvasId:e,type:"gauge",fontSize:4,legend:!1,title:{name:Math.round(t.series[0].data)+"%",color:"#2fc25b",fontSize:5*o.pixelRatio,offsetY:10*o.pixelRatio},subtitle:{name:t.series[0].name,color:"#666666",fontSize:5*o.pixelRatio,offsetY:9*o.pixelRatio},extra:{gauge:{type:"default",width:1*o.gaugeWidth*o.pixelRatio,startAngle:.75,endAngle:.25,startNumber:0,endNumber:800,splitLine:{fixRadius:0,splitNumber:10,width:o.gaugeWidth*o.pixelRatio,color:"#FFFFFF",childNumber:5,childWidth:.4*o.gaugeWidth*o.pixelRatio},pointer:{width:.4*o.gaugeWidth*o.pixelRatio,color:"auto"}}},background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:t.categories,series:t.series,animation:!0,width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,dataLabel:!0})}}};t.default=f}).call(this,i("6e42")["default"])},"9ea2":function(e,t,i){"use strict";i.r(t);var a=i("3a58"),o=i("b522");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("46b9");var l=i("2877"),n=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=n.exports},b522:function(e,t,i){"use strict";i.r(t);var a=i("8cc5"),o=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=o.a}},[["42d8","common/runtime","common/vendor"]]]);