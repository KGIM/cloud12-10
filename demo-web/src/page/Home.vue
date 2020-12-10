<template>
  <div id="home">
    <h1 class="content">Welcome!</h1>
    <h1 class="content" v-if="flag">您已登录！</h1>
    <h1 class="content" v-else>未登录状态</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './Nav'
  export default {
    name:'Home',
    components:{
      Nav
    },
    data(){
      return {
        flag:localStorage.getItem('token')
      }
    },
    updated(){
      console.log(123);
      this.flag = localStorage.getItem('token')
      // console.log(this.flag);
    },
    
  }
</script>

<style  scoped>
#home{
  width: 85%;
  display: inline-block;
  vertical-align: top;
}
.content{
  margin-left: 3%;
  margin-top: 5%;
}
</style>