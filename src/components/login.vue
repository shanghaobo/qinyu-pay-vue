<template>
  <div class="login">
    <div class="form">
      <table>
        <tr style="height: 50px;">
          <td class="title">Admin</td>
        </tr>
        <tr>
          <td>
            <el-form ref="form" :model="form">
              <el-form-item>
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
                <el-input v-model="form.username" placeholder="请输入账号" prefix-icon="el-icon-user"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.password" show-password placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button>注册</el-button>
                <el-button type="primary" @click="onSubmit">登录</el-button>
              </el-form-item>
            </el-form>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        form:{
          username:'',
          password:'',
        }
      }
    }
  }
</script>
<style scoped>
  .login{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .login .title{
    font-size: 20px;
    font-weight: 700;
  }
  .login .form{
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top:50%;
    margin-left: -200px;
    margin-top: -150px;
    box-sizing: border-box;
    padding: 20px;
  }
  .login table{
    width: 100%;
    height:100%;
    /*background-color: salmon;*/
  }
</style>
