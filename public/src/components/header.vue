<template>
  <div class="header">
    <img src="../assets/logo.png">
  </div>
</template>
<script>
    export default{
        data(){
            return{
                msg: 'Hello vue'
            }
        }
    }
</script>
<style lang = "scss">
    .header{
        width: 100%;
        margin: 0 auto;
        & img{
            width: 50%;
            margin: 30px auto 0;
            display: block;  
        }
    }
</style>
