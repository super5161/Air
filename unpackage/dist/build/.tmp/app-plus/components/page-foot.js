(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-foot"],{"000a":function(t,e,n){"use strict";n.r(e);var o=n("8112"),u=n("6854");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("08b7");var a=n("2877"),f=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=f.exports},"08b7":function(t,e,n){"use strict";var o=n("0a58"),u=n.n(o);u.a},"0a58":function(t,e,n){},2389:function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"page-foot",data:function(){return{footerTop:"",foots:[]}},props:{tab:""},created:function(){n=this,t.getSystemInfo({success:function(t){n.footerTop="top:"+(t.screenHeight-60)+"px"}}),n.foots=[{id:0,text:n.res.honeText,type:"home",page:"/pages/index/index"},{id:1,text:n.res.myText,type:"my",page:"/pages/user/index"}]},computed:{res:function(){return this.$t("res.foot")}},methods:{}};e.default=o}).call(this,n("6e42")["default"])},6854:function(t,e,n){"use strict";n.r(e);var o=n("2389"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},8112:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-foot-create-component',
    {
        'components/page-foot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("000a"))
        })
    },
    [['components/page-foot-create-component']]
]);                
