<template>
<div>
<HeaderCompontent></HeaderCompontent> 
  <div class="container">
  	<swiper :params="swiperParams" :Pages="Pages" v-on:slide="slider" v-on:onTap="onTap"></swiper>
  	<p v-if="pagesA">pages is {{pagesA}}</p>
  	<p v-show="pagesB">click show {{pagesB}}</p>
  </div>
  <FootComponent></FootComponent>
 </div>
</template>


<script>
import HeaderCompontent from '../components/header.vue'
import FootComponent from '../components/footer.vue'
	 import swiper from '../components/swiper.vue'

	 export default {
	 		//el:'#app',
			data () {
				return {
					parentMsg: '子组件传递信息给父元素',
					pagesA:'',
					pagesB:'',
					calen:'-',
					plusn:'+',
					arr:[2,3,1,10,6,7,9,5],
					swiperParams:{
						  currentPage: 0,//当前页码
				          thresholdDistance: 100,//滑动判定距离
				          thresholdTime: 200,//滑动判定时间
				          autoplay:3000,//自动滚动[ms]
				          loop:true,//循环滚动
				          direction:'horizontal',//方向设置，垂直滚动 vertical
				          infinite:1,//无限滚动前后遍历数
				          effect:'fade', //slide fade
				          slidesToScroll:1,//一次翻几页
				          timingFunction: 'ease', //linear ease
				          duration: 300,//过度持续时间
					},
					Pages:[
				          {
				            title: 'slide1',
				            style:{
				             background:'url(http://www.haoniangjia.cn/img/new1.png)'
				            }
				          },
				          {
				           title: 'slide2',
				           style:{
				            background:'url(http://www.haoniangjia.cn/img/new2.png)'
				            }
				          },
				          {
				            title: 'slide3',
				            style:{
				              background:'url(http://www.haoniangjia.cn/img/up.png)',
				            },
				          }
				        ]
				}
			},
			created () {

			},
			methods: {
				
				slider:function(arg){
					console.log(arg)
					this.pagesA = arg; 
					
				},
				onTap:function(arg){
					console.log('onTap pages is : ',arg)
					this.pagesB = arg
				},
				

			},
	    components: {
			 swiper,
			 HeaderCompontent,
    		FootComponent
	    }
	 }
</script>

<style scoped>
	.parent-tit{
		margin-top: 30px;
	}
  h4{
  	font-size: 20px;
  }
  h2{
  	margin: 0 0 40px;
  }
  .text-center p {
  	color: #41b883;
  }
</style>
