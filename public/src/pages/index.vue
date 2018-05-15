<template>
 <div>
  <HeaderCompontent></HeaderCompontent> 
   <!-- 注释：link必须放在这里 -->
   <!-- <animated></animated> -->
   <input type="" v-model="content" autofocus="autofocus" placeholder="type something">
   <p>this.message == {{content}}</p>
   <contentComponent :my-messages="content"></contentComponent>
   
   <div v-bind:id="'list-' + number">this.value=={{number}}</div>
   {{fullName}}

   <button @click = "show = !show">toggle</button>
  <transition name="fade">
    <p v-if="show">this is show place</p>
  </transition>
    <transition name="bounce">
    <p v-if="show">Look at me!</p>
  </transition>

  
  <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
    <p v-if="show">animate.css</p>
  </transition>
  <!-- <VDistpicker/> -->
  <!-- <logo/> -->
  <FootComponent></FootComponent>
 </div>
 

</template>

<script>
import HeaderCompontent from '../components/header.vue'
import FootComponent from '../components/footer.vue'
import contentComponent from '../components/secondcomponent.vue'
import axios from "axios"
import animated from "animate.css"
// import VDistpicker from 'v-distpicker'
// import Logo from '../components/Logo'
// import GetStart from '../components/GetStart'
// import Usage from '../components/Usage'
// import Attributes from '../components/Attributes'
// import Methods from '../components/Methods'
// import '../css/styles.css'
export default{
  data(){
    return {
      content:"",
      number:0,
      firstName:"111",
      lastName:"222",
      show:true,
    }
  },
  created() {
    
  },
  computed:{
    fullName:function(){
      return this.firstName + this.lastName
    }
  },
  methods:{

  },
  components:{
    contentComponent,
    animated,
    // VDistpicker,
    // Logo,
    // GetStart,
    // Usage,
    // Attributes,
    // Methods,
    // Footbar,
    HeaderCompontent,
    FootComponent
  
  }
}
</script>

<style>

.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/*css动画*/
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>