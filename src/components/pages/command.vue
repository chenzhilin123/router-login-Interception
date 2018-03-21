<template>
  <div class="hello">
    {{msg}}
    <router-link to="/welcome">欢迎页面</router-link>
    <div class="sub">
      <router-link to="/command/chenzhilin/1">子路由1</router-link>
    </div>
    <div class="sub">
      <router-link to="/command/chenzhilin/2">子路由2</router-link>
    </div>
    <mu-raised-button label="退出" class="demo-raised-button" primary @click="exits"/>
    <router-view></router-view>
  </div>
</template>

<script>
import { getStorages,clearStorages } from 'comJS/localStorage'
export default {
  name: 'command',
  data () {
    return {
      msg: 'command'
    }
  },
  methods:{
    exits(){
      clearStorages();
      this.$Message.success("退出成功");
      setTimeout(()=>{
        this.$router.go('/');
      },2000);
    }
  },
  created(){
    this.$Message.success("欢迎: "+getStorages("userName"));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub{
  display: flex;
  flex:1;
  height: 30px;
  background:red;
  font-size:14px;
  align-items:center;
  justify-content:center;
}
</style>
