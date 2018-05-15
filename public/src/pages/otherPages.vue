<template>
<div>	
	<HeaderCompontent></HeaderCompontent> 
  <div class="container">

	<!-- 父组件内容 -->
	<p class="test-px2rem">测试自动适配100%</p>
	<div class="flexn">
		<p class="test-px2rem2">测试自动适配50%</p>
		<p class="test-px2rem2">测试自动适配50%</p>		
	</div>
	<h4>这是父组件{{parentMsg}}</h4>
	<input type="" v-model="parentMsg" autofocus="autofocus" placeholder="type something">

	<!-- 这里的my-messages 就是子组建的myMessages 两种写法都可以 -->
	<!-- 子组件内容 这里写myMessages或者my-messages都可以作为传递参数的变量 -->
	<tochild :my-messages="parentMsg"></tochild>


	这个number的数据是子组件传过来的number=={{number}}
	<charge v-on:jian="jian1"></charge>
  </div>
  <FootComponent></FootComponent>
 </div>
</template>

<script>
import HeaderCompontent from '../components/header.vue'
import FootComponent from '../components/footer.vue'
	import tochild from '../components/secondcomponent.vue'
	import charge from "../components/cacle.vue";
	import Vue from "vue"
	import Vuex from "vuex"
	Vue.use(Vuex)
	const store = new Vuex.Store({
		// 存储状态值
		state: {
			count: 0,
		},
		//操作状态值，提交mutations是更改Vuex状态的唯一方法
		mutations: {
			increment (state) {
				state.count++
			}
		},
		//getters可以认为是store的计算属性，getters接收state作为其第一个函数
		getters:{

		},
		actions: {

		}
	})
	//store.commit('increment')

	console.log('store.state.count : ',store.state.count)



// const store = new Vuex.Store({
//   // 存储状态值
//   state: {
   
//   },
//   // 状态值的改变方法,操作状态值
//   // 提交mutations是更改Vuex状态的唯一方法
//   mutations: {
    
//   },
//   // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
//   getters: {
    
//   },
//   actions: { 
    
//   }
// })
// 要改变状态值只能通过提交mutations来完成


export default {
  data () {
    return {
      parentMsg: '',
      number:0,
    }
  },
  components: {	// 挂载组件
  	tochild,
  	charge,
  	HeaderCompontent,
    FootComponent
  },
	methods:{
		jian1:function(arg){
			console.log(arg);
			this.number = arg;
			//setTimeout(()=>{
			//   let value = $("#caleValue").text()
			//    this.number = value
			// })

		},
	}
}
</script>

<style lang="scss">
	@mixin testpx {
		color:#fff;
		text-align:center;
	}
	.container{
		text-align:center;
		& .test-px2rem{
			background:black;
			border:1px solid red;
			box-sizing:border-box;
			width:750px;
			height:50px;
			line-height:50px;
			@include testpx;
		}
		& .test-px2rem2{
			background:black;
			border:1px solid red;
			box-sizing:border-box;
			width:375px;
			height:50px;
			line-height:50px;
			@include testpx;
		}
		.flexn{
			display:flex;
		}

	}
	h4{
		@include testpx;
	}
  h4,p{
    color: #35495e;
    text-align: left;
    font-size: 20px;
  }
  p{
  	font-size: 14px;
  }
  input{
  	margin: 4px;
  	outline: none;
  	border: 1px solid #ddd;
  	line-height: 24px;
  	min-width: 300px;
  	padding-left: 10px;
  }
</style>