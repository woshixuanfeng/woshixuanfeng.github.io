<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default{
  name:'app',
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
	text-decoration: none;
}
</style>
