<template>
  <div class="user-manager">
    <h1 style="margin-left:3%" v-if="message">{{message}}</h1>
    <table >
      <th>account</th>
      <th>admin</th>
      <th>操作</th>
      <tr v-for="(item,index) in user" :key="item"> 
        <td>{{item.account}}</td>
        <td>{{item.admin===1?'管理员':'普通用户'}}</td>
        <td>
          <Button class="btn" color='#f56c6c' @click="deleteUser(index)" >删除用户</Button>
          <Button class="btn" @click="upLevel(index)">提升权限</Button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { queryall, deleteData,nodifyData } from 'network/auth'
import Button from 'components/Button'

export default {
  name:'User',
  data(){
    return {
      user:[],
      message:'',
      nodifyResult:null,
      deleteResult:null
    }
  },
  methods:{
    async deleteUser(index){
      const account = this.user[index].account;
      // const admin = localStorage.getItem('admin');
      await deleteData({account}).then(res=>{
        this.deleteResult = res.data;
        // 根据返回结果来使用splice进行数组的视图更新
        if(this.deleteResult === 2000){
          this.user.splice(index, 1);
        }
      },(err)=>{
        console.log(err.status);
      })
      // console.log(status);
      // this.$router.push('/user')
    },
    async upLevel(index){
      const account = this.user[index].account;
      // const admin = localStorage.getItem('admin');
      await nodifyData({account}).then((res)=>{
        this.nodifyResult = res.data;
        // 根据后端返回的数据来判断是否修改成功
        if(this.nodifyResult === 1000){
          this.user[index].admin = 1;
        }
      },(err)=>{
        console.log(err);
      })
    }
  },
  components:{
    Button
  },
  created(){
    const admin = localStorage.getItem('admin');
    queryall(admin).then((response)=>{
      this.user = response.data;
    },(err)=>{
      this.message = "用户权限不足"
    })
  }
}
</script>

<style  scoped>
.user-manager{
  width: 85%;
  display: inline-block;  
  vertical-align: top;
}
table{
  margin-left: 5%;
  /* 为表格设置合并边框模型：collapse合并成单一边框 */
  border-collapse: collapse;/*关键代码*/
  text-align: center;
}
.btn{
  display: inline-block;
  margin: 0 5px;
}
th, td{
  width: 300px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #e6e6e6;
  margin-left: 5%;
}
</style>