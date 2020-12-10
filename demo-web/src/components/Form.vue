<template>
  <div class="form">
    <InputItem @getInputValue='(value)=>{account=value}'>
      account：
    </InputItem>
    <div class="line"></div>
    <InputItem type='password' @getInputValue='(value)=>{password=value}'>
      password：
    </InputItem>
    <div class="line"></div>
    <InputItem @getInputValue='(value)=>{admin=value}'>
      admin：
    </InputItem>
    <div class="line"></div>
    <Button @click="clickHandler">添加</Button>
    <h1 v-if="flag">用户添加成功</h1>
  </div>
</template>

<script>
import Button from '../components/Button'
import InputItem from '../components/Input'
import { create }from '../network/create'

export default {
  name: 'Form',
  components:{
    Button,
    InputItem
  },
  data() {
    return {
      account:'',
      password:'',
      admin:'',
      flag:false
    }
  },
  methods: {
    async clickHandler(){
        await create({
          account: this.account, 
          password: this.password, 
          newAdmin:this.admin, 
        }).then(res=>{
          if(res.data === 1500){
            this.flag = true;
          }
        },(err)=>{
          console.log(err);
        })      
  }
},         
};
</script>

<style scoped>
.form{
  display: inline-block;
  width: 85%;
  margin: 0 auto;
  text-align: center;
}
.input-group-prepend{
  width: 15%;
}
.input-group-text{
  width:100%;
  display: inline-block;
  text-align: right;
  background-color: white;
  border: none;
}
.line{
  margin: 30px 0;
}
.form Button{
  display: block;
  margin: 10px auto;

}
</style>
