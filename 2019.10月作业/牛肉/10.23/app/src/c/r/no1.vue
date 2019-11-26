<template>
	<div id="no1">
		<el-carousel :interval="5000" arrow="always">
			<el-carousel-item v-for="item in 4" :key="item">
				<img style="width: 100%;height: 100%;background: #CCCCCC;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvZWM1OTM5ZWUyNDMxNjg0MWRmMmJkOTM4MWJjN2IyYTEuanBn.jpg" />
			</el-carousel-item>
		</el-carousel>
		<div style="width: 50%;padding-top: 60px;margin-left: 60px;color: #CCCCCC;font-family: '微软雅黑';">
			产品种类
		</div>
		<div style="width: 50%;margin-left: 60px;color: #CCCCCC;font-family: '微软雅黑';">
			Food types
		</div>
		<div style="float: right;">
			<span v-for="i in nav_arr" style="padding: 0 15px;" @click="btn(i)">{{i}}</span>
		</div>
		<el-row v-loading="loading">
			<el-col :span="8" v-for="i in list_arr">
				<list :no3_json="i" v-if="i.type == index"></list>
			</el-col>
		</el-row>
		<div style="padding-top: 60px;">
			<div style="margin-left: 60px;color: #D3DCE6;font-size:30px;font-family: '微软雅黑';">
				品牌简介
			</div>
			<div style=" margin-left: 60px;color: #D3DCE6;font-size:20px;font-family: '微软雅黑';">
				About us
			</div>
			<div style="padding-top: 30px; margin-left: 60px;color: #CCCCCC;font-size:20px;font-family: '微软雅黑';">
				当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内<br> 容编辑模式让网站制作和维护成为一件轻松惬意的事。 无论您是普通互联网用户,
				<br /> 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站…
			</div>
			<div style="padding-top: 30px;margin-left: 60px;color: #CCCCCC;font-size:20px;font-family: '微软雅黑';">
				MORE >
			</div>
			<div>
				<img style="float: right;margin-right: 30px;width: 400px;height: 400px;margin-top: -350px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvNTllNzZkZmVhZTkyYTRkOWZkOTZmNzVkMjY0MGZlMWMuanBn.jpg" />
			</div>
		</div>
		<div style="padding-top: 60px;">
			<div style="margin-left: 60px;color: #CCCCCC;font-size:30px;font-family: '微软雅黑';">
				食物原产链
			</div>
			<div style=" margin-left: 60px;color: #CCCCCC;font-size:20px;font-family: '微软雅黑';">
				Industry chain
			</div>
		</div>
		<div class="content">
			<a href="#"><img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvMGMyZmVmODZjZWRjZGYyNTYxN2MxZmUxNzNjYjNmOTExLTMwMHgzMDAucG5n.png" /><br>
				<p>农场养殖</p>
			</a>
			<a href="#"><img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvMGMyZmVmODZjZWRjZGYyNTYxN2MxZmUxNzNjYjNmOTEyLTMwMHgzMDAucG5n.png" /><br>
				<p>饲料加工</p>
			</a>
			<a href="#"><img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvNmVlOTZhOTYyZGQ0OWU4YjBkNzQ5ZDYzNjg3Y2MwMjQtMzAweDMwMC5wbmc_p_p100_p_3D.png" /><br>
				<p>屠宰分割</p>
			</a>
			<a href="#"><img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvMGMyZmVmODZjZWRjZGYyNTYxN2MxZmUxNzNjYjNmOTE1LTMwMHgzMDAucG5n.png" /><br>
				<p>质量检验</p>
			</a>
			<a href="#"><img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvMGMyZmVmODZjZWRjZGYyNTYxN2MxZmUxNzNjYjNmOTEtMzAweDMwMC5wbmc_p_p100_p_3D.png" /><br>
				<p>加工包装</p>
			</a>
			<a href="#"><img src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvMGMyZmVmODZjZWRjZGYyNTYxN2MxZmUxNzNjYjNmOTE0LTMwMHgzMDAucG5n.png" /><br>
				<p>物流配送</p>
			</a>
		</div>
		<div style="padding-top: 60px;">
			<div style="margin-left: 60px;color: #CCCCCC;font-size:30px;font-family: '微软雅黑';">
				制作方法
			</div>
			<div style=" margin-left: 60px;color: #CCCCCC;font-size:20px;font-family: '微软雅黑';">
				Cooking
			</div>
		</div>
		<div style="width: 50%;">
			<img style="width: 600px;height: 600px;margin-left: 30px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvYTQ5MzMxNTA0ZGMyOTFlOGZhNzcwMWMwNTNmOGY4ZTEuanBn.jpg" />
		</div>
		<div style="width: 50%;">
			<div style="position: relative;">
				<span style="position: absolute;top: -400px;right:-300px;font-size: 20px;background: #CCCCCC;">白切牛肉</span>
			</div>
			<div style="position: relative;">
				<span style="position: absolute;top: -370px;right:-366px;font-size: 16px;color: #FFFFFF;background: #CCCCCC;">原汁原味，酥烂香鲜</span>
			</div>
			<div style="position: relative;">
				<p style="position: absolute;top: -350px;right:-584px;font-size: 16px;color: #F3F3F3;background: #CCCCCC;display: block;">
					将牛腱子肉洗净，漂去血水，用沸水烫—次，放锅<br /> 
					中，加清水淹没，置旺火上烧沸，撇去浮沫，加黄<br /> 
					酒、八角、姜块(拍松)、葱段、精盐，盖严盖，移<br />
					 至小火上煮至酥烂，以筷子可以戳穿为好，端下锅<br />
					 晾凉，取出牛。将牛肉切成薄片，整齐地排在平盘<br /> 
					中，将白酱油、味精、香油同放碗中调匀，浇在牛肉<br />
					 片上，撒上香菜段、红辣椒丝、蒜蓉，即可上<br />
					 桌。
				</p>
			</div>
		</div>
		<div style="padding-top: 60px;">
			<div style="margin-left: 60px;color: #CCCCCC;font-size:30px;font-family: '微软雅黑';">
				新闻资讯
			</div>
			<div style=" margin-left: 60px;color: #CCCCCC;font-size:20px;font-family: '微软雅黑';">
				News
			</div>
			<div style="width: 50% !important;background: #CCCCCC;transition: all .3s ease-out">
                <img style="width: 400px;height: 200px;margin-left: 60px;margin-top: 30px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtNjAweDM3MC5qcGc_p_p100_p_3D.jpg"/><br />
                <p style="font-size: 16px;color: #000000;text-align: center;margin-top: 20px;">全国粮改饲技术创新与推广</p><br />
                <span style="font-size: 16px;color: #F7F7F7;margin-left:50px;margin-top: 10px;">
                	我们的流线式网页布局设计方案和可视化图文内容编辑模式让网<br />
                	站制作和维护成为一件轻松惬意的事。无论您是普...
                </span>
			</div>
			<div style="width: 50% !important;position: relative;">
				<p style="font-size: 16px;color: #000000;position: absolute;top: -320px;right:-584px;">全国粮改饲技术创新与推广</p><br />
                <span style="font-size: 16px;color: #F7F7F7;position: absolute;top: -300px;right:-584px;">
                	我们的流线式网页布局设计方案和可视化图文内容编辑模式让网<br />
                	站制作和维护成为一件轻松惬意的事。无论您是普...
                </span>
			</div>
		</div>
		<div style="height: 250px;border-bottom: 1px solid #CCCCCC;">
			<div style="padding-top: 30px; margin-left: 60px;color: #CCCCCC;font-size:30px;font-family: '微软雅黑';">
				合作伙伴
			</div>
			<div style=" margin-left: 60px;color: #CCCCCC;font-size:20px;font-family: '微软雅黑';">
				Partner
			</div>
			<div style="text-align: center;">
				<img style="transition:1s all ease-in;transform: scaleX(0.9);width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzBjZDkxOTg3MzJmZGY4ZjNhMjQyZTA0OTM0YjBmM2QucG5n.png"/>
			    <img style="transition:1s all ease-in;transform: scaleX(0.9);width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvOTE0ZjQ0NGM5MmQ0NjdhZDUxODQ2MTk2OTRiYWNmMjMucG5n.png"/>
			    <img style="transition:1s all ease-in;transform: scaleX(0.9);width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNGQ2MDZlYjQyMTQ2MDc3YzI5ZDMyMTQ1ZDU4NzJiYjgucG5n.png"/>
			    <img style="transition:1s all ease-in;transform: scaleX(0.9);width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYjkyMzBiM2RmMTIxOTliNTRkNGJkNWRmNDkzNWE3ZTYucG5n.png"/>
			    <img style="transition:1s all ease-in;transform: scaleX(0.9);width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzZlMDNhZWMzNmQ4ODBiM2VmOGM3MzhmMWVlNTA3MTYucG5n.png"/>
			    <img style="transition:1s all ease-in;transform: scaleX(0.9);width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZGI1OWE2NTUzYzQyYzI3ZTE3MDllYjY0OTg2NGE1ZWIucG5n.png"/>
			</div>
		</div>
		<div style="width: 50%;">
			<h2 style="font-size: 16px;color: #000000;margin-left: 60px;margin-top: 60px;">品牌生鲜网站</h2>
			<div>
				<p style="font-size: 16px;color: #CCCCCC;margin-left: 60px;margin-top: 40px;">地址：苏州市工业园区金鸡湖大道099号大厦</p><br />
			    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">电话：000-66668888</span><br />
			    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">手机：12345678911</span><br />
			    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">传真：000-66668888</span><br />
			    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">邮箱：website@qq.com</span><br />
			    <div id="icons_list-5db136b2c18993312" style="padding-top:15px;padding-bottom:0;padding-right:0;padding-left:0;"m-padding="15px 0px 0px 0px" p-padding="15px 0 0 0"
			    	css_animation_delay="0"qfyuuid="qfy_socail_icons_list_3nw7v" class="qfy-icons_list  qfy-element ">
			    	<ul class="gallery_icon_list" style="text-align:left;">
			   	    <li style="display: inline-block;">
			   	    	<span data-desc data-tj="1" data-ta="2" data-width="150" data-bg data-image style="margin-right:15px;margin-bottom:px" class="black2 qfy-icon qfy-icon_24x24 qq-icon_24x24" title></span>
			   	    </li>
			   		<li style="display: inline-block;">
			   	    	<span data-desc data-tj="1" data-ta="2" data-width="150" data-bg data-image style="margin-right:15px;margin-bottom:px" class="black2 qfy-icon qfy-icon_24x24 qq-icon_24x24" title></span>
			   	    </li>
			   	    <li style="display: inline-block;">
			   	    	<span data-desc data-tj="1" data-ta="2" data-width="150" data-bg data-image style="margin-right:15px;margin-bottom:px" class="black2 qfy-icon qfy-icon_24x24 qq-icon_24x24" title></span>
			   	    </li>
			   	    <li style="clear: both;"></li>
			   </ul>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import list from './../p/list.vue'
	export default {
		components: {
			list
		},
		methods: {
			btn(i) {

				this.loading = true
				setTimeout(() => {
					this.index = i
					this.loading = false
				}, 1000)

			}
		},
		data() {
			return {
				loading: false,
				nav_arr: ['冷冻生鲜', '加工产品', '农副产品'],
				index: '冷冻生鲜',
				list_arr: [{
						name: '火腿',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mOGI1NzYwMmRjMGI5NTk1ZTEzNDNlZjg5Yzg0MzYxMC00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '牛肩肉',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9mMjE3MTA0ZTZkYzI0ZTZkNmNjZDA4MzNkZGJmZTY2MS00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '牛百叶',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9jMTMxNjViYjM3ZjA1ZDE2MTQ4MzUzZDc3MmI1M2RiZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '农副产品'
					},
					{
						name: '牛板筋',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC83MzVmZDAzZWZmYWNjNGIwNmE4MDE0ZTc3NjYyZWY4Mi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '冷冻生鲜'
					},
					{
						name: '牛棒骨',
						content: "可以对产品做一个简单介绍...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cDovLzViOTczMmY5OTQzYzcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC85MWVjZTczNGYxNWZmZWY1NjY0YmY5YTRjMDBkNTMwZi00MDB4MjMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						type: '加工产品'
					},

				]
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.content a {
		display: inline-block;
	}
	
	.content a img {
		width: 180px;
		height: 180px;
		float: left;
		text-align: center;
		margin-left: 20px;
		margin-top: 30px;
	}
	
	.content a p {
		font-size: 26px;
		color: #D3DCE6;
		text-align: center;
		margin-top: 20px;
	}
	.qfy-icon_24x24.black2 {
        background-position-y: -96px;
    }
    .qfy-icon_16x16, .qfy-icon_24x24, .qfy-icon_64x64 {
        box-sizing: border-box;
    }
    .qq-icon_24x24 {
        background-position: -48px 0;
    }
    .qfy-icon_24x24 {
	    background-image: url(//fast.qifeiye.com/FeiEditor/images/icon/social_icon_24x24.png);
	    background-repeat: no-repeat;
	    height: 24px;
	    width: 24px;
	    background-position: 1px 1px;
	    display: inline-block;
	    margin-left: 20px;
   }
</style>