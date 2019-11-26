<template>
	<div id="no2">
		<div style="overflow: hidden;line-height: 50px;">
			<el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>品牌介绍</el-breadcrumb-item>
			</el-breadcrumb>
			<div style="float: right;">
				<span v-for="i in nav_arr" style="padding: 0 10px;" @click="btn(i)">{{i}}</span>
			</div>
		</div>
		<div style="line-height: 70px;text-align: center;">
			<a href="#" style="cursor: pointer;color: #000000;">品牌简介</a>
		</div>
		<div style="text-align: center;">
		     <a href="#" style="cursor: pointer;color: #000000;">ABOUT</a>
		</div>
		<div style="text-align: center;">
			<p style="color: #CCCCCC;font-size: 16px;">
				我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方
				案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。<br />
                                        我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方
                                         案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼,您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视
                                         化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字
                                         传图、自由拖拽， 不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件。我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站 制作和维护
                                         成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体,支持打字传图、自由拖拽,不需要专业编写代码，
                                         也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…</p>
		</div>
		<div style="line-height: 70px;text-align: center;margin-top: 20px;">
			<a href="#" style="cursor: pointer;color: #000000;">合作伙伴</a>
		</div>
		<div style="text-align: center;">
		     <a href="#" style="cursor: pointer;color: #000000;">PARTNER</a>
		</div>
		<div style="margin-top: 20px;">
			<a href="#" style="cursor: pointer;"><img style="width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNzBjZDkxOTg3MzJmZGY4ZjNhMjQyZTA0OTM0YjBmM2QucG5n.png"/></a>
			<a href="#" style="cursor: pointer;"><img style="width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvOTE0ZjQ0NGM5MmQ0NjdhZDUxODQ2MTk2OTRiYWNmMjMucG5n.png"/></a>
			<a href="#" style="cursor: pointer;"><img style="width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNGQ2MDZlYjQyMTQ2MDc3YzI5ZDMyMTQ1ZDU4NzJiYjgucG5n.png"/></a>
			<a href="#" style="cursor: pointer;"><img style="width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYjkyMzBiM2RmMTIxOTliNTRkNGJkNWRmNDkzNWE3ZTYucG5n.png"/></a>
			<a href="#" style="cursor: pointer;"><img style="width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzZlMDNhZWMzNmQ4ODBiM2VmOGM3MzhmMWVlNTA3MTYucG5n.png"/></a>
			<a href="#" style="cursor: pointer;"><img style="width: 204px;height: 106px;float: left;margin-left: 10px;margin-top: 20px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZGI1OWE2NTUzYzQyYzI3ZTE3MDllYjY0OTg2NGE1ZWIucG5n.png"/></a><br />
		</div>
		<div style="line-height: 100px;text-align: center;margin-top: 100px;">
			<a href="#" style="cursor: pointer;color: #000000;margin-left: -1290px;">人才招聘</a>
		</div>
		<div style="text-align: center;">
		     <a href="#" style="cursor: pointer;color: #000000;">RECRUIT</a>
		</div>
		<div>
			<div style="width: 50%;">
				<h1 style="font-size: 16px;color: #000000;margin-left: 60px;margin-top: 30px;">应聘岗位:</h1><br />
				<div>
				    <p style="font-size: 16px;color: #000000;margin-left: 60px;">一、资格要求</p><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">1.道德品质良好；</span><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">2.身体健康；</span><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">3.成绩优良，研究生须通过国家英语六级考试，本科生通过国家英语四级考试。</span><br />
				</div>
				<div>
				    <p style="font-size: 16px;color: #000000;margin-left: 60px;margin-top: 30px;">二、招聘安排</p><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">1.即日起接收简历投递，截止日期2016年12月31日;</span><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">2.面试时间另行通知（具体时间以短信形式通知）。</span><br />
				</div>
				<div>
				    <p style="font-size: 16px;color: #000000;margin-left: 60px;margin-top: 30px;">三、应聘方式</p><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">1.登陆企业网站（www.xxx.com.cn），按要求成功投递电子报名表及登记表视为应聘有
				    	            效，不接收纸质简历应聘；</span><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">2.应聘报名表和信息登记表请以同一邮件中两个附件的形式发送至邮箱：邮箱：
				    	        123@163.com。</span><br />
				    <span style="font-size: 16px;color: #CCCCCC;margin-left: 60px;">3.人事处联系电话：0000-8888</span>	
				</div>
			</div>
			<div style="position: relative;">
				<img style="position: absolute;left: 700px;top: -450px;width: 400px;height: 400px;" src="https://ccdn.goodq.top/caches/bb156c34ab1478d4698faf5d9b1fed10/aHR0cHM6Ly81Yjk3MzJmOTk0M2M3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDkvNTNiMTAxY2U5MTA0Yjc3YzJjYmQ1NmZkYWI0MGI1OTUtNDQweDUxNi5wbmc_p_p100_p_3D.png"/>
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
	
	export default {
		methods: {
			btn(i) {
					this.index = i
			}
		},
		data() {
			return {
				nav_arr: ['品牌简介', '合作伙伴', '人才招聘'],
				index:'品牌简介'
			}
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	text-decoration: none;
}
	#no2 .el-breadcrumb__inner {
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