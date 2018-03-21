import Vue from 'vue'
import Router from 'vue-router'
import Menu from './menu'
import Command from 'pages/command'
import Welcome from 'coms/welcome'
import { getStorages } from 'comJS/localStorage'
let childs =[];
Menu.map((path)=>{
  childs.push({
    path:path,
    component:resolve => require(['@/components/component'+path],resolve)
  })
});
console.log(childs);
Vue.use(Router);
let routes =[
  {
    path:'/',
    redirect:'/command',
  },
  {
    path:'/command',
    component:resolve => require(['@/components/pages/command'],resolve),
    meta:{requireAuth:true},
    children:[
      {
        path:'chenzhilin/:id',
        component: resolve => require(['@/components/component/user'],resolve)
      }
    ]
  },
  {
    path:'/welcome',
    meta:{requireAuth:true},
    component:resolve => require(['@/components/component/welcome'],resolve)
  },
  {
    path:'/login',
    component:resolve => require(['@/components/pages/login'],resolve)
  }
];
const router = new Router({
	mode:'history',
	routes
});
router.beforeEach((to,from,next)=>{
  if (to.meta.requireAuth) {
    if (getStorages("userName")) {
        next();
    }
    else {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    }
}
else {
    next();
}
});
export default router;
