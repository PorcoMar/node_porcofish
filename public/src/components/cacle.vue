<template>
    <div>
      <div class="sacle">
        <button v-on:click="jian" >-</button>  
        <button id="caleValue"> {{number}} </button>
        <button v-on:click="plus">+</button>
      </div>
    </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        number:0
      }
    },
    methods: {
      jian: function () {
        this.number -= 1
        this.counter1 = Math.floor(Math.random()*255)
        this.counter2 = Math.floor(Math.random()*255)
        this.counter3 = Math.floor(Math.random()*255)
        this.color=`rgb(${this.counter1},${this.counter2},${this.counter3})`
        this.$emit("jian",this.number)
      },
      plus:function(){
          this.number +=1;
          this.$emit("jian",this.number)//因为这里监测的是中间的结果值，所以只要改变值就行了，至于是哪个按钮触发的不重要了
      }
    }
  }
</script>
<style>

</style>
