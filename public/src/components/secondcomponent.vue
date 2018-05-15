<template>
  <div class="hello">
    <h4>这是子组件:{{myMessages}}</h4>
    <input type="text" v-model="myMessages" disabled placeholder="disabled"/>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: [
    'myMessages',//传递的值是这个
  ],
   mounted(){
     //console.log("子组件打印:","="+this.myMessages);
   }
}
</script>

<style lang = "scss">

  .hello{
    margin-top: 30px;
    @import './include_scss/p'
  }
  h4,p{
    text-align: left;
    font-size: 20px;
  }
  p{
    font-size: 12px;
  }
  span{
    color: #35495e;
  }
</style>

