(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19deeeac"],{"5ea8":function(t,n,a){},"84a2":function(t,n,a){(function(n){var a="Expected a function",i=NaN,e="[object Symbol]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),v=Object.prototype,p=v.toString,m=Math.max,h=Math.min,g=function(){return f.Date.now()};function _(t,n,i){var e,o,s,r,c,l,u=0,d=!1,f=!1,v=!0;if("function"!=typeof t)throw new TypeError(a);function p(n){var a=e,i=o;return e=o=void 0,u=n,r=t.apply(i,a),r}function _(t){return u=t,c=setTimeout(j,n),d?p(t):r}function b(t){var a=t-l,i=t-u,e=n-a;return f?h(e,s-i):e}function G(t){var a=t-l,i=t-u;return void 0===l||a>=n||a<0||f&&i>=s}function j(){var t=g();if(G(t))return y(t);c=setTimeout(j,b(t))}function y(t){return c=void 0,v&&e?p(t):(e=o=void 0,r)}function k(){void 0!==c&&clearTimeout(c),u=0,e=l=o=c=void 0}function P(){return void 0===c?r:y(g())}function I(){var t=g(),a=G(t);if(e=arguments,o=this,l=t,a){if(void 0===c)return _(l);if(f)return c=setTimeout(j,n),p(l)}return void 0===c&&(c=setTimeout(j,n)),r}return n=w(n)||0,C(i)&&(d=!!i.leading,f="maxWait"in i,s=f?m(w(i.maxWait)||0,n):s,v="trailing"in i?!!i.trailing:v),I.cancel=k,I.flush=P,I}function b(t,n,i){var e=!0,o=!0;if("function"!=typeof t)throw new TypeError(a);return C(i)&&(e="leading"in i?!!i.leading:e,o="trailing"in i?!!i.trailing:o),_(t,n,{leading:e,maxWait:n,trailing:o})}function C(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function G(t){return!!t&&"object"==typeof t}function j(t){return"symbol"==typeof t||G(t)&&p.call(t)==e}function w(t){if("number"==typeof t)return t;if(j(t))return i;if(C(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=C(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var a=r.test(t);return a||c.test(t)?l(t.slice(2),a?2:8):s.test(t)?i:+t}t.exports=b}).call(this,a("c8ba"))},eb62:function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"details-info"},[a("van-skeleton",{attrs:{title:"",row:3,loading:t.detailsInfoloading}},[a("div",{staticClass:"details-info-operate"},[a("div",{staticClass:"details-price-operate"},[a("div",{staticClass:"price"},[a("span",[t._v("¥")]),a("span",[t._v(t._s(t.goodsIntroduction.goodsItdPrice))])]),a("div",{staticClass:"operate",class:{collection:t.isCollection},on:{click:t.collectionGoods}},[a("van-icon",{attrs:{name:"gift-o"}}),a("span",[t._v("收藏")])],1)]),a("div",{staticClass:"goods-name-des"},[a("span",[t._v(t._s(t.goodsIntroduction.goodsItdName))]),a("span",[t._v(t._s(t.goodsIntroduction.goodsItdDec))])]),a("div",{staticClass:"other"},[a("span",{on:{click:t.recommend}},[a("van-icon",{attrs:{name:"like-o"}}),a("i",[t._v("推荐")])],1),a("span",{on:{click:t.helpMeChoose}},[a("van-icon",{attrs:{name:"friends-o"}}),a("i",[t._v("帮我选")])],1),a("span",{on:{click:t.share}},[a("van-icon",{attrs:{name:"share-o"}}),a("i",[t._v("分享")])],1)])])]),a("div",{staticClass:"goods-choice"},[a("div",{staticClass:"choice"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[a("span",[t._v("颜色分类")]),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)]),a("div",{staticClass:"bottom"})])]),a("div",{staticClass:"deliver-goods"},[t._m(1),a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[a("span",[t._v("上海市")]),a("span",[a("i",[t._v("月销100+")]),a("van-icon",{attrs:{name:"arrow"}})],1)]),t._m(2)])]),a("div",{staticClass:"guarantee",on:{click:t.openGuarantee}},[t._m(3),a("div",{staticClass:"right"},[a("span",[t._v("付款后48小时内发货 ▪订单险 ▪7天无理由")]),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)])]),a("div",{staticClass:"goods-params",on:{click:t.openGoodsParams}},[t._m(4),a("div",{staticClass:"right"},[a("span",[t._v("产地 是否手工...")]),a("span",[a("van-icon",{attrs:{name:"arrow"}})],1)])]),a("van-action-sheet",{model:{value:t.isGuarantee,callback:function(n){t.isGuarantee=n},expression:"isGuarantee"}},[a("goods-guarantee",{on:{goodsGuaranteeFinish:t.goodsGuaranteeFinish}})],1),a("van-action-sheet",{attrs:{title:"产品参数"},model:{value:t.isGoodsParams,callback:function(n){t.isGoodsParams=n},expression:"isGoodsParams"}},[a("goods-params",{on:{goodsParamsFinish:t.goodsParamsFinish}})],1)],1)],1)},e=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"left"},[a("span",[t._v("选择")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"left"},[a("span",[t._v("发货")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"bottom"},[a("span",[t._v("配送至武汉")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"left"},[a("span",[t._v("保障")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"left"},[a("span",[t._v("参数")])])}],o=(a("d3b7"),a("d399")),s=a("84a2"),r=a.n(s),c={props:{goodsIntroduction:{type:Object,default:function(){}}},watch:{goodsIntroduction:function(t){t.goodsItdPrice=t.goodsItdPrice}},components:{goodsParams:function(){return a.e("chunk-35310d71").then(a.bind(null,"af2f"))},goodsGuarantee:function(){return a.e("chunk-6afc3da6").then(a.bind(null,"12a2"))}},data:function(){return{isCollection:!1,detailsInfoloading:!0,isGoodsParams:!1,isGuarantee:!1}},methods:{collectionGoods:r()((function(){this.isCollection=!this.isCollection,this.isCollection?Object(o["a"])("宝贝收藏成功!"):Object(o["a"])("取消收藏~")}),1e3),recommend:r()((function(){Object(o["a"])("推荐")}),1500),helpMeChoose:r()((function(){Object(o["a"])("帮我选")}),1500),share:r()((function(){Object(o["a"])("分享")}),1500),openGuarantee:function(){this.isGuarantee=!0},goodsGuaranteeFinish:function(){this.isGuarantee=!1},openGoodsParams:function(){this.isGoodsParams=!0},goodsParamsFinish:function(){this.isGoodsParams=!1}},created:function(){this.detailsInfoloading=!1}},l=c,u=(a("f8e2"),a("2877")),d=Object(u["a"])(l,i,e,!1,null,"40495ad8",null);n["default"]=d.exports},f8e2:function(t,n,a){"use strict";a("5ea8")}}]);
//# sourceMappingURL=chunk-19deeeac.37032850.js.map