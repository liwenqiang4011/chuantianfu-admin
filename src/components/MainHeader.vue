<!--谁要用就要导入-->
<template>
    <div class="ctf-main-header">
        <h3 class="ctf-title">{{$store.state.globalSettings.appName}}管理后台</h3>
        <div class="ctf-right">
            当前用户:{{$store.state.adminName}}
            <el-button size="mini" @click="quit">退出</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        quit(){
           //清除当前用户的信息
           this.$store.commit('setAdimName','');
           //跳转回登录页 
           this.$router.push('/login')
        }
    },
}
</script>

<style lang="scss">
    $header-height:60px;
    .ctf-main-header{
        background:#dcdfe6;
        border-radius:4px;
        line-height:$header-height;
        height:$header-height;
        padding:0 6px;
        .ctf-title{
            color:#303133;
            float:left;
            margin:0;
        }
        .ctf-right{
            float:right;
        }
    }
</style>