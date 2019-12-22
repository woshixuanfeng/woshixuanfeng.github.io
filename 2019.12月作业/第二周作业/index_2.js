Vue.component('index_2',{
	template:"#index1",
	data(){
             return {
                        title: this.atitle,
                        text: this.atext,         
                        
                  }
            },
            props: ['atitle', 'atext']
})