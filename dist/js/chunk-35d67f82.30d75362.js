(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35d67f82"],{"0a3c":function(t,n,r){},"25f0":function(t,n,r){"use strict";var e=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,f=u[c],s=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=c;(s||l)&&e(RegExp.prototype,c,(function(){var t=i(this),n=String(t.source),r=t.flags,e=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+n+"/"+e}),{unsafe:!0})},"3ca3":function(t,n,r){"use strict";var e=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",c=i.set,u=i.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,n=u(this),r=n.string,i=n.index;return i>=r.length?{value:void 0,done:!0}:(t=e(r,i),n.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,n,r){"use strict";var e=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),u=r("8418"),f=r("35a1");t.exports=function(t){var n,r,s,l,d,v,p=i(t),g="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,b=void 0!==h,m=f(p),w=0;if(b&&(h=e(h,y>2?arguments[2]:void 0,2)),void 0==m||g==Array&&a(m))for(n=c(p.length),r=new g(n);n>w;w++)v=b?h(p[w],w):p[w],u(r,w,v);else for(l=m.call(p),d=l.next,r=new g;!(s=d.call(l)).done;w++)v=b?o(l,h,[s.value,w],!0):s.value,u(r,w,v);return r.length=w,r}},"9bdd":function(t,n,r){var e=r("825a"),i=r("2a62");t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(a){throw i(t),a}}},a630:function(t,n,r){var e=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:a},{from:i})},b0c0:function(t,n,r){var e=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,u="name";e&&!(u in o)&&i(o,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},c547:function(t,n,r){"use strict";r("0a3c")},c646:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"swiper-image"},[r("van-swipe",{attrs:{autoplay:t.autoplay,"initial-swipe":t.initialSwipe,"indicator-color":"white"},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[r("div",{staticClass:"custom-indicator"},[t._v(" "+t._s(t.current+1)+"/"+t._s(t.goodsImageList.length)+" ")])]},proxy:!0}])},t._l(t.goodsImageList,(function(n,e){return r("van-swipe-item",{key:e,on:{click:function(n){return t.handCLick(e)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.goodsImage,expression:"item.goodsImage"}]})])})),1)],1)},i=[];r("a9e3"),r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("a630"),r("fb6a"),r("b0c0"),r("25f0");function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function a(t,n){if(t){if("string"===typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,n):void 0}}function c(t,n){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=a(t))||n&&t&&"number"===typeof t.length){r&&(t=r);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,o=t},f:function(){try{c||null==r["return"]||r["return"]()}finally{if(u)throw o}}}}var u=r("28a2"),f={props:{goodsImageList:{type:Array,default:function(){return[]}},autoplay:{type:Number,default:function(){return 3e3}}},data:function(){return{current:0,indicatorColor:"#ff0036",initialSwipe:0,previewCurrentIndex:0}},methods:{onChange:function(t){this.current=t},handCLick:function(t){var n,r=[],e=c(this.goodsImageList);try{for(e.s();!(n=e.n()).done;){var i=n.value;r.push(i.goodsImage)}}catch(o){e.e(o)}finally{e.f()}Object(u["a"])({images:r,showIndex:!0,loop:!1,startPosition:t,onChange:function(t){this.previewCurrentIndex=t},onClose:function(){this.initialSwipe=this.previewCurrentIndex}})}}},s=f,l=(r("c547"),r("2877")),d=Object(l["a"])(s,e,i,!1,null,"ab6bd146",null);n["default"]=d.exports},d28b:function(t,n,r){var e=r("746f");e("iterator")},ddb0:function(t,n,r){var e=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),c=r("b622"),u=c("iterator"),f=c("toStringTag"),s=o.values;for(var l in i){var d=e[l],v=d&&d.prototype;if(v){if(v[u]!==s)try{a(v,u,s)}catch(g){v[u]=s}if(v[f]||a(v,f,l),i[l])for(var p in o)if(v[p]!==o[p])try{a(v,p,o[p])}catch(g){v[p]=o[p]}}}},e01a:function(t,n,r){"use strict";var e=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),c=r("861d"),u=r("9bf2").f,f=r("e893"),s=o.Symbol;if(i&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(d,s);var v=d.prototype=s.prototype;v.constructor=d;var p=v.toString,g="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=p.call(t);if(a(l,t))return"";var r=g?n.slice(7,-1):n.replace(y,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,n,r){"use strict";var e=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),c=r("50c4"),u=r("fc6a"),f=r("8418"),s=r("b622"),l=r("1dde"),d=r("ae40"),v=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),g=s("species"),y=[].slice,h=Math.max;e({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,n){var r,e,s,l=u(this),d=c(l.length),v=a(t,d),p=a(void 0===n?d:n,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return y.call(l,v,p);for(e=new(void 0===r?Array:r)(h(p-v,0)),s=0;v<p;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})}}]);
//# sourceMappingURL=chunk-35d67f82.30d75362.js.map