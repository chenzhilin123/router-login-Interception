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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'command',
  data () {
    return {
      msg: 'command'
    }
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
