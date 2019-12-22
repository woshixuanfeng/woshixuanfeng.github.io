Vue.component('contents', {
			template: '#content',
			computed: {
				c_arr() {
					var arr = []
					if(this.index == 0) {
						arr = this.list_arr
					} else {
						for(var i = 0; i < this.list_arr.length; i++) {
							if(this.index == this.list_arr[i].type) {
								arr.push(this.list_arr[i])
							}
						}
					}
					return arr
				}
			},
			data() {
				return {
					index: 0,
					list_arr: [{
						type: '1',
						name: ' 企业理念',
						text: '起飞页的工作团队是一群热爱互联网及软件事业的大伙伴和小伙伴，经验丰富、成熟稳定，基于对网站出版行业的热爱、对人人都能做出精美网站的向往，公司投入一千万元人民币，历时两年时间打造出起飞页平台。截至2015年底，在起飞页上创建的网站已超过10万+',
						img: 'https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWVmMDY3ODQ0ZDIzZmFiZDA2Y2NkNjVkZGY2MWQyZDgtMTgweDEyMC5qcGc_p_p100_p_3D.jpg'
					}, {
						type: '1',
						name: '愿景使命',
						text: '起飞页的工作团队是一群热爱互联网及软件事业的大伙伴和小伙伴，经验丰富、成熟稳定，基于对网站出版行业的热爱、对人人都能做出精美网站的向往，公司投入一千万元人民币，历时两年时间打造出起飞页平台。截至2015年底，在起飞页上创建的网站已超过10万+',
						img: 'https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWFjMDViN2VmMzVkYmVhOGU5ZTI2MDQ2OGY4M2E1MjEtMTgweDEyMC5qcGc_p_p100_p_3D.jpg'
					}, {
						type: '2',
						name: '发展规划',
						text: '起飞页的工作团队是一群热爱互联网及软件事业的大伙伴和小伙伴，经验丰富、成熟稳定，基于对网站出版行业的热爱、对人人都能做出精美网站的向往，公司投入一千万元人民币，历时两年时间打造出起飞页平台。截至2015年底，在起飞页上创建的网站已超过10万+',
						img: 'https://ccdn.goodq.top/caches/0aa02806352a2c565f61961c812e84a8/aHR0cHM6Ly81N2UyNDNhYWE3NzlhLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvOWFjMDViN2VmMzVkYmVhOGU5ZTI2MDQ2OGY4M2E1MjEtMTgweDEyMC5qcGc_p_p100_p_3D.jpg'
					}]
				}
			}
		})
	
	
