<template>
  <div class="nav">
    <div  v-for="(item, index) in nav" :key="item" class="nav-item" :style="currentIndex == index? {color:'#4fc08d'}:''" @click="clickHandler(index)">
      {{item}}
    </div>
  </div>
</template>

<script>
  import Form from 'components/Form.vue'
  export default {
    name:'Nav',
    components:{
      Form
    },
    data(){
      return {
        nav:['登录','注销','用户管理','查看个人信息','添加新用户'],
        currentIndex: null,
      }
    },
    methods:{
      // 点击列表进行路由跳转
      clickHandler(index){
        if(index == 0){
          this.$router.push('/login')
        }else if(index == 1){
          const result = confirm('确定要注销用户吗?');
          if(result){
            localStorage.removeItem('token');
            localStorage.removeItem('admin')
          }
          this.$router.push('/')
        }
        else if(index == 2){
          this.$router.push('/user');
        }else if(index == 3){
          this.$router.push('/person');
        }else{
          this.$router.push('/create')
        }
        this.currentIndex = index;
      }
    }
  };
</script>

<style scoped>
.nav{
  width: 15%;
  height: calc(100vh - 49px);
  background-image: url('../assets/bg.jpeg');
  padding-top: 2%;
  display: inline-block;
}
.nav-item{
  width: transparent;
  height: 65px;
  line-height: 40px;
  text-align: right;
  color: white;
  padding-right: 20%;
}
/* 设置鼠标放上去之后就会变成一个手指 */
.nav-item:hover{
  cursor: pointer;
}
</style>
