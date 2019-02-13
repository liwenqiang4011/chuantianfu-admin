<template>
  <div class="ctf-table-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
      <el-breadcrumb-item>桌台列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-row>
      <el-col v-for="(t,i) in tableList" :key="i" :xs="12" :sm="8" :md="6" :lg="4" :xl="2">
        <ctf-table :data="t" @parameter="sunPrt"></ctf-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Table from '../components/Table'
export default {
  data() {
    return {
      tableList:[]
    }
  },
  methods:{
    sunPrt(data,tid){
      data.tid=tid
      var url=this.$store.state.globalSettings.apiUrl+"/admin/table"
      this.$axios.put(url,data).then((res)=>{
          this.$message.success('修改成功！')
          this.loadingTabList()//加载桌台列表
      }).catch((err)=>{
          console.log(err)
      })
    },
    loadingTabList(){
      var url=this.$store.state.globalSettings.apiUrl+'/admin/table'
      this.$axios.get(url).then(({data})=>{
          this.tableList=data;
      }).catch((err)=>{
          console.log(err);
      })
    } 
  },
  mounted() {
    //加载桌台列表
    this.loadingTabList();
    
  },
  components:{
    'ctf-table':Table
  }
}
</script>
