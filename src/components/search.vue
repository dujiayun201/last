<template>
  <div id="">
<input type="text" placeholder="请输入关键字" @click="jump">
  </div>
</template>

<script>
export default {
name:"Search",
data() {
return {

}
},
methods:{
jump(){
    this.$router.push("/djy")
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
input{width:100%;height: 50px;border:1px solid;text-align: center}
</style>