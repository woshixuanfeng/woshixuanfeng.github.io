<template>
	<div>
		<div id="list">
			<div class="no1">
				<img :src="json.imgurl" />
			</div>
			<div class="no2">
				{{json.name}}
			</div>
			<div class="no3">
				{{json.content}}
			</div>
			<div class="no4">
				{{json.title}}
			</div>
			<div class="no5">
				{{json.logo}}
			</div>
			<div class="no6">
				{{json.content}}
			</div>
			<div class="no7">
				<img :src="json.imgurl" />
			</div>
			<div class="no8">
				{{json.name}}
			</div>
			<div class="no9">
				{{json.content}}
			</div>
			<div class="no10">
				<img :src="json.imgurl" />
			</div>
			<div class="no11">
				{{json.name}}
			</div>
			<div class="no12">
				{{json.content}}
			</div>
		</div>
		
	</div>

</template>

<script>
	export default {
		props: ['no3_json'],
		data() {
			return {
				json: this.no3_json
			}
		}
	}
</script>

<style>
	#list{
		padding: 10px;
	}
	#list>.no1 {
		/*min-height: 100px;*/
		/*background: #CCCCCC;*/
	}
	
	#list>.no1 img {
		width: 100%;
	}
	
	#list>.no2,
	#list>.no3 {
		line-height: 50px;
	}
	#list>.no4,
	#list>.no5,
	#list>.no6 {
		text-align: center;
		line-height: 120px;
	}
	#list>.no7 img {
		width: 100%;
	}
	#list>.no8,
	#list>.no9 {
		line-height: 50px;
	}
	#list>.no10 img {
		width: 100%;
	}
</style>