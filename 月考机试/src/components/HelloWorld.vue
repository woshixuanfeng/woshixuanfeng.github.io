<template>
  <div class="container">
	<!-- 头部 -->
	<div class="header clearfix">
		<p class="text-center">庆丰包子铺</p>
	</div>
	<!-- 内容部分 -->
	<div class="content clearfix">
		<div class="con1 clearfix">
			<div class="conleft">
				<ul class="list clearfix">
					<li v-for="item,index in list_arr" :key="index" @click="z_index=index" :class="{active:index==z_index}">
						{{item}}
					</li>
				</ul>
			</div>
			<div class="conright">
				<div class="clearfix context" v-for="item,index in textarr" v-show="item.index==z_index">
					<div class="boximg">
						<img :src="item.url" alt='' class='img-rounded img1'>
					</div>
					<div class="boxtext">
						<p class="boxtext1">{{item.title}}</p>
						<div class="boxtext2">{{item.text}}</div>
						<div class="price">&yen{{item.price}}</div>
						<div>
							<number v-model="item.num" @input="change(item,$event,index)"></number>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 尾部 -->
	<div class="footer">
		<div class="footer1">
			<p>总价钱:{{zongq}}元</p>
		</div>
		<div class="footer2">
			<router-link :to="{name:'shop',params:{list:textarr}}" tag="span">
				<span>去结算</span>
			</router-link>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
  </div>
</template>
<script>
// $store.state.str
import number from './number.vue'
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    number
  },
  data(){
	  return{
		  z_index:0,
		  arrlist:[],//存放数据
		  textarr:[],
	  }
  },
  //获取数据
  created(){
	 this.$http.get('/index.json').then((data)=>{
	 	console.log(data.data.textarr)
		this.textarr=data.data.textarr
	 })
  },
  //事件函数
  methods:{
	  //监听的事件
  		 change(item,ev,index){
			// console.log(item,ev,index)
			 localStorage.data=JSON.stringify(this.jisu)
			// console.log(localStorage.data)
			 localStorage.price=JSON.stringify(this.zongq)
		 }
  },
  // 计算总价钱
  computed:{
	  //选项卡
	...mapState({
		list_arr:(state)=>{
			return state.list_arr
		}
	}),
	...mapGetters(['arr1']),
	  zongq(){
		  let sum=0
		  for(let i=0;i<this.textarr.length;i++){
			  sum+=this.textarr[i].price*this.textarr[i].num
		  } 
		  return sum
	  },
	  jisu(){
	  		  let num=[]
	  		  for(let i=0;i<this.textarr.length;i++){
	  			  if(this.textarr[i].num!=0){
	  				 num.push(this.textarr[i])
	  			  }
	  		  }
	  		  return num
	  }
  }
}
</script>
<style scoped lang="scss">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		-webkit-user-select:none;
		box-sizing: border-box;
		text-decoration:none;
	}
	.clearfix::after,.clearfix::before{
		content:'';
		display:table;
		clear:both;
	}
	.container{
		width: 100%;
		height:auto;
	}
	.header{
		width: 500px;
		height: 60px;
		line-height:60px;
		border-bottom:1px #e0e0e0 solid;
		margin:0 auto;
	}
	.header>p{
		font-size:20px;
	}
	.content{
		width: 500px;
		margin:0 auto;
	}
	.con1{
		display:flex;
	}
	.conleft{
		flex:0 0 120px;
		min-height:500px;
		background:#f8f8f8;
	}
	.list li{
		width: 120px;
		line-height:60px;
		text-align:center;
		cursor:pointer;
	}
	.active{
		background:#ffffff;
		color:#fd6903;
	}
	.conright{
		flex:0 0 380px;
		min-height:500px;
		padding:10px 20px;
	}
	.context{
		display:flex;
	}
	.boximg{
		width: 120px;
		height: 100px;
		margin:0 10px 10px 0;
	}
	.boximg>.img1{
		width: 100%;
		height: 100%;
	}
	.boxtext1{
		font-size:20px;
	}
	.price{
		color: #de574c;
		font-size:16px;
	}
	.boxtext2{
		color:#979797;
	}
	.footer{
		width: 500px;
		display:flex;
		-webkit-box-orient:horizontal;
		margin:0 auto;
	}
	.footer1{
		flex:0 0 300px;
		min-height:80px;
		background:#505051;
		line-height:80px;
		font-size:24px;
		color:#fff;
		text-align:center;
	}
	.footer2{
		flex:0 0 200px;
		min-height:80px;
		background:#37cb72;
		line-height:80px;
		font-size:24px;
		color:#fff;
		text-align:center;
		cursor:pointer;
	}
	a{
		color:#fff;
	}
</style>
