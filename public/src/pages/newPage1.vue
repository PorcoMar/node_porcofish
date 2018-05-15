<template>
	<div>
		<p v-html="html" :style="styleObj">this is v-htm</p> 
		<p v-text="text" :style="{ fontSize: size + 'px',color:fontColor }">this is v-text</p>
		<input type="text" v-model="watch1" />
		<input type="text" v-model="watch2.w1" />
		<button @click="onTap">button</button>
		<img :src="imgUrl" class="imgStyle" :class="[csA,csB]"/>
		<img :src="'http://www.haoniangjia.cn'+halfImgUrl" :class="{isImgStyle:isBoolean,isImgStyle2:isBoolean2}" class="oriBorder"/>
		<span>{{helloText}}----reverse----</span>
		<span>{{reverseHelloText}}</span>
		<button @click.once="clickOnce">once</button> <!-- v-on:click.once 点击生效一次-->
		<button v-on:click.stop="clickStop">clickStop</button> <!--阻止单击事件继续传播-->
		<input type="number" @keyup.enter="enter" placeholder="keyup=13" class="inputStylen" />
		<input @keyup.delete="deleten" placeholder="delete" class="inputStylen"/>
		<div id='example-3'>
		  <input type="checkbox" value="Jack" v-model="checkedNames" />
		  <label for="jack">Jack</label>
		  <input type="checkbox" value="John" v-model="checkedNames" />
		  <label for="john">John</label>
		  <input type="checkbox" value="Mike" v-model="checkedNames" />
		  <label for="mike">Mike</label>
		  <br>
		  <span>您选择的是: {{ checkedNames}}</span>
		</div>

		<input v-model.number="number" placeholder="只能输入数字" />
		<span v-text="number"></span>
		<input v-model.trim="number" placeholder="自动过滤用户输入的首尾空白字符" />
		<p>原数组：{{arr}}，computed方法排序后数组{{arr2}}</p>
		<div v-on:scroll.passive="onScroll" :class="{scrollStyle:isScrollStyle,scrollStyle2:isScrollStyle2}" class="testScroll"></div>

<!-- 			<swiper :options="swiperOption" ref="mySwiper">
			 <swiper-slide>I'm Slide 1</swiper-slide>
			 <swiper-slide>I'm Slide 2</swiper-slide>
			 <swiper-slide>I'm Slide 3</swiper-slide>
			 <div class="swiper-pagination"  slot="pagination"></div>
			 <div class="swiper-button-prev" slot="button-prev"></div>
			 <div class="swiper-button-next" slot="button-next"></div>
			 <div class="swiper-scrollbar"   slot="scrollbar"></div>
			</swiper> -->
	</div>
</template>
<style lang="scss">
	@mixin textCenter {
		text-align:center;
	}
	@mixin defaultImg{
		height:9px;width:50%;display:inline-block;float:left;
	}
	p{
		@include textCenter;
		color:#fff;
		background:#000;
	}
