
<style lang = "scss">
 .container{
 	width:750px;
 	margin:0px auto;
 	height:400px	
 }

</style>
<template>
	<div class="container">
		<slider :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
      </slider>
  	</div>
</template>
<script>
import slider from 'vue-concise-slider';
	export default {
		props:[
			'params',
			'Pages'
		],
		data(){
			return {
				pages:this.Pages,
	        //滑动配置[obj]
	        sliderinit: {
	          currentPage: this.params.currentPage,//当前页码
	          thresholdDistance: this.params.thresholdDistance,//滑动判定距离
	          thresholdTime: this.params.thresholdTime,//滑动判定时间
	          autoplay:this.params.autoplay,//自动滚动[ms]
	          loop:this.params.loop,//循环滚动
	          direction:this.params.direction,//方向设置，垂直滚动 vertical
	          infinite:this.params.infinite,//无限滚动前后遍历数
	          effect:this.params.effect.infinite, //slide
	          slidesToScroll:this.params.slidesToScroll,//一次翻几页
	          timingFunction: this.params.timingFunction, //linear ease
	          duration:this.params.duration,//过度持续时间
	        }
			}
		},
		methods:{
		slide (data) {
		    //console.log(data.currentPage)
		    this.$emit('slide',data.currentPage)
		  },
		  onTap (data) {
		    this.$emit('onTap',data.currentPage)
		  },
		  onInit (data) {
		    console.log(data)
		  }
		},
		components:{
			slider
		}
		
	}
</script>