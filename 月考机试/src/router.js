import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld  from './components/HelloWorld.vue'
import shop from '@/components/shop'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	  {
	    path: '/',
	    name: 'HelloWorld',
	    component:HelloWorld
	 },
	 {
	 	 path:'/shop',
		name:'shop',
		component:shop
	 },
    {
      path: '/',
      name: 'home',
      component: Home
    },
	{
		path: '*',
		redirect:'/'
	},
	// redirect:重定向  匹配到的地址重新跳转到另一个路由下必须写在最下面
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
