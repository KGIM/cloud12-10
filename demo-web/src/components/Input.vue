<template>
  <div class="inputItem">
     <span class="inputName">
       <slot></slot>
     </span>
     <span class="input">
       <!-- v-model双向绑定 -->
       <input :type="type" v-model.trim="inputValue" @change="pushValue" :placeholder="placeholder"/>
       <div v-if="unvalid" class="message">{{message}}</div>
     </span>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name:'InputItem',
  components:{
    Button
  },
  data() {
    return {
      inputValue:'',
    }
  },
  methods: {
    pushValue(){
      const value = this.inputValue.replace(' ', '');
      this.$emit('getInputValue', value);
    }
  },
  // props会自动绑定到this上，直接this.变量就能获取到
  props:{
    type:{
      type:String,
      default:'text'
    },
    placeholder:{
      type:String,
      default:''
    },
    message:{
      type:String,
      default:''
    },
    unvalid:{
      type:Boolean,
      default:false
    }
  },
  
}
</script>

<style scoped>
.inputItem{
  display: flex;
  width: 70vw;
  margin: 0 auto;
}
/* 输入框 */
.inputItem input{
  width: calc(60vw - 100px);
  height: 40px;
  vertical-align: middle;
  outline: none;
  font-size: 20px;
}
/* 输入的提示信息 */
.inputName{
  width: 200px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: right;
  /* border: 1px solid red; */
}
/* 提示信息 */
.message{
  height: 40px;
  line-height: 40px;
  color: red;
}
.input{
  display: inline-block;
  text-align: left;
}
</style>