<template>
  <div class="inQuery">
    <div class="search">
      <el-input v-model="input" placeholder="请输入要查询的账号"></el-input>
      <el-button icon="el-icon-search" circle @click="search"></el-button>
    </div>
    <div>
      <el-table
        :data="username"
        style="width: 100%">
        <el-table-column
          prop="userName"
          label="账号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
          width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inQuery",
    data() {
      return {
        username: [],
        input:"",
      }
    },
    methods : {
      search(){
        let menuList = JSON.parse(localStorage.getItem('userList'));
        menuList.forEach(item => {
          if(item.userName == this.input){
            this.username = [];
            this.username.push(item)
          }else {
            this.username = [];
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/inQuery.css';
</style>
