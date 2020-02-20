<template>
  <div class="login">
    用户名:
    <el-input v-model="username" placeholder="请输入账号"></el-input>
    <br>
    密<i></i>码:
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <el-button type="danger" round @click="login">登录</el-button>
    <div class="account">
      管理员账户: "admin"，
      密码: "123"
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: "",
        password: "",
        userList : [],//用户列表
      }
    },
    methods : {
        login() {
          let arr = this.userList;
          let isAdmin = arr.some((item,index)=>{
            return item.userName === this.username && item.password === this.password;
          })
          if(isAdmin){
            let obj = {
              username : this.username,
              password : this.password,
            }
            this.$router.push('/');
            localStorage.setItem("userName",JSON.stringify(obj))
          }else{
            alert('账号或密码错误')
          }
        }
    },
    mounted() {
      // 第一次创建一个管理员账户
      let userList = JSON.parse(localStorage.getItem('userList'));
      this.userList = userList;
      if(!userList){

        let arr = [
          {
            userName: 'admin',
            password : '123'
          }
        ]
        localStorage.setItem('userList',JSON.stringify(arr));
      }

      //如果登录 禁止进入login页面
      let userName = JSON.parse(localStorage.getItem('userName'));
      if(userName){
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
@import "../assets/css/login.css";
</style>
