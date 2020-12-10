<template>
  <div class="title"> 
    <img src='../assets/logo.png' class="img"/>
  </div>
</template>

<script>
  export default {
    name:'Title',
    props:{
      message:{
        type:String,
        default:''
      }
    }
  }
</script>

<style  scoped>
.title{
  height: 49px;
  line-height: 49px;
  background-image: url('../assets/bg.jpeg');
  color: rgb(216, 202, 202);
}
.img{
  height: 40px;
  /* margin: 0 auto; */
  
  margin-left: 1%;
  vertical-align: middle;
  /* z-index: 10; */
  /* border: 1px solid red; */
}
</style>