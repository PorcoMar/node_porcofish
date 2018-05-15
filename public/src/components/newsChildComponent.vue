<template>
<div class="content">
  <h4 class="news-tit">这是一个上拉刷新的子组件</h4>
  <div  v-for="(item, index) in listArr" :key="item.id">
    <b class="liStyle">{{index}}----{{item.name}}</b>
  </div>
    <div id="loading" v-if="loading">
            <p>Loading... </p>
            <div class="bottom-padding"></div>
    </div>
    <!-- 这个height是footer的高 -->
    <div style="height:50px;width:100%;"></div>
    
  </div>
</template>
<script>

//import axios from 'axios'
const axios = require('axios')

export default {
name: 'child',
  props: [
    'url_params',//传递的值是这个
  ],
  data (){
    return {
      loading:false,
      listArr:[],
      pageNo:1,
      params:{pageNo:this.pageNo}
    }
  },
  created() {
    this.loadList(this.url_params,this.params);//父组件传过来的参数为 ：this.url_params
　　　　//监听滚动
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
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

      loadList(url,params) {
          this.loading = true;
          this.requestData(url,params).then((res)=>{
            this.loading = false;
            this.listArr = res.data.items;
            console.log(this.listArr);
            console.log("首次加载完成")
          })
      },
      
      loadMore(url,params){
        console.log("pageNo="+this.pageNo)
        this.requestData(url,params).then((res)=>{
          console.log(res.data.items)
          this.loading = false;
          this.listArr = this.listArr.concat(res.data.items);
        })
      },
      handleScroll() {
　　　　//判断滚动到底部
        //console.log($(window).scrollTop() ,$(document).height()-$(window).height())
        if ($(window).scrollTop() >=$(document).height() - $(window).height()) {
          this.loading = true;
          if(!this.isLoad){//isLoad是防止一次加载多条而做的防御工作
            this.isLoad = true;
            this.pageNo++;
            this.loadMore(this.url_params,this.params); 
          }
          setTimeout(()=>{
            this.isLoad = false;
          },500)
        }
      }
  },
}
</script>

<style lang = "scss">
$h : 200px;
$footerHeight:100px;
@mixin text-center{
	text-align:center;
}
.content{
	border:1px solid red;
	@include text-center;
  & .news-tit{
    font-size: 18px;
    margin-top: 20px;
    background:#ccc;
    @include text-center;
    height:30px;line-height:30px;
  }
  & .liStyle{
    display:flex;
    height:$h;
    line-height:$h;
    justify-content: center;
    border:1px dashed #ccc;
    @include text-center;
  }
  & #loading{
    p{
    	color:orange;
    	@include text-center;
      height:$footerHeight;
      line-height:$footerHeight;
      background:#ccc;
    }
  }
}
</style>
