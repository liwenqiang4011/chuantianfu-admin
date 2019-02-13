<template>
  <div class="ctf-dish-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-tabs type="border-card">
        <el-tab-pane v-for="(c,i) in dishList" :key="i" :label="c.cname">
          <span slot="label">
            <el-badge :value="c.dishList.length" class="ctf-item">{{c.cname}}</el-badge>
          </span>

          <el-row>
            <el-col v-for="(d,j) in c.dishList" :key="j" :xs="12" :md="8" :lg="8" :xl="3">
              <!--<ctf-dish :data="d"></ctf-dish>-->
              <div style="max-width:80%;height:250px;" @mouseover="show">
                <img :src="require('../assets/img/'+d.imgUrl)" alt="">
                <div class="ctf-textTile">{{d.title}}</div>
                <div class="ctf-none">{{d.detail}}</div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>  
    </el-tabs>
  </div>
</template>


<script>
  export default{
    data(){
      return {
        dishList:[]//[{cid:xx,cname:x,dishList:[]}]
      }
    },
    methods:{
      show(){
        
      }
    },
    mounted() {
      //异步获取菜品列表
      var url=this.$store.state.globalSettings.apiUrl+'/admin/dish';
      this.$axios.get(url).then(({data})=>{
        this.dishList=data;
      }).catch((err)=>{
        console.log(err)
      })
    },
  }
  
</script>
<style lang="scss">
  .ctf-tab{
    padding-top:20px;
  }
  .ctf-item{
    top:8px;
  }
  .ctf-textTile{
    position: relative;
    left: 0;
    top: -160px;
    color:#fff;
  }
  .ctf-none{
    position: relative;
    left:0;
    top:-150px;
    font-size:10px;
    color:#fff;
  }
</style>