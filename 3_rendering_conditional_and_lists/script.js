Vue.createApp({
  data() {
    return {
      title: "Conditionals and Lists",
      goals: [],
      enteredValue: "",
      visuallyShown: true,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    toggleVisibility() {
      this.visuallyShown = !this.visuallyShown;
    },
    removeItem(index) {
      this.goals.splice(index, 1);
    },
  },
}).mount("#app");
