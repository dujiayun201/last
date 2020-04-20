<template>
  <div class="box1">
    <div class="nav">
      <button @click="back()">上一页</button>
    </div>

    <div class="int">
      <input type="text" class="in" v-model="search" @keydown.enter="dian()">
      
    </div>
    <div v-show="ls" class="ls">
      <div v-for="(item,key) in arr" :key="key">
        {{item}}
      </div>
      <div @click="del">
        删除
        
      </div>
    </div>
    <!-- 列表页 -->
    <div class="box2">
      <div v-for="(item,key) in list1" :key='key' class="content">
      <img :src="item.s_pic" alt="" class="img">
        <p class="p1">{{item.title}}</p>
        <p class="p2">
          <span class="span1">￥{{item.price}}</span>
          <img src="" alt="" class="img2" @click="add(item)">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name:"Djy",
    data(){
      return{
        search:'',
        list1:[],
        arr:JSON.parse(localStorage.getItem('ls'))||[],
        ls:true
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      dian(){
        axios.get('../../static/list.json').then(({data:res})=>{
          this.ls=true
          this.list1=res.result.filter(item=>{
            return item.title.includes(this.search)
          })
          console.log(this.list1)
        })

        this.arr=JSON.parse(localStorage.getItem('ls'))||[]

        if(this.arr.length>=6){
          this.arr.push(this.search)
          this.arr.shift()
        }else{
          this.arr.push(this.search)
        }
        console.log(this.arr)

        this.arr=[...new Set(this.arr)]
        localStorage.getItem('ls',JSON.stringify(this.arr))
      
      },
      del(){
        localStorage.clear()
        this.arr=[]
      }

    },
    add(){

    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.box1{
  margin-top: 55px;
}
.nav{
  display: flex;
  font-size: 18px;
}
.nav{
  margin-left: 10px;
}
.int{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.in{
  width: 80%;
    height: 30px;
    border: none;
    background: yellow;
    padding-left:30px ;
}
.ls{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  margin-top: 10px;
}
.box2{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  flex-wrap: wrap;
}
.content{
  width: 53%;
  height: 189px;
  /* border: 1px solid #ccc; */
  font-size: 12px;
  background: #F8F8F8;
  margin-top: 10px;
}
.img{
  width: 176px;
  height: 120px;
}
.p1{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 10px;
}
.p2{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 10px;
}
.img2{
  width: 15px;
}
.span1{
  font-size: 16px;
}

</style>