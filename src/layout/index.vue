<template>
  <div class="layout">
    <div class="top">
      <div class="logo-box">
        <img src="@/assets/logo.png" class="logo-img">
        <span class="logo-font">啦啦啦啦啦</span>
      </div>
      <div class="userinfo-box">
        <el-menu default-active="-1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <div class="head-img-div">
                <img class="head-img" src="@/assets/head_img.png"></img>
              </div>
              <span style="margin: 5px;">秦羽</span>
            </template>
            <el-menu-item index="1-1">个人信息</el-menu-item>
            <el-menu-item index="1-2">退出登录</el-menu-item>
          </el-submenu>

        </el-menu>
      </div>
    </div>
    <div class="left">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">

        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>

      </el-menu>
    </div>
    <div class="main">
        <router-view></router-view>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      handleSelect(){

      },
      handleOpen(){

      },
      handleClose(){

      },
    }
  }
</script>
<style scoped>
  .layout{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .layout .top{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 4px solid #f0f2f5;
  }
  .layout .left{
    position: absolute;
    top: 64px;
    left: 0;
    width: 200px;
    height: calc(100vh - 64px);
    overflow-y: scroll;
    overflow-x: hidden;
    border-right: 4px solid #f0f2f5;
  }
  .layout .main{
    position: relative;
    top: 64px;
    left: 204px;
    width: calc(100vw - 204px);
    height: calc(100vh - 64px);
    background-color: #f0f2f5;
  }
  .layout .logo-box{
    width: 300px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: left;
    padding-left: 30px;
  }
  .layout .logo-img{
    width: 45px;
    margin: 5px;
  }
  .layout .logo-font{
    line-height: 60px;
    display: inline-block;
    height: 100%;
    vertical-align: top;
    font-size: 20px;
  }
  .layout .userinfo-box{
    position: absolute;
    right: 0;
    top: 0;
    width:150px;
    height: 100%;
  }
  .layout .head-img-div{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background-color: #eeeeee;
  }
  .layout .head-img{
    width: 35px;
    border-radius: 50%;
  }

  .layout .el-menu-vertical-demo{
    width: 100%;
    height: 100%;
  }

  .layout .left::-webkit-scrollbar {
  /*滚动条整体样式*/
  width:5px;  /*高宽分别对应横竖滚动条的尺寸*/
  height:1px;
  }
  .layout .left::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius:10px;
  box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2);
  background:#bdbdbd;
  }

</style>
<style>
  .el-submenu__title i{
    display: none;
  }
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
    min-width: 120px;
  }
  .el-submenu__title{
    padding: 0;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
</style>
