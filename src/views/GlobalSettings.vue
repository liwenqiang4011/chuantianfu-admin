<template>
  <div class="settings">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>
    <br/>

    <el-card shadow="never" >
      <el-form label-width="130px">
        <el-form-item label="应用名称: ">
          <el-input v-model="appName"></el-input>
        </el-form-item>
        <el-form-item label="应用API网址: ">
          <el-input v-model="apiUrl"></el-input>
        </el-form-item>
        <el-form-item label="后台管理端网址: ">
          <el-input v-model="AdminUrl"></el-input>
        </el-form-item>
        <el-form-item label="客户端App网址: ">
          <el-input v-model="appUrl"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号: ">
          <el-input v-model="icp"></el-input>
        </el-form-item>
        <el-form-item label="版权声明: ">
          <el-input v-model="copyright"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSub">提交</el-button>
          <el-button @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        appName:'',
        apiUrl:'',
        AdminUrl:'',
        appUrl:'',
        icp:'',
        copyright:''
    }
  },
  methods: {
    doSub(){
      console.log("提交")
      var url=this.$store.state.globalSettings.apiUrl+'/admin/settings';
      var data={
        appName:this.appName,
        apiUrl:this.apiUrl,
        AdminUrl:this.AdminUrl,
        appUrl:this.appUrl,
        icp:this.icp,
        copyright:this.copyright
      }
      this.$axios.put(url,data).then((result)=>{
        if(result.data.code==200){
          this.$message.success('全局设置修改成功！')
          //TODO:修改$store中的全局设置

          this.$store.commit('setGlobalSettings',data)
        }else{
          this.$message.error('全局设置修改失败！')
        }
      }).catch((err)=>{
        console.log(err);
      })
    },
    doCancel(){
      this.appName = this.$store.state.globalSettings.appName;
      this.apiUrl = this.$store.state.globalSettings.apiUrl;
      this.AdminUrl = this.$store.state.globalSettings.AdminUrl;
      this.appUrl = this.$store.state.globalSettings.appUrl;
      this.icp = this.$store.state.globalSettings.icp;
      this.copyright = this.$store.state.globalSettings.copyright;
    }
  },
  mounted(){
    //引用复制，两个变量指向一个对象
    //this.formData=this.$store.state.globalSettings;
    //对象复制
    this.doCancel()
  },
}
</script>
