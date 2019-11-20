<template>
	<div class="clearfix" style="padding-top: 60px;">
		<div style="text-align: center;width: 300px;height: 290px;float: left;margin:0 40px;" v-for="i in arr">
			<img style="margin-bottom: 16px;" :src="i.img" alt="" />
			<p style="font-size:12px;color: #696969;margin-bottom: 26px;">{{i.name}}</p>
			<div style="font-size: 12px;color: #808080;line-height: 40px;width: 360px;">{{i.test}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr:[
				{
					img:'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvZjgxMjkwZTg3YTEzM2ZkNWFiM2IzY2ExNjdhNTA3ZDgucG5n.png',
					name:'页面要炫酷,颜值要高',
					test:'人靠衣装马靠鞍,一个炫酷的网站才配得上创业者的新潮创 意.微企点采用HTML5最新技术,拥有大气舒适的界面和众多 精美模板,用起飞页制作一个高逼格.高颜值的炫酷网站, 让您的创业项目脱颖而出,非同凡响.'
				},
				{
					img:'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvY2JmYjViODAyM2M4ZjczMzU4YmY0OGIxMmEwNmRjNDkucG5n.png',
					name:'简单易用,随需而变',
					test:'互联网创业瞬息万变,天下武功,唯快不破.创业者可以按需选择起飞页中精美的网页模板,预置栏目,快速添加和编辑网页无需编程,一步即创建一个炫酷高颜值的网站.网站从无到有,倚马可待.'
				},
				{
					img:'https://ccdn.goodq.top/caches/38ad257d4bd31c1e897c7f2f4f0c83f3/aHR0cHM6Ly81NmM0MmI1MDY3NmYxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvMzY3N2Y5N2FhMjQ5YThmNmFlODUxNGJiM2E1NWExZGEucG5n.png',
					name:'支持多终端跨屏展示',
					test:'在移动互联网全面渗透时,创业者需要一个随屏幕大小不同而自动伸缩的网站,这样同一份内容都可为不同终端用户带来最佳用户体验.微企点使用最新的HTML5响应式技术,网页界面随不同屏幕尺寸自动伸缩.'
				}
			]
			}
		}
	}
</script>

<style>
	.clearfix:after,.clearfix:before{
        content: "";
        display: table;
    }
    .clearfix:after{
        clear: both;
    }
    .clearfix{
        *zoom: 1;
    }
</style>