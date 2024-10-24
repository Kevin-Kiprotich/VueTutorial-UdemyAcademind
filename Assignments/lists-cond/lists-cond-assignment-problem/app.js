const app = Vue.createApp({
    data(){
        return{
            isShown:true,
            task:'',
            tasks:[]
        }
    },
    computed:{
        buttonCaption(){
            return this.isShown? 'Hide Tasks' : 'Show Tasks';
        }
    },
    methods:{
        toggleTasks(){
            this.isShown =!this.isShown;
        },
        addTask(){
            if (this.task.trim() === ''){
                alert('Task cannot be empty');
                return;
            }

            if (this.tasks.includes(this.task)){
                alert('Task already exists');
                return;
            }

            this.tasks.push(this.task);
            this.task = '';
        }
    }
});

app.mount("#assignment");