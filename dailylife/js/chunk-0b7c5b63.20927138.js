(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b7c5b63"],{"0c4f":function(t,e,o){"use strict";o("5dde")},"14c3":function(t,e,o){var n=o("c6b6"),s=o("9263");t.exports=function(t,e){var o=t.exec;if("function"===typeof o){var i=o.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},5319:function(t,e,o){"use strict";var n=o("d784"),s=o("825a"),i=o("7b0b"),a=o("50c4"),r=o("a691"),c=o("1d80"),u=o("8aa5"),d=o("14c3"),l=Math.max,g=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,o,n){var k=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,x=k?"$":"$0";return[function(o,n){var s=c(this),i=void 0==o?void 0:o[t];return void 0!==i?i.call(o,s,n):e.call(String(s),o,n)},function(t,n){if(!k&&m||"string"===typeof n&&-1===n.indexOf(x)){var i=o(e,t,this,n);if(i.done)return i.value}var c=s(t),f=String(this),h="function"===typeof n;h||(n=String(n));var p=c.global;if(p){var b=c.unicode;c.lastIndex=0}var _=[];while(1){var E=d(c,f);if(null===E)break;if(_.push(E),!p)break;var S=String(E[0]);""===S&&(c.lastIndex=u(f,a(c.lastIndex),b))}for(var y="",C=0,w=0;w<_.length;w++){E=_[w];for(var R=String(E[0]),L=l(g(r(E.index),f.length),0),$=[],D=1;D<E.length;D++)$.push(v(E[D]));var A=E.groups;if(h){var N=[R].concat($,L,f);void 0!==A&&N.push(A);var T=String(n.apply(void 0,N))}else T=I(R,f,L,$,A,n);L>=C&&(y+=f.slice(C,L)+T,C=L+R.length)}return y+f.slice(C)}];function I(t,o,n,s,a,r){var c=n+t.length,u=s.length,d=p;return void 0!==a&&(a=i(a),d=h),e.call(r,d,(function(e,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return o.slice(0,n);case"'":return o.slice(c);case"<":r=a[i.slice(1,-1)];break;default:var d=+i;if(0===d)return e;if(d>u){var l=f(d/10);return 0===l?e:l<=u?void 0===s[l-1]?i.charAt(1):s[l-1]+i.charAt(1):e}r=s[d-1]}return void 0===r?"":r}))}}))},"5dde":function(t,e,o){},6547:function(t,e,o){var n=o("a691"),s=o("1d80"),i=function(t){return function(e,o){var i,a,r=String(s(e)),c=n(o),u=r.length;return c<0||c>=u?t?"":void 0:(i=r.charCodeAt(c),i<55296||i>56319||c+1===u||(a=r.charCodeAt(c+1))<56320||a>57343?t?r.charAt(c):i:t?r.slice(c,c+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,e,o){"use strict";var n=o("6547").charAt;t.exports=function(t,e,o){return e+(o?n(t,e).length:1)}},9263:function(t,e,o){"use strict";var n=o("ad6d"),s=o("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,r=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],l=c||d||u;l&&(r=function(t){var e,o,s,r,l=this,g=u&&l.sticky,f=n.call(l),h=l.source,p=0,v=t;return g&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),v=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,p++),o=new RegExp("^(?:"+h+")",f)),d&&(o=new RegExp("^"+h+"$(?!\\s)",f)),c&&(e=l.lastIndex),s=i.call(g?o:l,v),g?s?(s.input=s.input.slice(p),s[0]=s[0].slice(p),s.index=l.lastIndex,l.lastIndex+=s[0].length):l.lastIndex=0:c&&s&&(l.lastIndex=l.global?s.index+s[0].length:e),d&&s&&s.length>1&&a.call(s[0],o,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(s[r]=void 0)})),s}),t.exports=r},"9f7f":function(t,e,o){"use strict";var n=o("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,o){"use strict";var n=o("23e7"),s=o("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,o){"use strict";var n=o("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d08a:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"goods-details"},[o("van-tabs",{staticClass:"van-tabs",attrs:{scrollspy:"",sticky:""},on:{scroll:t.handleScroll,click:t.handleTabs},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[o("div",{staticClass:"left-return",attrs:{slot:"nav-left"},slot:"nav-left"},[o("van-icon",{attrs:{name:"arrow-left"},on:{click:t.returnGoodsList}})],1),o("div",{staticClass:"right-share",attrs:{slot:"nav-right"},slot:"nav-right"},[o("van-icon",{attrs:{name:"shopping-cart-o"},on:{click:t.shoppingCart}})],1),o("van-tab",{attrs:{title:"商品"}},[o("swiper-image",{staticClass:"swiper-image",attrs:{goodsImageList:t.goodsImageList}}),o("details-info",{attrs:{goodsIntroduction:t.goodsIntroduction}})],1),o("van-tab",{attrs:{title:"详情"}},[t._v("详情 ")]),o("van-tab",{attrs:{title:"评价"}},[t._v("评价 ")]),o("van-tab",{attrs:{title:"推荐"}},[t._v("推荐 ")])],1),o("van-sku",{attrs:{sku:t.skuData.sku,goods:t.skuData.goods_info,"goods-id":t.skuData.goods_id,"hide-stock":t.skuData.sku.hide_stock,quota:t.skuData.quota,"quota-used":t.skuData.quota_used,"initial-sku":t.initialSku,"reset-stepper-on-hide":"","reset-selected-sku-on-hide":"","disable-stepper-input":""},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},model:{value:t.showBase,callback:function(e){t.showBase=e},expression:"showBase"}}),o("add-goods-cart",{on:{addToCart:t.addToCart,buyNow:t.buyNow}})],1)},s=[],i=(o("4160"),o("a9e3"),o("d3b7"),o("ac1f"),o("5319"),o("159b"),o("96cf"),o("1da1")),a=o("f2ab"),r={sku:{tree:[{k:"颜色",k_id:"1",v:[{id:"30349",name:"天蓝色",imgUrl:"https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"},{id:"1215",name:"白色"}],k_s:"s1",count:2},{k:"尺寸",k_id:"2",v:[{id:"1193",name:"1"},{id:"1194",name:"2"}],k_s:"s2",count:2}],list:[{id:2259,price:120,discount:122,s1:"1215",s2:"1193",s3:"0",s4:"0",s5:"0",stock_num:20,goods_id:946755},{id:2260,price:110,discount:112,s1:"1215",s2:"1194",s3:"0",s4:"0",s5:"0",stock_num:2,goods_id:946755},{id:2257,price:130,discount:132,s1:"30349",s2:"1193",s3:"0",s4:"0",s5:"0",stock_num:40,goods_id:946755},{id:2258,price:100,discount:100,s1:"30349",s2:"1194",s3:"0",s4:"0",s5:"0",stock_num:50,goods_id:946755}],price:"5.00",stock_num:227,none_sku:!1,hide_stock:!1},goods_id:"946755",quota:3,quota_used:0,goods_info:{title:"测试商品A",picture:"https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg"},initialSku:{s1:"0001",s2:"1001",selectedNum:3}},c={components:{SwiperImage:function(){return o.e("chunk-35d67f82").then(o.bind(null,"c646"))},DetailsInfo:function(){return o.e("chunk-19deeeac").then(o.bind(null,"eb62"))},AddGoodsCart:function(){return o.e("chunk-2d0e55e5").then(o.bind(null,"93d9"))},BScroll:function(){return o.e("chunk-2d213193").then(o.bind(null,"aada"))}},data:function(){return{active:0,tabsList:[{key:0,title:"商品"},{key:1,title:"评价"},{key:2,title:"详情"},{key:3,title:"推荐"}],goodsDetaiInfo:[],skuData:r,showBase:!1,showCustom:!1,showStepper:!1,showSoldout:!1,closeOnClickOverlay:!0,initialSku:{s1:"30349",s2:"1193",selectedNum:3},goodsImageList:[],goodsIntroduction:{}}},methods:{handleScroll:function(t){console.log(t,"a")},handleTabs:function(t,e){console.log(t,e),this.active=t},returnGoodsList:function(){window.localStorage.removeItem("goodsDetaiInfo"),this.$router.go(-1)},shoppingCart:function(){},addToCart:function(){var t=this,e={goodsSource:this.goodsIntroduction.goodsSource,goodsList:[],shopChecked:!1},o={goodsId:this.goodsIntroduction.goodsId,goodsName:this.goodsIntroduction.goodsItdName,goodsPrice:this.goodsIntroduction.goodsItdPrice,goodsNum:1,goodsChecked:!1},n=this.$store.state.shoppingCartList;n.length>0?n.forEach((function(s){s.goodsSource==t.goodsIntroduction.goodsSource?s.goodsList.forEach((function(e){e.goodsId==t.goodsIntroduction.goodsId?(e.goodsNum+=1,console.log("商家id相同  商品id相同")):(s.goodsList.push(o),console.log("商家id相同  商品id不同"))})):(e.goodsList.push(o),n.push(e))})):(e.goodsList.push(o),this.$store.state.shoppingCartList.push(e)),this.$router.push("shoppingCart"),console.log(e,"商品")},buyNow:function(){console.log(this.$store.state.userLogin.login),this.$store.state.userLogin.login||this.$router.replace("/login")},handleImage:function(t){console.log(t)},onBuyClicked:function(){},onAddCartClicked:function(){},init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!=localStorage.getItem("goodsDetailsInfo")){e.next=9;break}return t.goodsDetaiInfo=[],e.next=4,Object(a["a"])();case 4:o=e.sent,console.log(o,"商品详情信息"),localStorage.setItem("goodsDetailsInfo",JSON.stringify(o)),e.next=10;break;case 9:o=JSON.parse(localStorage.getItem("goodsDetailsInfo"));case 10:n=t.$route.query.goodsDetailsId,o.data.forEach((function(e){Number(n)==Number(e.goodsDetailInfoId)&&(t.goodsDetaiInfo.push(e),t.goodsIntroduction=e.goodsIntroduction,t.goodsImageList=e.goodsImageList)})),console.log(o,"data"),console.log(t.goodsImageList,"goodsImageList");case 14:case"end":return e.stop()}}),e)})))()}},created:function(){this.init()}},u=c,d=(o("0c4f"),o("2877")),l=Object(d["a"])(u,n,s,!1,null,"bd90a9a6",null);e["default"]=l.exports},d784:function(t,e,o){"use strict";o("ac1f");var n=o("6eeb"),s=o("d039"),i=o("b622"),a=o("9263"),r=o("9112"),c=i("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),g=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),f=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var o="ab".split(t);return 2!==o.length||"a"!==o[0]||"b"!==o[1]}));t.exports=function(t,e,o,l){var h=i(t),p=!s((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=p&&!s((function(){var e=!1,o=/a/;return"split"===t&&(o={},o.constructor={},o.constructor[c]=function(){return o},o.flags="",o[h]=/./[h]),o.exec=function(){return e=!0,null},o[h](""),!e}));if(!p||!v||"replace"===t&&(!u||!d||g)||"split"===t&&!f){var k=/./[h],m=o(h,""[t],(function(t,e,o,n,s){return e.exec===a?p&&!s?{done:!0,value:k.call(e,o,n)}:{done:!0,value:t.call(o,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:g}),x=m[0],I=m[1];n(String.prototype,t,x),n(RegExp.prototype,h,2==e?function(t,e){return I.call(t,this,e)}:function(t){return I.call(t,this)})}l&&r(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-0b7c5b63.20927138.js.map