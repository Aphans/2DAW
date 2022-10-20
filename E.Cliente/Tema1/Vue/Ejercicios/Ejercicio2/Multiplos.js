const app = Vue.createApp({
    data() {
        return {
            contador:0,
            multiplos:[]
        }
    },
    methods:{
        sumar(){
            this.contador=this.contador+1;
            if(this.contador%3===0){
                this.multiplos=[this.contador,...this.multiplos];
            }
        },
        restar(){
            this.contador=this.contador-1;
            if(this.contador%3===0){
                this.multiplos=[this.contador,...this.multiplos];
            }
        }
    }
});
app.mount('#multiplos');