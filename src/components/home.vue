<template>
  <div id="">
      <div class="one">
        <Search></Search>
      </div>
      <!-- list -->
      <ul type="none" class="ul1">
        <li v-for="(item,index) in list" :key="index" @click="add(item._id)">
          {{item.title}}
        </li>
      </ul>
       价格：
         <button @click="top">上</button>
           <button @click="bottom">下</button>

      <!-- list1 -->
       <ul type="none" class="ul2">
        <li v-for="(item,index) in list1" :key="index">
          <img class="img" :src="item.s_pic" alt="">
          {{item.title}}
          ￥{{item.price}}
         
          <span@click="fn"><img class="car" src="../../static/img/car.jpg"/></span@click="fn">
        </li>
      </ul>
      <!-- 弹框 -->
      <div class="kuang" v-show="flag"><button @click="del">×</button>
        <ul type="none">
        <li v-for="(item,index) in list1" :key="index">
          <span class="img"><img :src="item.s_pic" alt=""></span>
          <p>{{item.title}}</p>
          <p>￥{{item.price}}<span@click="fn"><img class="car" src="../../static/img/car.jpg"/></span@click="fn"></p>
          <div class="del" @click="del">确定</div>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </li>
        </ul>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import Search from "../components/search"
export default {
name:"Home",
components:{Search},
data() {
return {
list:[],
list1:[],
arr:[],
cont:1,
flag:false
}
},
methods:{
add(n){
  console.log(n)
axios.get("../../static/list.json").then(({data:res})=>{
  this.list1=res.result.filter(item=>{
    return item.cid==n
  })
})
},
fn(n){
  alert("加入购物车成功")
  this.flag=true
  this.arr=n
},
del(){
this.flag=false
},
top(){
  this.list1.sort((a,b)=>{
    return a.price-b.price
  })
},
bottom(){
  this.list1.sort((a,b)=>{
    return b.price-a.price
  })
}
},

//生命周期 - 创建完成（访问当前this实例）
created() {
axios.get("../../static/fenlei.json").then((res)=>{
  console.log(res)
  this.list=res.data.result
})
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
axios.get("../../static/list.json").then((res)=>{
  console.log(res)
    this.list1=res.data.result
})
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
*{margin:0;padding: 0;}
.ul1 {display: flex;justify-content: space-between;flex-wrap: wrap;align-items: center;}
.ul1 li{width: 27%;}
.ul1 li:hover{border-bottom:2px solid red}
.ul2 { display: flex;flex-wrap: wrap;align-items: center;}
.ul2 li{width: 45%;}
.ul2 li .img{width: 100%;}
.car{width: 40px;}
.kuang{width: 99%;height:300px;border:1px solid #dddddd;margin-top: -3px;}
.kuang button{float: right}
.kuang ul li .del{width: 100%;height: 50px;background: yellow;text-align: center;line-height: 50px;}

</style>