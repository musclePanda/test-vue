<template>
  <div class="login">
    <div class="head">
      <img src="../assets/img/logo.png" alt="logo">
    </div>
    <div class="contant">
      <div class="inner">
        <img src="../assets/img/innerLogin.png" alt="">
        <el-form ref="form" :model="form">
            <el-input v-model="form.name" autofocus placeholder="请输入用户名"></el-input>
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form>
      </div>
      <footer>{{footerName}}</footer>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>请输入正确的用户名和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
        footerName:'秦皇岛亿德力科技股份有限公司',
        form: {
          name: '',
          password:''
        },
        dialogVisible: false
    }
  },
  methods :{
    onSubmit() {
      let _this = this;
      axios.get('http://rapapi.org/mockjs/33701/data.json?')
      .then(function (response) {
        if(_this.form.name == response.data.userName && _this.form.password == response.data.password){
          _this.$router.push({path:'./main'})
        }else{
          _this.dialogVisible = true
        }
      })
    },
    clickClose(){
      this.dialogVisible = false
      this.form.name = ''
      this.form.password = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{display:flex;flex-direction:column;height:100%;}
.head{height:80px;background-image: url('../assets/img/bgHead.png')}
.head img{width:400px;padding:10px 20px}
.contant{flex-grow: 1;background-image: url('../assets/img/bgMain.png');background-size: cover;}
footer{
  border-top: 1px white solid;
  box-shadow: 0 0 5px white;
  background-color: rgba(3,3,3,0.5);
  color: #fff;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.inner{
  margin: 0px 15px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  width: 340px;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  margin-top: -200px;
  right: 10%
}
.el-form{
  padding: 0 20px;
}
.el-input{
  margin-top:20px;
}
.el-button{
  width: 180px;
  margin:20px 0;
}
</style>
