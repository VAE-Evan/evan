<template>
  <div class="toView">
    <el-table
      :data="menuList"
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
</template>

<script>
  export default {
    name: "toView",
    data() {
      return {
        menuList : [],
      }
    },
    mounted() {
        let menuList = JSON.parse(localStorage.getItem('userList'));
        this.menuList = menuList;
    }
  }
</script>

<style scoped>

</style>
