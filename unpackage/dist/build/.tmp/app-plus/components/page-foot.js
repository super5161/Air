(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-foot"],{"0cd8":function(e,t,n){},3777:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"8c6a":function(e,t,n){"use strict";(function(e){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"page-foot",data:function(){return{footerTop:"",foots:[]}},props:{tab:""},created:function(){n=this,e.getSystemInfo({success:function(e){n.footerTop="top:"+(e.screenHeight-60)+"px"}}),n.foots=[{id:0,text:n.res.honeText,type:"home",page:"/pages/index/index"},{id:2,text:n.res.mynote,type:"message",page:"/pages/note/index"},{id:3,text:n.res.myText,type:"my",page:"/pages/user/index"}]},computed:{res:function(){return this.$t("res.foot")}},methods:{}};t.default=o}).call(this,n("6e42")["default"])},ab05:function(e,t,n){"use strict";var o=n("0cd8"),a=n.n(o);a.a},c440:function(e,t,n){"use strict";n.r(t);var o=n("3777"),a=n("e4e5");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("ab05");var u=n("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},e4e5:function(e,t,n){"use strict";n.r(t);var o=n("8c6a"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-foot-create-component',
    {
        'components/page-foot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("c440"))
        })
    },
    [['components/page-foot-create-component']]
]);                
