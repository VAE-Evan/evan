<template>
  <div class="del">
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
          <el-button size="mini" type="danger"
                     @click="handleDelete(scope.$index, scope.row)"
                     :disabled="scope.row.userName == 'admin' ? true : false"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "remove",
    data() {
      return {
        menuList: [],
      }
    },
    mounted() {
      let menuList = JSON.parse(localStorage.getItem('userList'));
      this.menuList = menuList;
    },
    methods: {
      handleDelete(index, row) {   //删除
        this.menuList.splice(index);
        localStorage.setItem('userList',JSON.stringify(this.menuList))
      }
    }
  }
</script>

<style scoped>

</style>
