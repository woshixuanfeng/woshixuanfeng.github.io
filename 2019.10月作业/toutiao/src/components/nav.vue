<template>
  <div class="swiper-container" id="nav">
    <ul class="nav-bar swiper-wrapper">
      <li class="swiper-slide" :class="{active:index==activeIndex}" v-for="(item,index) in list" :key="index"  @click="changeN(item.ext,index)">
          {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
import Swiper from "swiper";
//  console.log(Swiper)
export default {
  props: ["data"],
  data() {
    return {
      activeIndex: 0,
      list: this.data || [],
      mySwiper: null,
      newsList: []
    };
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper-container", {
      freeMode: true,
      slidesPerView: 6,
    //   slidesPerGroup: 1
    });
  },
  methods: {
    changeN(e,i) {
      this.activeIndex = i
      // console.log(e);
      localStorage.ext = e
      // this.$http.get( "/irs/rcd?cid=56&ext=" + e +"&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0",
      //   ).then(data => {
      //     // this.newslist = data.data.data;
      //     localStorage.data = JSON.stringify(this.newslist);
      //   });
    }
  }




};
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
     cursor: pointer;
}
#nav {
  /*border-bottom: 1px solid #ccc;*/
  height: 40px;
  /* background: #ccc; */
  line-height: 40px;
}
#nav ul {
  padding: 0;
}
#nav ul > li {
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  /* margin-left: 10px; */
}
#nav ul > li.active {
  color: red;
  font-size: 1em;
}
</style>
