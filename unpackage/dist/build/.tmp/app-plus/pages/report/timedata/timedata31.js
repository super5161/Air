(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/timedata/timedata31"],{"1df6":function(t,e,a){"use strict";a.r(e);var i=a("a07a"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"22af":function(t,e,a){"use strict";a.r(e);var i=a("586e"),n=a("1df6");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("72bd");var s=a("2877"),c=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},"586e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"72bd":function(t,e,a){"use strict";var i=a("7dc3"),n=a.n(i);n.a},"7dc3":function(t,e,a){},a07a:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,n,o=a("2f62");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){c(t,e,a[e])})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={onLoad:function(){i=this,t.setNavigationBarTitle({title:"空气狗"}),t.getSystemInfo({success:function(t){n=t.screenWidth-10}}),this.getQuInfo()},computed:s({},(0,o.mapState)(["userInfo"])),data:function(){return{title:"picker",areaList:[],areaName:"",areaIndex:0,areaId:"",schoolList:[],schoolName:"",schoolIndex:0,schoolId:"",deviceList:[],deviceName:"",deviceIndex:0,deviceMac:"",item:[],fastItem:[]}},onReady:function(){},methods:{getQuInfo:function(){i.http.get("smartPhone/getQuInfoByUserId",{userId:this.userInfo.userId}).then(function(t){if(200===t.data.code){if(i.areaList=t.data.data.list,i.areaList.length>0){var e=i.areaList[0];i.areaName=e.fsiteName,i.areaId=e.fsiteNo}i.getSchools()}else i.util.showToast(t.data.msg)})},getSchools:function(){""!==this.areaId&&this.http.get("smartPhone/getSchoolInfo",{fsiteNo:i.areaId,userId:this.userInfo.userId}).then(function(t){if(200===t.data.code){if(i.schoolList=t.data.data.list,i.schoolList.length>0){var e=i.schoolList[0];i.schoolName=e.fsiteName,i.schoolId=e.fsiteNo}i.getDevices()}else i.util.showToast(t.data.msg)})},getDevices:function(){""!==this.schoolId&&this.http.get("smartPhone/getAirDogBySiteNo",{fsiteNo:i.schoolId}).then(function(t){if(200===t.data.code){if(i.deviceList=t.data.data.list.map(function(t){return{deviceName:"".concat(t.fpointName,"   ").concat(t.fequipmentname),deviceMac:t.fmacno}}),i.deviceList.length>0){var e=i.deviceList[0];i.deviceName=e.deviceName,i.deviceMac=e.deviceMac}i.showData()}else i.util.showToast(t.data.msg)})},areaChange:function(t){if(this.areaId!==t.target.value){var e=this.areaList[t.target.value];this.areaName=e.fsiteName,this.areaId=e.fsiteNo,this.areaIndex=t.target.value,this.getSchools()}},schoolChange:function(t){if(this.schoolId!==t.target.value){var e=this.schoolList[t.target.value];this.schoolName=e.fsiteName,this.schoolId=e.fsiteNo,this.schoolIndex=t.target.value,this.getDevices()}},deviceChange:function(t){if(this.deviceMac!==t.target.value){var e=this.deviceList[t.target.value];this.deviceName=e.deviceName,this.deviceMac=e.deviceMac,this.deviceIndex=t.target.value,this.showData()}},showData:function(){this.item=[],this.fastItem=[],""!==this.schoolId&&""!==this.areaId&&""!==this.deviceMac&&this.http.get("smartPhone/get24AqiByFmacno",{fmacno:i.deviceMac}).then(function(t){200===t.data.code?(i.item=t.data.data.list,i.item.length>0&&i.fastItem.push(i.item[0]),i.showCharts()):i.util.showToast(t.data.msg)})},showCharts:function(){var t=this.item.map(function(t){return t.fhour}),e=[{name:"PM2.5",data:this.item.map(function(t){return t.pm25})}],a=[{name:"PM10",data:this.item.map(function(t){return t.pm10})}],i=[{name:"二氧化碳",data:this.item.map(function(t){return t.co2})}],o=[{name:"甲醛",data:this.item.map(function(t){return t.hcho})}],s=[{name:"挥发性有机物",data:this.item.map(function(t){return t.tvoc})}];this.util.showChartLine("chartspm25",t,e,n),this.util.showChartLine("chartspm10",t,a,n),this.util.showChartLine("chartsco2",t,i,n),this.util.showChartLine("chartshcho",t,o,n),this.util.showChartLine("chartstvoc",t,s,n)}}};e.default=r}).call(this,a("6e42")["default"])}},[["c816","common/runtime","common/vendor"]]]);