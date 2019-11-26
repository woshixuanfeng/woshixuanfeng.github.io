<template>
  <div>
    <div @click.capture="baba" style="line-height: 50px;z-index: 10">
      <navBar :data="menu" @indexChange="i=$event"></navBar>
      <!-- <navBar :data="menu" @indexChange="news_List($event,true)"></navBar> -->
    </div>

    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            
      <ul class="news-list">
        <!-- 跳转页面 -->
        <router-link :to="{name:'page',params:{url:data}}">
        <li v-for="(item,index) in newsList" :key="index" @click="news(item.url)">
          <p>{{item.title}}</p>
          <img :src="item.multi_imgs[0]" alt />
          <img :src="item.multi_imgs[1]" alt />
          <img :src="item.multi_imgs[2]" alt />
          <p>
             <span>{{item.category2_chn}}</span>
             <span>{{item.source}}</span>
             <!-- <span>{{item.category1_id}}</span> -->
            <span>{{item.publish_time}}</span>
            <!-- <span>{{item.update_time}}</span> -->
          </p>
        </li>
        <!-- 上拉加载 -->
           
        <!-- {{refashs}} -->
        </router-link>
      </ul>
      </van-pull-refresh>
    </div>

 
  </div>
</template>


<script>
import navBar from "./nav.vue";
export default {
  data() {
    return {
      ext: 'games',
      data:[],
      i: 0,
      page: 0,
      isLoading: false,
      menu:[
        {
          name: "教育",
          ext: "edu"
        },
        {
          name: "生肖",
          ext: "astro"
        },
        {
          name: "文化",
          ext: "cul"
        },
        {
          name: "房产",
          ext: "house"
        },
        {
          name: "体育",
          ext: "sports"
        },
        {
          name: "数码",
          ext: "tech"
        },
        {
          name: "游戏",
          ext: "games"
        },
        {
          name: "时政",
          ext: "finance"
        },
        {
          name: "娱乐",
          ext: "fashion"
        },
        {
          name: "汽车",
          ext: "auto"
        },
        {
          name: "美食",
          ext: "food"
        }
      ],
      newsList: []
    };
  },
  created(){
    this.ajax()
  },
  components: {
    navBar
  },
  methods:{
    ajax(){
      this.axios.get(`/irs/rcd?cid=56&ext=${this.ext}&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=${this.page}`).then((res) => {
        this.newsList = res.data.data
        //  console.log(this.newsList)
      })
    },
    news(url){
      this.data.push(url)
      //  console.log(this.data)
    },
    // 下拉加载
    onRefresh() {
        this.page++;
      setTimeout(() => {
        this.ajax()
        this.isLoading = false;
      }, 500);
    },
    baba(){
      this.ext = localStorage.ext
      this.ajax()
    }
  }
};
</script>

<style>
.header{
  height: 15vw;
  background: #d33d3e;
}
.header input{
  height: 3vw;
  width: 70%;
  margin-left: 12vw;
  margin-top: 4vw;
  padding: 3vw;
  outline: none;
  border: none;
  font-size: 4vw;
}
ul.news-list {
  height: auto;
  margin-top: 20px;

}
ul.news-list a li {
  padding: 10px 20px;
  border-bottom: 3px solid #ccc;
}
ul.news-list a li p {
  line-height: 1rem;
  font-size: 0.8em;
  color: #000;
}
ul.news-list a li img {
  width: 30%;
  height: 80px;
  margin: 15px 1.5%;
}
ul.news-list a li p span {
  color: #aaa;
  font-size: 0.5em;
  margin-left: 5px;
}
</style>
