<template>
  <div class="index">
    <div class="title">
      <h2>后台管理系统</h2>
      <div>
        <p>{{username}}</p>
        <i class="el-icon-switch-button" @click="exit">退出</i>
      </div>
    </div>

<!--      内容区域-->
    <div class="main">
      <!--    侧边导航栏-->
      <div class="leftNav">
        <el-tree :data="navList" :props="defaultProps" accordion @node-click="handleNodeClick">
        </el-tree>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        username : "123",
        navList : [
          {
            label : "新增",
            path : "/inset"
          },
          {
            label: "查看",
            path : "/toView"
          },
          {
            label: "编辑",
            path : "/redact"
          },
          {
            label: "删除",
            path : "/del"
          },
          {
            label: "查询",
            path : "/inQuery"
          }
        ],
        defaultProps: {
          label: 'label'
        }
      }
    },
    methods : {
      handleNodeClick(data){   //跳转页面
        this.$router.push(data.path).catch(res=>{})
      },
      exit(){   //退出
        localStorage.removeItem('userName');
        this.$router.push('/login');
      }
    },
    mounted() {
      let userName = JSON.parse(localStorage.getItem('userName'));
      if(!userName){
        this.$router.push('/login')
      }else {
        this.username = userName.username;
      }
    }
  }
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
