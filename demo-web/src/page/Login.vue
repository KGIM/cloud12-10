<template>
  <div class="login">
    <LoginForm v-if="!isLogin"/>
    <div v-else class="content">
      <h1>您已登录</h1>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
  export default {
    name:'Login',
    data(){
      return {
        isLogin: false,
      }
    },
    components:{
      LoginForm
    },
    mounted(){
      // 查看本地是否存在token，存在则表示已登录
      if(localStorage.getItem('token')){
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    }
  }
</script>

<style scoped>
.login{
  width: 85%;
  display: inline-block;
  vertical-align: top;
}
.content{
  margin-left: 3%;
  margin-top: 5%;
}
</style>