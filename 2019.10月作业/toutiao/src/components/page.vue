<template>
  <div class="content">
      <router-link to="/">&lt;
         <span>返回首页</span>
      </router-link>
      <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    data(){
        return{
            url:"https://pacaio.match.qq.com/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0",
        }
    },
    created(){
        this.url = this.$route.params.url[0]
        // console.log(this.url)
    }
}
</script>

<style>

*{
    margin:0;
    padding:0;
}
.content span{
   font-size: 14px;
   margin-left: 5px;
   margin-top: 10px; 
   line-height: 20px;
   color: black;
   /* background: palegreen;
   display: inline-block; */
} 
.content iframe{
    width:100%;
    height:700px;
    margin-top: 20px;
}
</style>