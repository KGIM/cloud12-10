<template>
  <div class="person">
    <h1>个人信息</h1>
    <table>
      <tr>
        <th class="column">您的账户是：</th>
        <th>{{account}}</th>
      </tr>
      <tr>
        <th class="column">您的身份是：</th>
        <th>{{admin === 1?'管理员':'普通用户'}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  import jwt from 'jsonwebtoken'
  export default {
    name:'Person',
    data(){
      return{
        account:'',
        admin:null
      }
    },
    mounted(){
      const token = localStorage.getItem('token');
      // jwt有三部分组成，这个decode只是帮你拿到你传过来的payload
      this.account = jwt.decode(token).account;
      this.admin = jwt.decode(token).admin;
    }
  }
</script>

<style  scoped>
.person{
  display: inline-block;
  vertical-align: top;
  margin-left: 5%;
}
table{
  border-collapse: collapse;
  margin-top: 2%;
}

th,td{
  width: 300px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #E6EAEE;
}
.column{
  background-color: #EFF3F6;
}
</style>