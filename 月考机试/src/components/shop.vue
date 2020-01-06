<template>
	<div class="container">
		<div class="header">
			<router-link to="./">
				<span class="span">
					<</span> </router-link> <span>确认订单
				</span>
		</div>
		<div class="con_list">
			<ul class="list_li clearfix">
				<li v-for="item,index in listarr">
					<div class="img_l">
						<img :src="item.url" alt="" class="img_1">
					</div>
					<p class="op">x{{item.num}}</p>
					<div class="kj">
						<p style="font-size:20px;color:red;line-height:100px;text-align:center;">&yen{{item.num*item.price}}</p>
					</div>
				</li>
			</ul>
			<div class="cah">
				<span>餐盒</span>
				<span class="jiaq">&yen{{num1}}</span>
			</div>
			<div class="piesong">
				<div class="fengn">
					蜂鸟
				</div>
				<span class="pei">配送费</span>
				<span class="peiq">&yen{{num2}}</span>
			</div>
			<div class="zoq">
				<p>总价钱是:{{pricezq}}元</p>
			</div>
		</div>
		<div class="footer">
			<div class="footer1" style="color:red;">{{pricezq}}元</div>
			<div class="footer2" data-toggle="modal" data-target="#box">去结算</div>
		</div>
		<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel" id="box">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="gridSystemModalLabel">扫码支付</h4>
					</div>
					<div class="modal-body">
						<div class="row" style="margin-left:150px;">
							<img src="https://i03piccdn.sogoucdn.com/7c0068c0d4431cca" alt="">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
	</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				listarr: [],
				num1: 3,
				num2: 8,
				pricezq: ''
			}
		},
		mounted() {
			this.listarr = JSON.parse(localStorage.data)
			console.log(this.listarr)
			this.pricezq = JSON.parse(localStorage.price) + this.num1 + this.num2
			console.log(this.pricezq)
		},
		computed: {

		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}

	a {
		color: #fff;
		text-decoration:none !important;
	}

	.clearfix::before,
	.clearfix::after {
		content: '';
		display: table;
		clear: both;
	}

	.container {
		width: 520px !important;
		height: auto;
		margin: 0 auto;
	}

	.header {
		width: 500px !important;
		line-height: 60px;
		height: 60px;
		background: #ccc;
		padding-left: 10px;
	}

	.span {
		font-size: 20px;
	}

	.con_list {
		width: 500px;
		min-height: 500px;
		background: #f5f5f5;
		margin: 0 auto;
	}

	.list_li li {
		min-height: 100px;
		border-bottom: 1px #000 solid;
		box-sizing: border-box;
	}

	.cah {
		height: 40px;
		line-height: 40px;
		box-sizing: border-box;
		padding-left: 20px;
		border-bottom: 1px #000 solid;
	}

	.jiaq {
		float: right;
		margin-right: 10px;
	}

	.piesong {
		height: 40px;
		line-height: 40px;
		box-sizing: border-box;
		border-bottom: 1px #000 solid;
		padding: 0 0 0 10px;
	}

	.fengn {
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 10px;
		color: #fff;
		margin: 5px 5px 0 0;
		background: #5ba9e9;
		float: left;
	}

	.pei {
		float: left;
		font-size: 14px;
	}

	.peiq {
		float: right;
		margin-right: 10px;
	}

	a {
		text-decoration: none;
		list-style: none;
		color: #fff;
	}

	.zoq {
		line-height: 50px;
		height: 50px;
		text-align: center;
		border-bottom: 1px #000 solid;
	}

	.img_l {
		width: 100px;
		height: 100px;
		border: 1px #000 solid;
		box-sizing: border-box;
		margin-left:10px;
		float: left;
	}

	.img_l .img_1 {
		width: 100%;
		height: 100%;
	}

	.op {
		float: left;
		padding: 40px 0 0 10px;
	}

	.kj {
		width: 300px;
		height: 100px;
		margin-left: 40px;
		float: left;
	}

	.footer {
		width: 503px;
		min-height: 80px;
		background: #515152;
		margin: 0 auto;
	}

	.footer1 {
		width: 350px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		background: #515154;
		color: #fff;
		float: left;
		font-size: 20px;
	}

	.footer2 {
		width: 153px;
		height: 80px;
		font-size: 20px;
		line-height: 80px;
		background: #37cb70;
		color: #fff;
		text-align: center;
		float: right;
	}
</style>