.imgStyle{
	@include defaultImg
}
.isImgStyle{
	@include defaultImg;
	border:3px dashed blue;
}
.isImgStyle2{
	@include defaultImg;
	border:3px dashed purple;
}
.oriBorder{
	width:50%;height:15px;
}
.csA{
	width:50%;
}
.csB{
	border:1px solid red;
	height:15px;padding-right:300px;
}
.testScroll{
	height:5000px;width:100%;
}
.scrollStyle{background:orange}
.scrollStyle2{background:yellow}
.inputStylen{width:20%;}
</style>
<script>
	import axios from 'axios'
	// import '../../static/swiper.min.css'
	// import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'carrousel',
		props:[
			"AAA"
		],
		data() {
			return {
				num:'0',
				watch1:'0',
				watch2:{
					w1:'w1',
					w2:'w2'
				},
				oldVal:'',
				html:'<p>html content</p>',
				text:'text content',
				imgUrl:'http://www.haoniangjia.cn/img/new1.png',
				halfImgUrl:'/img/new1.png',
				isBoolean:true,   //当isBoolean:true，isImgStyle生效，这里添加2个属性轮换显示隐藏
				isBoolean2:false, 
				styleObj:{},
				size:'8',
				fontColor:'orange',
				csA:'csA',
				csB:'csB',
				helloText:'helloText',
				reverseHelloText:'reverseHelloText',
				arr:[1,4,3,2],
				arr2:[],
				asyncUrl:'https://yesno.wtf/api',
				isScrollStyle:true,
				isScrollStyle2:false,
				checkedNames:new Array(),
				number:'4',

				// swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
		  //         // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		  //         notNextTick: true,
		  //         // swiper configs 所有的配置同swiper官方api配置
		  //         autoplay: 3000,
		  //         direction : 'vertical',
		  //         grabCursor : true,
		  //         setWrapperSize :true,
		  //         autoHeight: true,
		  //         pagination : '.swiper-pagination',
		  //         paginationClickable :true,
		  //         prevButton:'.swiper-button-prev',//上一张
		  //         nextButton:'.swiper-button-next',//下一张
		  //         scrollbar:'.swiper-scrollbar',//滚动条
		  //         mousewheelControl : true,
		  //         observeParents:true,
		  //         // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
		  //         debugger: true,
		  //       }


			}
		},
		abc:'调用自定义属性',
		created() {
		    this.fullName()
		    //this.reverseText() //这个方法也可以写在 <span>{{reverseText()}}</span>	这样也可以调用
		     window.addEventListener('scroll', this.handleScroll);

		     this.asyncAwait();

			//this.quickSort(this.arr);
		 },
		 computed:{ //计算属性 
		    reverseHelloText:function(){
		    	return this.helloText.split('').reverse().join('')
		    },
		    // watch1:function(){ //这一步说明了基本watch能干的computed都能干
		    // 	return this.watch2.w1
		    // },
		     
		    // styleObj:function(){ //不知为什么没用
		    // 	return {color:'red'}
		    // }
		 },
		components:{
			// swiper,
			// swiperSlide
		},
		methods:{
			fullName:function(){
		      console.log(this.$data.num)//Vue 实例代理了对其 data 对象属性的访问
		      console.log(this.$options.abc) //用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处：
				this.$watch(this.num,function(newvalue,oldValue){
					console.log(newvalue,oldValue)
				})
				setInterval(this.callback, 1000);

		      // this.$once('click',function(){
		      // 	console.log(1)
		      // })
		    },
		    callback:function(){
		    	this.watch1 ++;
		    	this.watch2.w1 +='-';
		    	this.isBoolean = !this.isBoolean
		    	this.isBoolean2 = !this.isBoolean2
		    },
		    onTap:function(){
		    	console.log('---=-=-=-=',this.watch1)
			},
			reverseText:function(){
				this.reverseHelloText = this.helloText.split('').reverse().join('')
			},
			requestData(url,params){
		      return new Promise((resolve,reject)=>{
		        axios.get(url,{
		          params:params
		        })
		        .then((res)=>{
		          resolve(res)
		        })
		      })
		    },
		    testWatchAsync:function(url,params={}){ //这里请求数据 处理数据
		    	console.log(url,params)
		    	// this.requestData(url,params).then((res)=>{
		    	// 	console.log(res)
		    	// })
		    },
		    clickOnce:function(){
		    	console.log('--clickOnce--')
		    },
		    clickStop:function(){
				console.log('--clickStop--')
		    },
		    onScroll:function(scr){
		    	console.log(scr)
		    },
		    handleScroll:()=>{
		    	if($(window).scrollTop() >= $(document).height() - $(window).height()){
		    		console.log('触底事件')
		    	}
		    },
		    enter:()=>{
		    	alert('enter')
		    },
		    deleten:()=>{
		    	alert('delete')
		    },
		    number:()=>{
		    	console.log(this.number)
		    },
		    async asyncAwait(){ //异步执行asyncAwait，但却要等到getData执行完毕后再返回值
		     	let getDatan = await this.getData();
		     	console.log(getDatan.data)
		    },
		    getData:()=>{
		    	let _this = this
		    	return new Promise((resolve,reject)=>{		    		
		    		setTimeout(()=>{
		    			resolve({data:'this is data after async await'})
		    		},3000)
		    	})
		    },


		    
		},
		watch:{ //watch的两种用法
			watch1(newVal,oldVal){
				// console.log('watch1----',newVal,oldVal)
				// this.testWatchAsync(this.asyncUrl,null)
			},
			// watch1:{
			// 	handler(newVal,oldVal){
			// 		console.log('watch3----',newVal,oldVal)
			// 		//this.oldVal = oldVal;
			// 	}
			// },
			
			
		},


	}
</script>