(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/hourdata/hourdata"],{3663:function(t,e,a){"use strict";a.r(e);var n=a("8426"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},"36d9":function(t,e,a){},8426:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("2f62");function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){i(t,e,a[e])})}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s,u,c=function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"7099"))},f={components:{wPicker:c},onLoad:function(){s=this,this.setPageTitle(),t.getSystemInfo({success:function(t){u=t.screenWidth-10}})},data:function(){return{title:"Hello",sdate:this.getNowFormatDate(),tabList:[{mode:"date",name:"日期选择",value:[this.getNowYear(),this.getNowMonth(),this.getNowDay()]}],tabIndex:0,listData:[],categories:[],chartData:[]}},onReady:function(){this.getListData(),this.getChartData()},computed:o({mode:function(){return this.tabList[this.tabIndex].mode},defaultVal:function(){return this.tabList[this.tabIndex].value}},(0,r.mapState)(["userInfo"])),methods:{toggleTab:function(t){this.tabIndex=t,this.$refs.picker.show()},onConfirm:function(t){this.sdate=t.result.replace(/-/g,""),this.setPageTitle(),this.getListData(),this.getChartData()},getListData:function(){s.http.get("airReport/getDayAirData",{date:this.sdate,fsiteNo:this.userInfo.orgNo},{baseUrl:this.$sys.getApiUrl()}).then(function(t){console.log(n(t.data.data.list," at pages\\report\\hourdata\\hourdata.vue:107")),200===t.data.code?s.listData=t.data.data.list:s.util.showToast(t.data.msg)})},getChartData:function(){s.http.get("airReport/getDayLineChart",{date:this.sdate,fsiteNo:this.userInfo.orgNo},{baseUrl:this.$sys.getApiUrl()}).then(function(t){if(200===t.data.code){var e=[];e=t.data.data.list.map(function(t){return parseInt(t.ftime)});var a=[];a[0]={name:"AQI",data:[]};var n=t.data.data.list.map(function(t){return t.faqi});a[0].data=n||[],s.util.showChartLine("charts",e,a,u)}else s.util.showToast(t.data.msg)})},goDetail:function(e,a){var n={id:e,orgName:a,date:this.sdate};t.navigateTo({url:"hourdata01?detail="+encodeURIComponent(JSON.stringify(n))})},getNowFormatDate:function(){var t=new Date,e="",a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();n>=1&&n<=9&&(n="0"+n),r>=0&&r<=9&&(r="0"+r);var o=a+e+n+e+r;return o},getNowYear:function(){var t=new Date,e=t.getFullYear(),a=e-2018;return a},getNowMonth:function(){var t=new Date,e=t.getMonth()+1,a=e-1;return a},getNowDay:function(){var t=new Date,e=t.getDate(),a=e-1;return a},setPageTitle:function(){t.setNavigationBarTitle({title:"".concat(this.sdate," ").concat(this.userInfo.orgName," 每日空气")})}}};e.default=f}).call(this,a("6e42")["default"],a("0de9")["default"])},"92cf":function(t,e,a){"use strict";a.r(e);var n=a("9b65"),r=a("3663");for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);a("f860");var i=a("2877"),s=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"9b65":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.listData,function(e,a){var n=t._f("intFielter")(e.faqi),r=t._f("emptyFielter")(e.faqiType),o=t._f("emptyFielter")(e.fcontaminants);return{$orig:t.__get_orig(e),f0:n,f1:r,f2:o}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},f860:function(t,e,a){"use strict";var n=a("36d9"),r=a.n(n);r.a}},[["2f4a","common/runtime","common/vendor"]]]);