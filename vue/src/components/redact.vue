<template>
  <div class="redact">
    <el-table :data="menuList" style="width: 100%">
      <el-table-column label="用户名" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.userName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="180">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.password }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :disabled="scope.row.userName == 'admin' ? true : false"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="amend" v-if="amend">
      用户名:
      <el-input v-model="username" placeholder="请输入账号"></el-input>
      <br>
      密<i></i>码:
      <el-input placeholder="请输入密码" v-model="password"></el-input>
      <el-button type="danger" round @click="edit">确认修改</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "redact",
    data() {
      return {
        menuList: [],
        amend : false,
        username : "",
        password : "",
        index : ""
      }
    },
    mounted() {
      let menuList = JSON.parse(localStorage.getItem('userList'));
      this.menuList = menuList;
    },
    methods: {
      handleEdit(index,row){   //编辑
        this.amend = true;
        this.username = row.userName
        this.password =  row.password
        this.index = index;
      },
      edit(){
        this.amend = false;
        this.menuList[this.index].userName = this.username;
        this.menuList[this.index].password = this.password;
        localStorage.setItem('userList',JSON.stringify(this.menuList));
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/redact.css";
</style>
