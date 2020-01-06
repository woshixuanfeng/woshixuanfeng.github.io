<template>
  <div id="app" v-cloak>
	 <keep-alive>
		<router-view></router-view>
	 </keep-alive>
  </div>
</template>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[v-cloak]{
	display:none;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
	-webkit-user-select:none;
}
</style>
