<template>
  <div class="main">
      <div class="header">
        <img src="../../assets/img/logo3.png" alt="logo">
        <span class="title">批发市场信息化管理系统</span>
        <i class="iconfont icon-diannaoguzhang"></i>
      </div>
      <div class="contant">
          <div class="sidebar">

          </div>
          <div class="article">

          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {

    }
  },
  methods :{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{display:flex;flex-direction:column;height: 100%;}
.header{height:70px;background-color: #176cdc;border-radius: 15px 15px 0px 0px;border-bottom: 1px #6b5458 solid;}
.header img{width: 35px;padding: 19px;}
.title{color:#fff;font-size: 18px;}
.contant{flex-grow: 1;display: flex;}
.sidebar{width: 230px;background-color: blue;}
.article{display: flex;flex-grow: 1;}
</style>
