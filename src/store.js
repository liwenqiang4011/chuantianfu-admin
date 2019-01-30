import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({   //本质与sessionStorage
  //公共数据读取方法：this.$store.state.adminName
  state: {  //当前数据的状态，作用类似于Vue组件的data属性
    adminName:'',//当前登录的管理员名
    globalSettings:{//项目的全局设置信息
      apiUrl:'http://127.0.0.1:8090' //初始默认值
    }  
  },
  //公共数据修改方法：this.$store.commit('setAdimName','boss')
  mutations: {//控制数据的进化（即修改state），类似于组件对象中的methods--用mutations修改数据可以保证数据的“响应式”
    setAdimName(state,value){
      state.adminName = value
    },
    setGlobalSettings(state,value){
      state.globalSettings = value
    }

  },
  
})
