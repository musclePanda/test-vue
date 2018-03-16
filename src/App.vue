
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
/*初始化样式*/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,textarea,p,blockquote,th,td,form,pre{margin: 0; padding: 0; -webkit-tap-highlight-color:rgba(0,0,0,0)}
body{-webkit-font-feature-settings: 'kern' 1; -moz-font-feature-settings: 'kern' 1; -o-font-feature-settings: 'kern' 1; text-rendering: geometricPrecision; font-family: Verdana, Geneva, sans-serif; background-color: #f4f4f4;  top: 0;}
a{text-decoration: none;}
a:active,a:hover{outline:0}
img{display: inline-block; border: none; vertical-align: middle;}
li{list-style:none;}
button,input,select,textarea{font-size: 100%; }
input,button,textarea,select,optgroup,option{font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; outline: 0;}
pre{white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;}

/*通用浮动*/
.fr{float: right;}
.fl{float:left;}
</style>
