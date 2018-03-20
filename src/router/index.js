import Vue from 'vue'
import Router from 'vue-router'
import Menu from './menu'
import Command from 'pages/command'
import Welcome from 'coms/welcome'
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
    redirect:'/command'
  },
  {
    path:'/command',
    component:resolve => require(['@/components/pages/command'],resolve)
  },
  {
    path:'/welcome',
    component:resolve => require(['@/components/component/welcome'],resolve)
  }
];
const router = new Router({
	mode:'history',
	routes
});
export default router;
