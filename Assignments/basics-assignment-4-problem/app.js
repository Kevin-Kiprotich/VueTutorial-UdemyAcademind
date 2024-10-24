const app = Vue.createApp({
  data() {
    return {
      className: null,
      showParagraph: true,
      color: null,
    };
  },
  computed: {
    paragraphClass() {
      return {
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      }
    },
  },
  methods: {
    recordChange(e) {
      console.log(e.target.value);
      this.className = e.target.value;
    },
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
    getColor(e){
        this.color = e.target.value;
    }
  },
});

app.mount("#assignment");
