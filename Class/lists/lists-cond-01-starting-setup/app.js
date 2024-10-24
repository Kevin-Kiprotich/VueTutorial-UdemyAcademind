const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: []
    };
  },
   methods:{
    addGoal(){
      if(this.enteredGoalValue.trim() === ''){
        return;
      }

      if(this.goals.includes(this.enteredGoalValue)){
        alert('Goal already exists!');
        return;
      }
      this.goals.push(this.enteredGoalValue);
      // this.enteredGoalValue = '';

    },
    removeGoal(goalIndex){
      this.goals.splice(goalIndex, 1);
    }
   }
});

app.mount('#user-goals');
