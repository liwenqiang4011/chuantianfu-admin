<template>
  <div class="login">
    <el-card class="ctf-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="100px">

          <el-form-item label="管理员名">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="formData.apwd" placeholder="请输入管理员密码" type="password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {//普通组件的模型数据
      return {
        formData:{
          aname:'admin',
          apwd:'123456'
        }
      }
    },
    methods: {
      doLogin(){  //执行登录
        if(this.formData.aname=="" || this.formData.apwd==""){
          this.$alert('用户名或密码不能为空！','登录失败',{type:'error'})
          return 
        }
        var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`
        this.$axios.get(url).then((res)=>{
          if(res.data.code==200){ 
            this.$store.commit('setAdimName',this.formData.aname)//用户名存储在Vuex
            this.$router.push('/table/list')//跳转
          }else{
            this.$alert('用户名或密码有误！','登录失败',{type:'error'}).then(()=>{}).catch(()=>{})
          }
        }).catch((err)=>{
            console.log(err);
        })
      },
      doCancel(){ //清除用户输入
        this.formData.aname="";
        this.formData.apwd="";
      }
    },
  }
</script>


<style lang="scss">
  .ctf-login-card{
    width:400px;
    margin:188px auto;
  }
  .el-card__header{
    text-align: center;
  }
</style>