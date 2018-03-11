import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/components/component/welcome'
import menu from './menu'
Vue.use(Router)
let menus =[];
menu.map((x)=>{
	menus.push({
		path:x,
		component:resolve => require([x === '/' ? '@/components/component/welcome' : '@/components/pages' + x],resolve)
	});
});
let routes =[
	{
		path:'/',
		component:resolve => require(['@/components/component/welcome'],resolve),
		children:menus
	}
];
console.log(menus);
const router = new Router({
	mode:'history',
	base:__dirname,
	routes
});
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: welcome
//     }
//   ]
// })
export default router;
