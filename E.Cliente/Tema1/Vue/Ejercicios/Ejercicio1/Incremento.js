const app = Vue.createApp({
    data() {
        return {
            contador:0,
            message:"",
        }
    },
    methods:{
        sumar(){
            this.contador=this.contador+1;
        },
        restar(){
            this.contador=this.contador-1;
        }
    }
});
app.mount('#miIncremento');