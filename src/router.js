import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

import GlobalSettings from './views/GlobalSettings.vue'
import TableList from './views/TableList.vue'
import TableAdd from './views/TableAdd.vue'
import TableDelete from './views/TableDelete.vue'
import categoryList from './views/categoryList.vue'
import categoryAdd from './views/categoryAdd.vue'
import categoryDelete from './views/categoryDelete.vue'
import categoryUpdate from './views/categoryUpdate.vue'
import dishList from './views/dishList.vue'
import dishAdd from './views/dishAdd.vue'
import dishDelete from './views/dishDelete.vue'
import dishUpdate from './views/dishUpdate.vue'
import orderList from './views/orderList.vue'
import Security from './views/Security.vue'




Vue.use(Router)
//整个项目的路由词典：访问路径<=>视图组件
export default new Router({
  routes: [
    {path:'/',redirect:'/login'},//重定向
    {path:'/login',component:Login},
    {
      path:'/main',
      component:Main,
      children:[
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        {path:'/category/list',component:categoryList},
        {path:'/category/add',component:categoryAdd},
        {path:'/category/delete',component:categoryDelete},
        {path:'/category/update',component:categoryUpdate},
        {path:'/dish/list',component:dishList},
        {path:'/dish/add',component:dishAdd},
        {path:'/dish/delete',component:dishDelete},
        {path:'/dish/update',component:dishUpdate},
        {path:'/order/list',component:orderList},
        {path:'/security',component:Security},
      ]
    },
    {path:'*',component:NotFound}
  ]
})
