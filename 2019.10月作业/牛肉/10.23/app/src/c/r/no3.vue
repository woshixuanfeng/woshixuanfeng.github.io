<template>
	<div id="no3">
		<div style="overflow: hidden;line-height: 50px;">
			<el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>产品中心</el-breadcrumb-item>
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
	#no3 .el-breadcrumb__inner {
		line-height: 50px;
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