<template>
  <div class="ctf-dish-add">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加菜品</el-breadcrumb-item>
    </el-breadcrumb>
    <br>

    <el-form label-width="100px">
      <el-form-item label="菜品图片 :">
        <el-upload class="ctf-uploader" :action="uploadAction"  :on-success="doUploadSucc" name="dishImg" :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        imageUrl:'',//要显示的预览图片地址
        uploadAction:this.$store.state.globalSettings.apiUrl+'/admin/dish/image',
        formData:{
          title:'',
          imgUrl:'',  //菜品的图片在服务器上的文件
          price:'',
          detail:'',
          categoryId:''
        }
      }
    },
    methods: {
      
      doUploadSucc(res,file){
        //文件上床成功后客户端得到响应消息之后的处理函数
        //res:服务器端返回的响应消息
        //file:从INPUT[type=file]中读取的第一个上传的文件对象
        console.log(res);
        this.formData.imgUrl=res.fileName;
        this.imageUrl=URL.createObjectURL(file.raw);
        //把上传的文件编码为DataURL字符串
      }
    },
  }
</script>
<style lang="scss">
  .ctf-uploader{
    .el-upload{
      border:1px dotted #aaa;
      border-radius:3px;
      cursor:pointer;
      width:250px;
      height:177px;
      overflow: hidden;
      &:hover{
          border-color:#409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
    }
  }

  img{
    max-width:100%;
  }
</style>
