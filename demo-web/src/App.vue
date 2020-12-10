<template>
  <div class="app">
    <Title message='首页'></Title>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Title from './components/Title'
import Nav from './page/Nav'

export default{
  name:'App',
  components:{
    Title,
    Nav
  }
}
</script>

<style scoped>

</style>
