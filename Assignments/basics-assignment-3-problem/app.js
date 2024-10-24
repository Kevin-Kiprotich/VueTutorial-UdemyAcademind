// Question 1
// Connect the buttons and calculate a value (a number) 
// Show "Not there yet" until you reach a result of exactly 37 
// Show "Too much!" if the result is greater than 37

// Question 2
// Watch for changes in "result" and reset the value to 0 after 5 seconds 
const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result (val){
        const that = this;
        setTimeout(function(){
            that.number = 0;
        },5000);
    }
  },
  computed:{
    result (){
        if (this.number < 37){
            return 'Not there yet!';
        }else if(this.number ===37){
            return 37;
        }else{
            return 'Too much!';
        }
    }
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
