<script type="text/javascript">
	import HeaderCompontent from '../components/header.vue'
	export default {
		  data () {
		    return {
		      parentMsg: '',
		      number:0,
		    }
		  },
		  components: {
		  	HeaderCompontent,
		  },
			methods:{
				jian1:function(arg){
					console.log(arg);
					this.number = arg;
				},
			}
	}
</script>
<template>
<div>
	<HeaderCompontent></HeaderCompontent> 
</div>
</template>

<style>

</style>