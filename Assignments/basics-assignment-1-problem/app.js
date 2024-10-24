const app = Vue.createApp({
    data(){
        return {
            name: "Kevin Kiprotich",
            age : 23,
            vueLogo:"https://static-00.iconduck.com/assets.00/vue-icon-2048x2048-ttu9fp8c.png"
        }
    },
    methods: {
        randomNo(){
            const randomNo = Math.random()
            return randomNo
        }
    }
});

app.mount("#assignment");