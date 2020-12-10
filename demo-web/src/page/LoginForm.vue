<template>
  <div class="login">
    <h1>Login</h1>
    <div class="input">
      <InputItem @getInputValue='getAccount' placeholder="请输入手机号码" :message='accMessage' :unvalid='accUnvalid'>
         account：
      </InputItem>
    </div>
    <div class="input">
      <InputItem @getInputValue='getPassword' type='password' placeholder="请输入密码" :message='passMessage' :unvalid='passUnvalid'>
        password：
      </InputItem>
    </div>
    <div class="btn" style="text-align:center">
       <Button @click="clickHandler">登录</Button>
    </div>
   <div style="margin-left:50px" v-if="result">登录结果：{{result}}</div>
  </div>
</template>

<script>
  // 组件
  import InputItem from 'components/Input'
  import Button from 'components/Button'
  // 后台登陆
  import { login } from 'network/login'

  const jwt = require('jsonwebtoken')

  const axios = require('axios')

  export default {
    name:'LoginForm',
    components:{
      InputItem,
      Button
    },
    data(){
      return {
        account:'',
        password:'',
        accUnvalid:false,
        passUnvalid:false,
        result:'',
        accMessage:'手机号码不合法',
        passMessage:'密码长度不得小于6位',
        ifAdmin:false
      }
    },
    methods:{
      getAccount(value){
        // 使用正则表达式进行判别
        const myReg = /^[1][3,4,5,7,8][0-9]{9}$/
        if(!myReg.test(value)){
          this.accUnvalid = true
        }else{
          this.accUnvalid = false;
          this.account = value;
        }
      },
      getPassword(value){
        if(value.length < 6){
          this.passUnvalid = true;
        }else{
          this.passUnvalid = false;
          this.password = value;
        }
      },
      clickHandler(){
        // 手机号码，密码输入正确的情况下发送请求
        if(!this.accUnvalid & !this.passUnvalid){
          const user = {
            account: this.account,
            password: this.password
          }
          login(user).then((response)=>{
            const message = response.data.message;
            if(message){
              if(message === '密码错误'){
                this.passUnvalid = true;
                this.passMessage = message
              }else{
                this.accUnvalid = true
                this.accMessage = message
              }
            }else{
              // 对传递过来的token进行解密
              const token = jwt.decode(response.data);
              // 但存储的仍是加密后的token
              localStorage.setItem('token', response.data);
              // 将后端返回的用户身份进行存储
              localStorage.setItem('admin', token.admin)
              // 路由跳转
              this.$router.push('/');
            }
          },(err)=>{
            console.log(err);
          });
        }
      }
    }
  }
</script>

<style scoped>
.btn, .input{
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
}
.login{
  text-align: center;
  display: inline-block;
  width: 85%;
  height: calc(100vh - 49px);
  /* 改变块元素的基线 */
  vertical-align: top;
}
</style>