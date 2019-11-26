import Vue from 'vue'
import Router from 'vue-router'
import no1 from './c/r/no1.vue'
import no2 from './c/r/no2.vue'
import no3 from './c/r/no3.vue'
import no4 from './c/r/no4.vue'
import no5 from './c/r/no5.vue'
import no6 from './c/r/no6.vue'
Vue.use(Router)


export default new Router({
	routes:[
	  {path:"/",name:'no1',component:no1},
	  {path:"/no2",name:'no2',component:no2},
	  {path:"/no3",name:'no3',component:no3},
	  {path:"/no4",name:'no4',component:no4},
	  {path:"/no5",name:'no5',component:no5},
	  {path:"/no6",name:'no6',component:no6}
	]
})









