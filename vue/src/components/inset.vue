<template>
  <div class="inset">
    <div class="login">
      用户名:
      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <br>
      密<i></i>码:
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    </div>
    <el-button type="primary" @click="add">新增用户</el-button>
  </div>
</template>

<script>
  export default {
    name: "inset",
    data() {
      return {
        username: "",
        password: "",
      }
    },
    methods:{
      add(){
        let menuList = JSON.parse(localStorage.getItem('userList'));
        let obj = {
          userName : this.username,
          password : this.password,
        }
        menuList.push(obj);
        localStorage.setItem('userList',JSON.stringify(menuList));
        this.username = "";
        this.password = "";
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/inset.css";
</style>
