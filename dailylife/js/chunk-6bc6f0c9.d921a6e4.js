(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bc6f0c9"],{"130a":function(t,e,o){"use strict";o("496a")},"496a":function(t,e,o){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,o){var n=o("1d80"),s=o("5899"),c="["+s+"]",a=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),i=function(t){return function(e){var o=String(n(e));return 1&t&&(o=o.replace(a,"")),2&t&&(o=o.replace(r,"")),o}};t.exports={start:i(1),end:i(2),trim:i(3)}},7156:function(t,e,o){var n=o("861d"),s=o("d2bb");t.exports=function(t,e,o){var c,a;return s&&"function"==typeof(c=e.constructor)&&c!==o&&n(a=c.prototype)&&a!==o.prototype&&s(t,a),t}},"7abe":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index"},[o("div",{staticClass:"tab-header"},[o("tab-header",{attrs:{isShowHeaderTop2:t.isShowHeaderTop2}},[o("div",{staticClass:"top2",attrs:{slot:"top"},slot:"top"},[o("div",{staticClass:"signIn",on:{click:t.signIn}},[o("span",[t._v("签到")])]),o("div",{staticClass:"center"}),o("div",{staticClass:"notify",on:{click:t.handleNotify}},[o("span",[t._v("消息")])])]),o("div",{staticClass:"bottom",attrs:{slot:"bottom"},slot:"bottom"},[o("van-search",{attrs:{placeholder:"请搜索商品",background:t.background},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)])],1),o("b-scroll",{ref:"scroll",staticClass:"b-scroll",class:{"has-scroll":!t.isShowHeaderTop2,"no-scroll":t.isShowHeaderTop2},attrs:{probeType:3,pullUpload:!0},on:{scroll:t.handleScrollContent,loadMore:t.loadMore}},[o("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[o("swipe-pic",{staticClass:"swipe-pic"}),o("div",{staticClass:"menu-control"},[o("menu-control")],1),o("div",{staticClass:"goods-list-content"},[o("goods-dec")],1)],1)],1),t.isShowBackTop?o("back-top",{on:{click:t.backTop}}):t._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollToEnd,expression:"scrollToEnd"}],staticClass:"bottom-msg"},[o("span",[t._v("已经到底了~")])])],1)},s=[],c=(o("d3b7"),o("d399")),a=o("f564"),r=o("aada"),i={data:function(){return{headerTitle:"标题1",searchValue:"",content:20,isLoading:!1,background:"#fff",logo:"//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp",pictureList:[{img_url:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/164353/10/12714/126518/60531cffEd74f198e/a06d9afd19f5464c.jpg!q70.jpg.dpg"},{img_url:"//m.360buyimg.com/mobilecms/s700x280_jfs/t1/155887/8/16711/104572/60534627Eb979dc75/cc416de39d2e83b0.jpg!cr_1125x445_0_171!q70.jpg.dpg"},,],isShowBackTop:!1,isShowHeaderTop2:!0,contentOffsetTop:0,scrollToEnd:!1}},components:{TabHeader:function(){return o.e("chunk-6d4a7f44").then(o.bind(null,"71c2"))},MenuControl:function(){return o.e("chunk-2d0c9adc").then(o.bind(null,"59bd"))},SwipePic:function(){return o.e("chunk-349b69dd").then(o.bind(null,"6344"))},BScroll:r["default"],BackTop:function(){return o.e("chunk-794086e9").then(o.bind(null,"d658"))},goodsDec:function(){return o.e("chunk-05a168bc").then(o.bind(null,"a6c2"))}},methods:{signIn:function(){c["a"].success("签到成功"),console.log(this.$refs.scroll,"ssss")},handleNotify:function(){Object(c["a"])("点击消息")},picClick:function(){Object(a["a"])("图片点击")},onRefresh:function(){var t=this;setTimeout((function(){Object(c["a"])("刷新成功"),t.isLoading=!1}),1e3)},handleScrollContent:function(t){this.isShowBackTop=Math.abs(t.y)>700,t.y<0&&(this.isShowHeaderTop2=!(Math.abs(t.y)>44)),t.y<0&&(this.scrollToEnd=Math.abs(t.y)>1e3)},loadMore:function(){},backTop:function(){this.$refs.scroll.scrollTo(0,0,1e3),console.log(this.$refs),console.log(this.$refs.scroll)}},created:function(){},mounted:function(){console.log(this.$refs.scroll.$el.offsetTop),this.contentOffsetTop=this.$refs.scroll.$el.offsetTop}},l=i,u=(o("130a"),o("2877")),f=Object(u["a"])(l,n,s,!1,null,"c5db5502",null);e["default"]=f.exports},a9e3:function(t,e,o){"use strict";var n=o("83ab"),s=o("da84"),c=o("94ca"),a=o("6eeb"),r=o("5135"),i=o("c6b6"),l=o("7156"),u=o("c04e"),f=o("d039"),d=o("7c73"),p=o("241c").f,h=o("06cf").f,b=o("9bf2").f,g=o("58a8").trim,m="Number",v=s[m],T=v.prototype,w=i(d(T))==m,k=function(t){var e,o,n,s,c,a,r,i,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(o=l.charCodeAt(2),88===o||120===o)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(c=l.slice(2),a=c.length,r=0;r<a;r++)if(i=c.charCodeAt(r),i<48||i>s)return NaN;return parseInt(c,n)}return+l};if(c(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var N,_=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof _&&(w?f((function(){T.valueOf.call(o)})):i(o)!=m)?l(new v(k(e)),o,_):k(e)},I=n?p(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)r(v,N=I[C])&&!r(_,N)&&b(_,N,h(v,N));_.prototype=T,T.constructor=_,a(s,m,_)}}}]);
//# sourceMappingURL=chunk-6bc6f0c9.d921a6e4.js.map