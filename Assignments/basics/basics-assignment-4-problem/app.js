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
        user1: this.className === 'user1',
        user2: this.className === 'user2',
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      }
    },
  },
  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount("#assignment");
