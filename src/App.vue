<template>
  <div id="app">
     <header><h1>淘宝</h1></header>
<section>
  <div>
   <router-view></router-view>
  </div>
</section>
 <footer>
   <ul type="none">
     <router-link to="/home" tag="li">
       <p><img src="../static/img/f1.jpg" alt=""></p>
       <p>首页</p>
      </router-link>
     <router-link to="/list" tag="li">
      <p><img src="../static/img/f3.jpg" alt=""></p>
       <p>列表</p>
     </router-link>
     <router-link to="/car" tag="li">
         <p><img src="../static/img/f4.jpg" alt=""></p>
       <p>购物车</p>
     </router-link>
     <router-link to="/my" tag="li">
         <p><img src="../static/img/f2.jpg" alt=""></p>
       <p>我的</p>
     </router-link>
   </ul>
 </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

body {
  display: flex;
  flex-direction: column;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.02rem 0.02rem;
  z-index: 3;
  background: pink;
  position: fixed;
  height: 50px;

}
header h1{margin-left: 36%}
section {
  flex: 1;
  overflow: auto;
  margin-top: 50px;
}

/* section div{
  min-height: 101%;
} */
footer{
  background:white;
  width: 100%;
  /* height: 3rem; */
  position: fixed;
  bottom: 0;

}
footer ul li{float: left;width:25%}
footer ul li p{margin: 0;padding: 0}
footer ul li img{width: 31px;}

</style>
