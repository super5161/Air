(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0c7b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=n("2f62");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u,s,c=[{key:"zh-CN",text:"中文简体"},{key:"zh-Tw",text:"中文繁体"},{key:"en-US",text:"English"}],f={data:function(){return{tenantId:"",username:"",password:"",versionTop:"",langText:"中文简体",langKey:""}},computed:{res:function(){return this.$t("res.login")}},onLoad:function(){a=this,u=c.map(function(t){return t.key}),s=c.map(function(t){return t.text})},onReady:function(){},methods:o({Login:function(){var e=a.tenantId.trim(),n=a.username.trim(),r=a.password.trim();if(0!=e.length)if(0!=n.length)if(0!=r.length){var o=this.$sys.getSysInfo();a.http.get("smartPhone/getTenantInfo",{fno:e},{baseUrl:o.updateServer}).then(function(t){if(200==t.data.code){var e=t.data.data;return a.$sys.setTenant({tenantId:e.fno,tenantName:e.fname,apiUrl:e.fapiUrl}),a.http.post("data/person/login",{fuserno:n,fpassword:r},{baseUrl:e.fapiUrl})}return a.util.asyncError(t.data.data)}).then(function(e){if(200!==e.data.code)return a.util.asyncError(e.data.data);var r={userId:n,userName:e.data.data.fusername,orgNo:e.data.data.fsiteNo,orgName:e.data.data.fsiteName,orgLevel:e.data.data.fsiteLevel};a.login(r),t.redirectTo({url:"/pages/index/index"})}).catch(function(t){t.errMsg?a.util.showToast("服务器响应超时"):a.util.showToast(t)})}else a.util.showToast("密码必须填写");else a.util.showToast("用户名必须填写");else a.util.showToast("客户编号必须填写")},ChangeLange:function(){t.showActionSheet({itemList:s,success:function(t){a.langText=s[t.tapIndex],a.langKeys=u[t.tapIndex],a.$i18n.locale=a.langKeys}})}},(0,r.mapMutations)(["login"]))};e.default=f}).call(this,n("6e42")["default"])},"26cc":function(t,e,n){"use strict";n.r(e);var a=n("7906"),r=n("fadf");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("5055");var i=n("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},5055:function(t,e,n){"use strict";var a=n("c889"),r=n.n(a);r.a},7906:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},c889:function(t,e,n){},fadf:function(t,e,n){"use strict";n.r(e);var a=n("0c7b"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a}},[["184c","common/runtime","common/vendor"]]]);