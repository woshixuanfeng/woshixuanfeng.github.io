Vue.component('index_4',{
	template:"#index3",
	 data(){
                  return {
                        arr: [
                              {
                                    imgurl: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC81N2JhNmMzNTkxYzBkNDAyY2UwZGM4ZDFiMTZlOTljMy0zMTV4MzE1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                                    title: '碳酸钙甘氨酸胶囊',
                                    imgurl1: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC81Zjc5ZmE3MThmNjhkYWQ1MmEwODc0NzI3YjhhNzBmNy0zMTV4MzE1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                                    title1: '维生素E软胶囊'
                              },
                              {
                                    imgurl: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC82NzY0NDY2MGMzN2MyMWViOWMzMDNhYzg5ZjczYTljOC0zMTV4MzE1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                                    title: '槐杞黄颗粒',
                                    imgurl1: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83ZmJiNDlkZTJiYzcwODJkN2U1YmU5MDkwM2IxZDUwMS0zMTV4MzE1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                                    title1: '小儿止咳糖浆'
                              },
                              {
                                    imgurl: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC8zNzliMmIxMGRlYjQ1ODhjMGI4ZDY1NWE1Zjk5YTgyMS0zMTV4MzE1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                                    title: '骨质增生止痛贴',
                                    imgurl1: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cDovLzViNmQ2Y2NhNjM3MzYudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85NWJhYzFiMmEwNDkxNDgzMWNhZjQ3YWRjNTQwMTYxZC0zMTV4MzE1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                                    title1: '复方丹参片'
                              }
                              
                        ]
                  }
            },
            mounted(){
                  let num = 0;
                  let obox = document.querySelector('.swiper-wrapper');
                  let timer = null, cc = null;
                  next.onclick = function(){
                        num>=2 ? num = 0 : num++;
                        obox.style.transform = 'translateX('+ -num*(100/6)+'%)';
                  }
                  prev.onclick = function(){
                        num<=0 ? num = 2 : num--;
                        obox.style.transform = 'translateX('+ -num*(100/6)+'%)';
                  }
                  cc = timer = setInterval(() => {
                       num>=2 ? num = 0 : num++;
                       obox.style.transform = 'translateX('+ -num*(100/6)+'%)';
                  }, 1000);
                  obox.onmouseover = function(){
                        clearInterval(timer)
                        timer = null;
                  }
                  obox.onmouseout = function(){
                        timer = cc;
                  }
		
            }
})