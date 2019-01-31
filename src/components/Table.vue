<template>
    <div class="ctf-table-info">
        <el-card class="hover">
            <div class="ctf-table">{{data.tid}}号桌：{{data.status|tableStatus}}</div>
            <el-button type="success" plain>详情</el-button>
            <el-button type="danger" plain @click="update">修改</el-button>
        </el-card>
    </div>
</template>
<script>
export default {
    props:['data'],
    methods: {
        update(){
            console.log("哈哈")
        }
    },
    
}
</script>
<style lang="scss">
    .ctf-table-info .ctf-table{

        width:90%;
        height:100px;
        border-radius:50%;
        background:url(../assets/01.png) no-repeat;
        background-size:80% 80%;
        background-position:50% 50%;
        background-color:#f00;
        text-align:center;
        margin:20px auto;
        line-height:100px;
        font-size:20px;
        box-shadow:10px 0 50px 5px #006699;
    }
</style>