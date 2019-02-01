<template>
    <div class="ctf-table-info">
        <el-card class="hover">
            <div class="ctf-table" :style="{backgroundColor:getTableColor(data.status)}">{{data.tid}}号桌：{{data.status|tableStatus}}</div>
            <el-button size="mini" type="success" plain @click="showTableDetail">详情</el-button>
            <el-button size="mini" type="danger" plain @click="update">修改</el-button>
        </el-card>

        <!--桌台详情对话框-->
        <el-dialog :title="data.tid+'号桌台详情'" :visible="dialogTableDetailVisible" 
        :before-close="closeDialogTableDetail">
            <!--对话框主体-->
            <el-tabs type="border-card" @tab-click="makeQRcode">
                <el-tab-pane label="桌台状态">
                    状态
                </el-tab-pane>
                <el-tab-pane label="桌台二维码">
                    <div><img :src="qrcodeData"></img></div>
                    <el-button size="mini" type="primary">下载二维码</el-button>
                    <div class="ctf-hint">提示：请将此二维码打印于对应桌台；顾客扫码即可点餐</div>
                </el-tab-pane>
            </el-tabs>
            <!--对话框尾部-->
            <div slot="footer">
                <el-button type="primary" @click="dialogTableDetailVisible=false">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props:['data'],
    data(){
        return {
            dialogTableDetailVisible:false,
            qrcodeData:''
        }
    },
    methods: {
        getTableColor(sts){
            if(sts==1) return "#67c231";
            else if(sts==2) return '#e6a23c';
            else if(sts==3) return '#f56c6c';
            else return '#909399';
        },
        showTableDetail(){
            //console.log(this.data)
            this.dialogTableDetailVisible=true;
        },
        closeDialogTableDetail(){
            this.dialogTableDetailVisible=false;
        },
        makeQRcode(){
            //创建二维码--注意此方法不能再当前组件的mountend中调用，
            //因为绘图必须的canvas再el-dialog中，对话框再组件加载时
            //并不在DOM树上
            var qrcode=require('qrcode');
            //每个桌子对应的URL应该形如：
            //http://127.0.0.1:8092/#/3
            var tableUrl=this.$store.state.globalSettings.appUrl+'/#/'+this.data.tid;
            
            //把绘制得到的图片二进制数据转换为Base64编码的字符串
            qrcode.toDataURL(tableUrl,{
                width:200,
                errorCorrectionLevel:'H'
            },(err,url)=>{
                //console.log("二维码图片回执完成")
                //console.log(url)
                this.qrcodeData=url;
            })
        },
        update(){
            console.log("哈哈")
        }
    },
    
}
</script>
<style lang="scss">
    .ctf-table-info{
        padding:3px;
        text-align:center;
        .ctf-table{
            width:90%;
            height:120px;
            border-radius:50%;
            background:url(../assets/01.png) no-repeat;
            background-size:80% 80%;
            background-position:50% 50%;
            text-align:center;
            margin:20px auto;
            line-height:120px;
            font-size:20px;
            font-weight:bold;
            box-shadow:5px -4px 20px 3px #006699;
        }
        .ctf-hint{
            margin:10px 0;
        }
    }
</style>