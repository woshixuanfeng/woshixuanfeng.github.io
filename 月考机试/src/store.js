import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log(Vuex)
export default new Vuex.Store({
  state: {
	list_arr:['水饺','流食','凉菜','包子','庆丰福棕','庆丰特色冷饮','豆浆饮片'],
  },
  getters:{
	  arr1(state){
		  return  state.arr
	  }
  },
  mutations: {
	
  },
  actions: {
	
  }
})
