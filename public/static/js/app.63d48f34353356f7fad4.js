webpackJsonp([2,0],[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=n(29),a=o(s),r=n(137),i=o(r),c=n(81),l=o(c);n(131),new a.default({router:l.default,render:function(e){return e(i.default)}}).$mount("#app")},,,,,,,,function(e,t,n){n(124);var o=n(1)(n(71),n(152),null,null);e.exports=o.exports},,,,function(e,t,n){n(122);var o=n(1)(n(70),n(150),null,null);e.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){n(125);var o=n(1)(n(73),n(154),null,null);e.exports=o.exports},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),a=o(s),r=n(12),i=o(r);t.default={data:function(){return{msg:"Hello vue"}},components:{HeaderCompontent:a.default,FootComponent:i.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"",data:function(){return{number:0}},methods:{jian:function(){this.number-=1,this.counter1=Math.floor(255*Math.random()),this.counter2=Math.floor(255*Math.random()),this.counter3=Math.floor(255*Math.random()),this.color="rgb("+this.counter1+","+this.counter2+","+this.counter3+")",this.$emit("jian",this.number)},plus:function(){this.number+=1,this.$emit("jian",this.number)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{msg:"Hello vue"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{msg:"Hello vue"}}}},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(21),a=o(s),r=n(19);t.default={name:"child",props:["url_params"],data:function(){return{loading:!1,listArr:[],pageNo:1,params:{pageNo:this.pageNo}}},created:function(){this.loadList(this.url_params,this.params),window.addEventListener("scroll",this.handleScroll)},methods:{requestData:function(e,t){return new a.default(function(n,o){r.get(e,{params:t}).then(function(e){n(e)})})},loadList:function(e,t){var n=this;this.loading=!0,this.requestData(e,t).then(function(e){n.loading=!1,n.listArr=e.data.items,console.log(n.listArr),console.log("首次加载完成")})},loadMore:function(e,t){var n=this;console.log("pageNo="+this.pageNo),this.requestData(e,t).then(function(e){console.log(e.data.items),n.loading=!1,n.listArr=n.listArr.concat(e.data.items)})},handleScroll:function(){var t=this;e(window).scrollTop()>=e(document).height()-e(window).height()&&(this.loading=!0,this.isLoad||(this.isLoad=!0,this.pageNo++,this.loadMore(this.url_params,this.params)),setTimeout(function(){t.isLoad=!1},500))}}}}).call(t,n(49))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"child",props:["myMessages"],mounted:function(){}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(136),a=o(s);t.default={props:["params","Pages"],data:function(){return{pages:this.Pages,sliderinit:{currentPage:this.params.currentPage,thresholdDistance:this.params.thresholdDistance,thresholdTime:this.params.thresholdTime,autoplay:this.params.autoplay,loop:this.params.loop,direction:this.params.direction,infinite:this.params.infinite,effect:this.params.effect.infinite,slidesToScroll:this.params.slidesToScroll,timingFunction:this.params.timingFunction,duration:this.params.duration}}},methods:{slide:function(e){this.$emit("slide",e.currentPage)},onTap:function(e){this.$emit("onTap",e.currentPage)},onInit:function(e){console.log(e)}},components:{slider:a.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),a=o(s),r=n(12),i=o(r),c=n(50),l=o(c),u=n(19),d=(o(u),n(118)),p=o(d);t.default={data:function(){return{content:"",number:0,firstName:"111",lastName:"222",show:!0}},created:function(){},computed:{fullName:function(){return this.firstName+this.lastName}},methods:{},components:{contentComponent:l.default,animated:p.default,HeaderCompontent:a.default,FootComponent:i.default}}},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(83),a=o(s),r=n(82),i=o(r),c=n(21),l=o(c),u=n(19),d=o(u);t.default={name:"carrousel",props:["AAA"],data:function(){return{num:"0",watch1:"0",watch2:{w1:"w1",w2:"w2"},oldVal:"",html:"<p>html content</p>",text:"text content",imgUrl:"http://www.haoniangjia.cn/img/new1.png",halfImgUrl:"/img/new1.png",isBoolean:!0,isBoolean2:!1,styleObj:{},size:"8",fontColor:"orange",csA:"csA",csB:"csB",helloText:"helloText",reverseHelloText:"reverseHelloText",arr:[1,4,3,2],arr2:[],asyncUrl:"https://yesno.wtf/api",isScrollStyle:!0,isScrollStyle2:!1,checkedNames:new Array,number:"4"}},abc:"调用自定义属性",created:function(){this.fullName(),window.addEventListener("scroll",this.handleScroll),this.asyncAwait()},computed:{reverseHelloText:function(){return this.helloText.split("").reverse().join("")}},components:{},methods:{fullName:function(){console.log(this.$data.num),console.log(this.$options.abc),this.$watch(this.num,function(e,t){console.log(e,t)}),setInterval(this.callback,1e3)},callback:function(){this.watch1++,this.watch2.w1+="-",this.isBoolean=!this.isBoolean,this.isBoolean2=!this.isBoolean2},onTap:function(){console.log("---=-=-=-=",this.watch1)},reverseText:function(){this.reverseHelloText=this.helloText.split("").reverse().join("")},requestData:function(e,t){return new l.default(function(n,o){d.default.get(e,{params:t}).then(function(e){n(e)})})},testWatchAsync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(e,t)},clickOnce:function(){console.log("--clickOnce--")},clickStop:function(){console.log("--clickStop--")},onScroll:function(e){console.log(e)},handleScroll:function(){e(window).scrollTop()>=e(document).height()-e(window).height()&&console.log("触底事件")},enter:function(){alert("enter")},deleten:function(){alert("delete")},number:function(){console.log((void 0).number)},asyncAwait:function(){var e=this;return(0,i.default)(a.default.mark(function t(){var n;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:n=t.sent,console.log(n.data);case 4:case"end":return t.stop()}},t,e)}))()},getData:function(){return new l.default(function(e,t){setTimeout(function(){e({data:"this is data after async await"})},3e3)})}},watch:{watch1:function(e,t){}}}}).call(t,n(49))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),a=o(s),r=n(12),i=o(r),c=n(139),l=o(c);t.default={data:function(){return{parentMsg:"",url_params:"https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery"}},components:{newsChildComponent:l.default,HeaderCompontent:a.default,FootComponent:i.default},methods:{}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),a=o(s),r=n(12),i=o(r),c=n(50),l=o(c),u=n(138),d=o(u),p=n(29),m=o(p),f=n(161),h=o(f);m.default.use(h.default);var g=new h.default.Store({state:{count:0},mutations:{increment:function(e){e.count++}},getters:{},actions:{}});console.log("store.state.count : ",g.state.count),t.default={data:function(){return{parentMsg:"",number:0}},components:{tochild:l.default,charge:d.default,HeaderCompontent:a.default,FootComponent:i.default},methods:{jian1:function(e){console.log(e),this.number=e}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),a=o(s),r=n(12),i=o(r),c=n(140),l=o(c);t.default={data:function(){return{parentMsg:"子组件传递信息给父元素",pagesA:"",pagesB:"",calen:"-",plusn:"+",arr:[2,3,1,10,6,7,9,5],swiperParams:{currentPage:0,thresholdDistance:100,thresholdTime:200,autoplay:3e3,loop:!0,direction:"horizontal",infinite:1,effect:"fade",slidesToScroll:1,timingFunction:"ease",duration:300},Pages:[{title:"slide1",style:{background:"url(http://www.haoniangjia.cn/img/new1.png)"}},{title:"slide2",style:{background:"url(http://www.haoniangjia.cn/img/new2.png)"}},{title:"slide3",style:{background:"url(http://www.haoniangjia.cn/img/up.png)"}}]}},created:function(){},methods:{slider:function(e){console.log(e),this.pagesA=e},onTap:function(e){console.log("onTap pages is : ",e),this.pagesB=e}},components:{swiper:l.default,HeaderCompontent:a.default,FootComponent:i.default}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),a=o(s);t.default={data:function(){return{parentMsg:"",number:0}},components:{HeaderCompontent:a.default},methods:{jian1:function(e){console.log(e),this.number=e}}}},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(29),a=o(s),r=n(160),i=o(r),c=n(141),l=o(c),u=n(143),d=o(u),p=n(144),m=o(p),f=n(145),h=o(f),g=n(142),v=o(g),_=n(146),w=o(_);a.default.config.debug=!0,a.default.use(i.default),t.default=new i.default({mode:"history",base:e,routes:[{path:"/",component:w.default},{path:"/index",component:l.default},{path:"/news",component:d.default},{path:"/second",component:m.default},{path:"/third",component:h.default},{path:"/newPage1",component:v.default},{path:"/personal",component:w.default}]})}).call(t,"/")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,n){e.exports=n.p+"static/img/logo.04933e7.png"},,function(e,t,n){var o=n(1)(n(68),n(153),null,null);e.exports=o.exports},function(e,t,n){n(127);var o=n(1)(n(69),n(156),null,null);e.exports=o.exports},function(e,t,n){n(123);var o=n(1)(n(72),n(151),null,null);e.exports=o.exports},function(e,t,n){n(119);var o=n(1)(n(74),n(147),null,null);e.exports=o.exports},function(e,t,n){n(130);var o=n(1)(n(75),n(159),null,null);e.exports=o.exports},function(e,t,n){n(129);var o=n(1)(n(76),n(158),null,null);e.exports=o.exports},function(e,t,n){n(126);var o=n(1)(n(77),n(155),null,null);e.exports=o.exports},function(e,t,n){n(120);var o=n(1)(n(78),n(148),null,null);e.exports=o.exports},function(e,t,n){n(128);var o=n(1)(n(79),n(157),"data-v-7283d35a",null);e.exports=o.exports},function(e,t,n){n(121);var o=n(1)(n(80),n(149),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",{staticClass:"container"},[t("slider",{attrs:{pages:e.pages,sliderinit:e.sliderinit},on:{slide:e.slide,tap:e.onTap,init:e.onInit}},[t("div",{slot:"loading"},["loading..."])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("HeaderCompontent")," ",t("div",{staticClass:"container"},[t("p",{staticClass:"test-px2rem"},["测试自动适配100%"])," ",e._m(0)," ",t("h4",["这是父组件"+e._s(e.parentMsg)])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.parentMsg,expression:"parentMsg"}],attrs:{type:"",autofocus:"autofocus",placeholder:"type something"},domProps:{value:e._s(e.parentMsg)},on:{input:function(t){t.target.composing||(e.parentMsg=t.target.value)}}})," "," "," ",t("tochild",{attrs:{"my-messages":e.parentMsg}}),"\n\n\n\t这个number的数据是子组件传过来的number=="+e._s(e.number)+"\n\t",t("charge",{on:{jian:e.jian1}})])," ",t("FootComponent")])},staticRenderFns:[function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",{staticClass:"flexn"},[t("p",{staticClass:"test-px2rem2"},["测试自动适配50%"])," ",t("p",{staticClass:"test-px2rem2"},["测试自动适配50%"])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("HeaderCompontent")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("footer",{staticClass:"fixed-bottom clearfix"},[t("div",{staticClass:"col4"},[t("router-link",{attrs:{to:"/index"}},["index"])])," ",t("div",{staticClass:"col4"},[t("router-link",{attrs:{to:"/news"}},["news"])])," ",t("div",{staticClass:"col4"},[t("router-link",{attrs:{to:"/second"}},["menu3"])])," ",t("div",{staticClass:"col4"},[t("router-link",{attrs:{to:"/third"}},["menu4"])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",{staticClass:"content"},[t("h4",{staticClass:"news-tit"},["这是一个上拉刷新的子组件"])," ",e._l(e.listArr,function(n,o){return t("div",{key:n.id},[t("b",{staticClass:"liStyle"},[e._s(o)+"----"+e._s(n.name)])])})," ",e.loading?t("div",{attrs:{id:"loading"}},[t("p",["Loading... "])," ",t("div",{staticClass:"bottom-padding"})]):e._e()," "," ",t("div",{staticStyle:{height:"50px",width:"100%"}})])},staticRenderFns:[]}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",{staticClass:"header"},[t("img",{attrs:{src:n(135)}})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("router-view")," "," "])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",{staticClass:"hello"},[t("h4",["这是子组件:"+e._s(e.myMessages)])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.myMessages,expression:"myMessages"}],attrs:{type:"text",disabled:"",placeholder:"disabled"},domProps:{value:e._s(e.myMessages)},on:{input:function(t){t.target.composing||(e.myMessages=t.target.value)}}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("HeaderCompontent")," ",t("p",["this is news page,and understand is child components"])," ",t("newsChildComponent",{attrs:{url_params:e.url_params}})," ",t("FootComponent")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("div",{staticClass:"sacle"},[t("button",{on:{click:e.jian}},["-"])," ",t("button",{attrs:{id:"caleValue"}},[" "+e._s(e.number)+" "])," ",t("button",{on:{click:e.plus}},["+"])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("HeaderCompontent")," ",t("div",{staticClass:"container"},[t("swiper",{attrs:{params:e.swiperParams,Pages:e.Pages},on:{slide:e.slider,onTap:e.onTap}})," ",e.pagesA?t("p",["pages is "+e._s(e.pagesA)]):e._e()," ",t("p",{directives:[{name:"show",rawName:"v-show",value:e.pagesB,expression:"pagesB"}]},["click show "+e._s(e.pagesB)])])," ",t("FootComponent")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("p",{style:e.styleObj,domProps:{innerHTML:e._s(e.html)}},["this is v-htm"])," ",t("p",{style:{fontSize:e.size+"px",color:e.fontColor},domProps:{textContent:e._s(e.text)}},["this is v-text"])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.watch1,expression:"watch1"}],attrs:{type:"text"},domProps:{value:e._s(e.watch1)},on:{input:function(t){t.target.composing||(e.watch1=t.target.value)}}})," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.watch2.w1,expression:"watch2.w1"}],attrs:{type:"text"},domProps:{value:e._s(e.watch2.w1)},on:{input:function(t){t.target.composing||(e.watch2.w1=t.target.value)}}})," ",t("button",{on:{click:e.onTap}},["button"])," ",t("img",{staticClass:"imgStyle",class:[e.csA,e.csB],attrs:{src:e.imgUrl}})," ",t("img",{staticClass:"oriBorder",class:{isImgStyle:e.isBoolean,isImgStyle2:e.isBoolean2},attrs:{src:"http://www.haoniangjia.cn"+e.halfImgUrl}})," ",t("span",[e._s(e.helloText)+"----reverse----"])," ",t("span",[e._s(e.reverseHelloText)])," ",t("button",{on:{"~click":function(t){e.clickOnce(t)}}},["once"])," "," ",t("button",{on:{click:function(t){t.stopPropagation(),e.clickStop(t)}}},["clickStop"])," "," ",t("input",{staticClass:"inputStylen",attrs:{type:"number",placeholder:"keyup=13"},on:{keyup:function(t){e._k(t.keyCode,"enter",13)||e.enter(t)}}})," ",t("input",{staticClass:"inputStylen",attrs:{placeholder:"delete"},on:{keyup:function(t){e._k(t.keyCode,"delete",[8,46])||e.deleten(t)}}})," ",t("div",{attrs:{id:"example-3"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"Jack"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Jack")>-1:e._q(e.checkedNames,!0)},on:{change:function(t){var n=e.checkedNames,o=t.target,s=!!o.checked;if(Array.isArray(n)){var a="Jack",r=e._i(n,a);s?r<0&&(e.checkedNames=n.concat(a)):r>-1&&(e.checkedNames=n.slice(0,r).concat(n.slice(r+1)))}else e.checkedNames=s}}})," ",t("label",{attrs:{for:"jack"}},["Jack"])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"John"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"John")>-1:e._q(e.checkedNames,!0)},on:{change:function(t){var n=e.checkedNames,o=t.target,s=!!o.checked;if(Array.isArray(n)){var a="John",r=e._i(n,a);s?r<0&&(e.checkedNames=n.concat(a)):r>-1&&(e.checkedNames=n.slice(0,r).concat(n.slice(r+1)))}else e.checkedNames=s}}})," ",t("label",{attrs:{for:"john"}},["John"])," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"Mike"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Mike")>-1:e._q(e.checkedNames,!0)},on:{change:function(t){var n=e.checkedNames,o=t.target,s=!!o.checked;if(Array.isArray(n)){var a="Mike",r=e._i(n,a);s?r<0&&(e.checkedNames=n.concat(a)):r>-1&&(e.checkedNames=n.slice(0,r).concat(n.slice(r+1)))}else e.checkedNames=s}}})," ",t("label",{attrs:{for:"mike"}},["Mike"])," ",t("br")," ",t("span",["您选择的是: "+e._s(e.checkedNames)])])," ",t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.number,expression:"number",modifiers:{number:!0}}],attrs:{placeholder:"只能输入数字"},domProps:{value:e._s(e.number)},on:{input:function(t){t.target.composing||(e.number=e._n(t.target.value))}}})," ",t("span",{domProps:{textContent:e._s(e.number)}})," ",t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.number,expression:"number",modifiers:{trim:!0}}],attrs:{placeholder:"自动过滤用户输入的首尾空白字符"},domProps:{value:e._s(e.number)},on:{input:function(t){t.target.composing||(e.number=t.target.value.trim())}}})," ",t("p",["原数组："+e._s(e.arr)+"，computed方法排序后数组"+e._s(e.arr2)])," ",t("div",{staticClass:"testScroll",class:{scrollStyle:e.isScrollStyle,scrollStyle2:e.isScrollStyle2},on:{scroll:function(t){e._k(t.keyCode,"passive")||e.onScroll(t)}}})," "])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return t("div",[t("HeaderCompontent")," "," "," ",t("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"",autofocus:"autofocus",placeholder:"type something"},domProps:{value:e._s(e.content)},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})," ",t("p",["this.message == "+e._s(e.content)])," ",t("contentComponent",{attrs:{"my-messages":e.content}})," ",t("div",{attrs:{id:"list-"+e.number}},["this.value=="+e._s(e.number)]),"\n  "+e._s(e.fullName)+"\n\n  ",t("button",{on:{click:function(t){e.show=!e.show}}},["toggle"])," ",t("transition",{attrs:{name:"fade"}},[e.show?t("p",["this is show place"]):e._e()])," ",t("transition",{attrs:{name:"bounce"}},[e.show?t("p",["Look at me!"]):e._e()])," ",t("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[e.show?t("p",["animate.css"]):e._e()])," "," "," ",t("FootComponent")])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.63d48f34353356f7fad4.js.map