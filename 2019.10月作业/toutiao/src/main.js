import Vue from 'vue'
import App from './App.vue'
//import VueResource from 'vue-resource'

import axios from 'axios'
import vueAxios from 'vue-axios'
Vue.use(vueAxios, axios)

import qs from 'qs'
import { Button, PullRefresh } from 'vant';
Vue.use(Button)
Vue.use(PullRefresh);
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '../vue.config'

import router from './router'
//Vue.use(VueResource)
Vue.prototype.$axios = axios

Vue.prototype.qs = qs
    Vue.use(swiper)

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')