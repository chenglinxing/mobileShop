(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b31e21d"],{3867:function(t,n,i){},"76bf":function(t,n,i){"use strict";i("3867")},"84a2":function(t,n,i){(function(n){var i="Expected a function",e=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),v=Object.prototype,m=v.toString,p=Math.max,b=Math.min,h=function(){return d.Date.now()};function g(t,n,e){var o,r,c,u,a,f,s=0,l=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function m(n){var i=o,e=r;return o=r=void 0,s=n,u=t.apply(e,i),u}function g(t){return s=t,a=setTimeout(w,n),l?m(t):u}function x(t){var i=t-f,e=t-s,o=n-i;return d?b(o,c-e):o}function j(t){var i=t-f,e=t-s;return void 0===f||i>=n||i<0||d&&e>=c}function w(){var t=h();if(j(t))return T(t);a=setTimeout(w,x(t))}function T(t){return a=void 0,v&&o?m(t):(o=r=void 0,u)}function k(){void 0!==a&&clearTimeout(a),s=0,o=f=r=a=void 0}function $(){return void 0===a?u:T(h())}function _(){var t=h(),i=j(t);if(o=arguments,r=this,f=t,i){if(void 0===a)return g(f);if(d)return a=setTimeout(w,n),m(f)}return void 0===a&&(a=setTimeout(w,n)),u}return n=O(n)||0,y(e)&&(l=!!e.leading,d="maxWait"in e,c=d?p(O(e.maxWait)||0,n):c,v="trailing"in e?!!e.trailing:v),_.cancel=k,_.flush=$,_}function x(t,n,e){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return y(e)&&(o="leading"in e?!!e.leading:o,r="trailing"in e?!!e.trailing:r),g(t,n,{leading:o,maxWait:n,trailing:r})}function y(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function j(t){return!!t&&"object"==typeof t}function w(t){return"symbol"==typeof t||j(t)&&m.call(t)==o}function O(t){if("number"==typeof t)return t;if(w(t))return e;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||a.test(t)?f(t.slice(2),i?2:8):c.test(t)?e:+t}t.exports=x}).call(this,i("c8ba"))},bf5b:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"menu-control-item"},[i("van-grid",{attrs:{border:!1,"column-num":"5"}},t._l(t.itemList,(function(n,e){return i("van-grid-item",{key:e,attrs:{text:n.text},on:{click:function(i){return t.handleGridItem(e,n.text)}}},[i("div",{attrs:{slot:"icon"},slot:"icon"},[i("svg",{staticClass:"icon tianmao1",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#"+n.icon}})])])])})),1)],1)},o=[],r=i("d399"),c=i("84a2"),u=i.n(c),a={data:function(){return{itemList:[{icon:"icon-gouwu-2",text:"京东超市"},{icon:"icon-Cshuma",text:"数码电器"},{icon:"icon-clothes",text:"潮流服饰"},{icon:"icon-chongzhijiaofei",text:"充值缴费"},{icon:"icon-biaoqianA01_lvhang-263",text:"京东旅行"},{icon:"icon-S_zaixiangouyaoshangcheng",text:"看病购药"},{icon:"icon-mengchong",text:"京东萌宠"},{icon:"icon-paimai",text:"京东拍卖"},{icon:"icon-zu14",text:"领券中心"},{icon:"icon-huiyuan",text:"京东会员"}]}},methods:{handleGridItem:u()((function(t,n){Object(r["a"])(n)}),1500)}},f=a,s=(i("76bf"),i("2877")),l=Object(s["a"])(f,e,o,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2b31e21d.d24a69c2.js.map