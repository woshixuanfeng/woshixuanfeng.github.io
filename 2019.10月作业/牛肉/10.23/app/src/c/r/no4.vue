<template>
	<div id="no4">
		<div style="overflow: hidden;line-height: 50px;">
			<el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>资讯动态</el-breadcrumb-item>
			</el-breadcrumb>
			<div style="float: right;">
				<span v-for="i in nav_arr" style="padding: 0 15px;" @click="btn(i)">{{i}}</span>
			</div>
		</div>
		<el-row v-loading="loading">
			<el-col :span="8" v-for="i in list_arr">
				<list :no3_json="i" v-if="i.type == index"></list>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import list from './../p/list.vue'
	export default{
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
		data(){
			return{
				loading: false,
				nav_arr: ['公司新闻', '行业资讯',],
				index:'公司新闻',
				list_arr: [{
						name: '保质保鲜',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
						type: '公司新闻'
					},
					{
						name: '物美价廉',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持..",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvZmQwODk0MTQyZTczNDkzODA1ZTZmN2MwNWU5YjcwNzgtMjAweDEyMy5wbmc_p_p100_p_3D.png',
						type: '公司新闻'
					},
					{
						name: '火腿很有嚼劲',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持..",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvMWZkN2IyNDY5ZDBiZmMzZDgzNTQ1NjkyZDcxMzQ5NmMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
						type: '公司新闻'
					},
					{
						name: '肉质鲜嫩，口感非常好',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持..",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOGQ3MmM5MGNmMzAyZDZmMDZkMjc5NjFjYmIxMDljOTctMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
						type: '行业资讯'
					},
					{
						name: '新疆畜牧业加强推广"四良一规范"',
						content: "由全国音乐教育服务联盟合作平台（中国乐器协会、中央音乐学院、中国教育学会音乐教育分会、中国音乐家协会管乐学会）、北京乐器学会、消费日报社等战略合作单位联合发起的2017中国“6·21 国际乐器演奏日”...",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvOTliZmYyNDViZmVmNWM0ZjVlMWZkYTcyNWM2NjRhNDMtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
						type: '行业资讯'
					},
					{
						name: '传统农牧业70年的现代机构',
						content: "我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持..",
						imgurl: 'https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvYzJhZjM3OWRjMDZkMDEwNDk0ZmJlNWZmYzcwNDc4ZDEtMjAweDEyMy5qcGc_p_p100_p_3D.jpg',
						type: '行业资讯'
					},

				]
			}
		}
	}
</script>

<style>
	#no4 .el-breadcrumb__inner {
		line-height: 50px;
	}
</style>