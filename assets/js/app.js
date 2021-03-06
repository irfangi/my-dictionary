import data from './data.js'
var app = new Vue({
    el: '#app',
    data: {
      keyword: '',
      data:[]
    },
    mounted() {
        this.data = data
    },
    methods: {
        search(keyword) {
            if(keyword === ''){
                this.data = data
            }else{
                let result = []
                data.forEach((res, index) =>{
                    if(res.word.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) || res.exp.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())){
                        result = [...result, res]
                    }
                })
                this.data = result
            }
        }
    },
})