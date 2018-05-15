<template>
  <div>
    <HeaderCompontent></HeaderCompontent> 
    <p>this is news page,and understand is child components</p>
    <newsChildComponent :url_params="url_params"></newsChildComponent>
    <FootComponent></FootComponent>
  </div>
</template>

<script>
  import HeaderCompontent from '../components/header.vue'
  import FootComponent from '../components/footer.vue'
  import newsChildComponent from '../components/newsChildComponent.vue';
  export default {
    data(){
      return{
        parentMsg:'',
        url_params:'https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery'
      }
    },
    components:{
      newsChildComponent,
      HeaderCompontent,
      FootComponent

    },
    methods:{

    }
  }
</script>
<style type="text/css">
  p{
    text-align:center;
  }
</style>