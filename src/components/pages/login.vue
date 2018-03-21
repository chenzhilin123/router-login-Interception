<template>
  <div class="bg_login">
      <div class="lg_modal">
        <mu-auto-complete filter="noFilter" v-model="user.phone" label="请输入手机号" labelFloat :dataSource="dataSource"/>
        <mu-auto-complete filter="noFilter" v-model="user.password" label="请输入密码" labelFloat :dataSource="dataSource"/></br>
        <mu-raised-button label="提交" class="demo-raised-button" primary @click="commit"/>
      </div>
  </div>
</template>

<script>
import {setStorages} from 'comJS/localStorage'
export default {
    data(){
        return{
            dataSource:[],
            user:{
                phone:'',
                password:''
            }
        }
    },
    methods:{
        Toast(message,status){
            if(status){
                this.$Message.success(message);
            }else{
                this.$Message.error(message);
            }
        },
        commit(){
            if(!this.user.phone){
               this.Toast("手机号不能为空",false);
                return;
            }else if(!this.user.password){
                this.Toast("密码不能为空",false);
                return;
            }
            this.Toast("登录成功",true);
            setStorages("userName",this.user.phone);
            setTimeout(()=>{
                this.$router.push("/");
            },2000);
            
        }
    }
}
</script>

<style scoped>
    .bg_login{
        width:100%;
        height:100vh;
        background:url("../../assets/bg_login.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .lg_modal{
        width:500px;
        height: 300px;
        position: fixed;
        margin: auto;
        top:0;
        left: 0;
        right: 0;
        bottom:0;
        background:rgba(255,255,255,0.9);
        text-align: center;
        padding-top:25px;
        border-radius:15px;
    }
    .demo-raised-button{
        margin-top:20px;
    }
</style>

