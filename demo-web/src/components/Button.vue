<template>
  <button class="btn" :style="{backgroundColor:color}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:"Button",
  props:{
    color:{
      type:String,
      default:''
    }
  }
}
</script>

<style scoped>
  .btn{
    height: 40px;
    border-radius: 5px;
    color:white;
    background-color: #409eff;
    border: none;  
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px;
  }
</style>