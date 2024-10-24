const app = Vue.createApp({
 data(){
    return {
        input1: "",
        input2:"",
        confirmedInput:""
    }
 }, 
 methods: {
    showAlert (){
        alert('Showing Alert');
    },
    registerInput1(event){
        this.input1 = event.target.value;
    },
    registerInput2(event){
        this.input2 = event.target.value;
        console.log(this.input2);
    },
    confirmInput2(event){
        this.confirmedInput = event.target.value;
    }
 }
})
app.mount("#assignment");