webpackJsonp([5],{"+Ak9":function(t,e){},"5p3o":function(t,e){},"N+zL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},r=n("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("+Ak9")},null,null).exports,a=n("/ocq");i.a.use(a.a);var o=new a.a({routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"n/G1"))}},{path:"/city",name:"city",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"dcek"))}},{name:"detail",path:"/detail/:id",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"OtD6"))}}],scrollBehavior:function(t,e,n){return{x:0,y:0}}}),u=n("NYxO"),p="上海";try{localStorage.currentCity&&(p=localStorage.currentCity)}catch(t){}var l={currentCity:p},c={setCurrentCity:function(t,e){t.currentCity=e;try{localStorage.currentCity=e}catch(t){}}};i.a.use(u.a);var d=new u.a.Store({state:l,getters:{},mutations:c,actions:{setCurrentCity:function(t,e){t.commit("setCurrentCity",e)}}}),f=(n("5p3o"),n("fujM"),n("TEZY"),n("v5o6")),h=n.n(f),w=n("F3EI"),v=n.n(w);n("v2ns");h.a.attach(document.body),i.a.use(v.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:o,store:d,components:{App:s},template:"<App/>"})},TEZY:function(t,e){},fujM:function(t,e){},pYmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n("gsqX"));var r={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var r=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(r):r()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},a=n("VU/8")(r,s,!1,null,null,null);e.default=a.exports},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e04a2d602ee7e8df6262.js.map