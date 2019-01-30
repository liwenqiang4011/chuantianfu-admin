<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted() {
        //当前组件挂载完成后需要异步请求全局设置数据
        var url=this.$store.state.globalSettings.apiUrl+'/admin/settings'
        this.$axios.get(url).then((res)=>{
          this.$store.commit('setGlobalSettings',res.data)
        }).catch((err)=>{
          console.log(err)
        })
      }
  }
</script>

<style lang="scss">
  body{
    background:url(assets/3.jpg) center top;
    background-size:cover;
    background-attachment:scroll;
  }
  #app{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color:#303133;
  }
</style>
