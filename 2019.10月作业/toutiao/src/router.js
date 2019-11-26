import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
    // import HelloWorld from './components/HelloWorld'
import home from './components/home'
import nav from './components/nav'
import page from './components/page'
var router = new VueRouter({
    routes: [
        // {
        //     path: '/HelloWorld',
        //     component: HelloWorld
        // },
        {
            path: '/',
            component: home
        },
        {
            path: '/',
            component: nav
        },
        {
            path: '/page',
            name: 'page',
            component: page
        },

    ]
});

export default router