<template>
	<div id="app" v-cloak="">
		<div style="height: 30px;text-align: center;font-size: 16px;">
			<img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDA5ZGI4ZjgzODFlOTMwNTJlMzUzNzNkMTI2ZTMwMzYucG5n.png"/>
		</div>
		   <div style="height: 70px;border-bottom: 1px solid #CCCCCC;text-align: center;">
		   	     <div class="nav">
		   	     	<a href="#/">
		   	     		首页
		   	     	</a>
		   	     </div>
		   	     <div class="nav">
		   	     	<a href="#/no2">
		   	     		品牌介绍
		   	     	</a>
		   	     </div>
		   	     <div class="nav">
		   	     	<a href="#/no3">
		   	     		产品中心
		   	     	</a>
		   	     </div>
		   	     <div class="nav">
		   	     	<a href="#/no4">
		   	     		资讯动态
		   	     	</a>
		   	     </div>
		   	     <div class="nav">
		   	     	<a href="#/no5">
		   	     		养殖基地
		   	     	</a>
		   	     </div>
		   	     <div class="nav">
		   	     	<a href="#/no6">
		   	     		联系我们
		   	     	</a>
		   	     </div>
		   </div>
		   <div style="min-height: 500px;padding: 20px 50px;">
		   	    <router-view></router-view>
		   </div>
		   <div>
		   	
		   </div>
	</div>
</template>

<script>
	export default {
		name: '#app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style>
	[v-cloak]{
		display: none;
	}
  *{
  	margin: 0;
  	padding: 0;
  }
  .nav{
  	display: inline-block;
  	line-height: 70px;
  	padding: 0 20px;
  }
</style>