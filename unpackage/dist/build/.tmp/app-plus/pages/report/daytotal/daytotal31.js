(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/daytotal/daytotal31"],{"10b1":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r,i=a("2f62");function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){s(t,e,a[e])})}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u=function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"7099"))},f={components:{wPicker:u},onLoad:function(){n=this,this.setPageTitle(),t.getSystemInfo({success:function(t){r=t.screenWidth-10}})},data:function(){return{sdate:this.getNowFormatYear(),tabList:[{mode:"year",name:"年",value:[this.getYearIndex()]}],tabIndex:0,dataList:[]}},onReady:function(){this.getDate()},computed:o({mode:function(){return this.tabList[this.tabIndex].mode},defaultVal:function(){return this.tabList[this.tabIndex].value}},(0,i.mapState)(["userInfo"])),methods:{toggleTab:function(t){this.tabIndex=t,this.$refs.picker.show()},onConfirm:function(t){var e=t.result;this.sdate=e,this.setPageTitle(),this.getDate()},getDate:function(){n.http.get("airReport/getYearStatistics",{year:this.sdate,fsiteNo:this.userInfo.orgNo},{baseUrl:this.$sys.getApiUrl()}).then(function(t){if(200===t.data.code){n.dataList=t.data.data.list;var e=[];t.data.data.list&&t.data.data.list.length>0&&t.data.data.list.map(function(t){e.push({name:t.faqiName,data:parseInt(t.faqiDay)})}),n.util.showChartPie("charts",e,r)}else n.util.showToast(t.data.msg)})},getNowFormatYear:function(){var t=new Date,e=t.getFullYear(),a=e;return a},getYearIndex:function(){var t=new Date,e=t.getFullYear(),a=e-2018;return a},setPageTitle:function(){t.setNavigationBarTitle({title:"".concat(this.sdate," ").concat(this.userInfo.orgName," 市空气统计")})}}};e.default=f}).call(this,a("6e42")["default"])},2888:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.dataList,function(e,a){var n=t._f("intFielter")(e.faqiDay),r=t._f("emptyFielter")(e.faqiRate),i=t._f("emptyFielter")(e.ftbDay),o=t._f("intFielter")(e.ftbRate),s=t._f("emptyFielter")(e.fhbDay),u=t._f("emptyFielter")(e.fhbRate);return{$orig:t.__get_orig(e),f0:n,f1:r,f2:i,f3:o,f4:s,f5:u}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})},"332d":function(t,e,a){"use strict";a.r(e);var n=a("2888"),r=a("ee14");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("37ad");var o=a("2877"),s=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"37ad":function(t,e,a){"use strict";var n=a("760e"),r=a.n(n);r.a},"760e":function(t,e,a){},ee14:function(t,e,a){"use strict";a.r(e);var n=a("10b1"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=r.a}},[["5fa8","common/runtime","common/vendor"]]]);