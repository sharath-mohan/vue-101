const app = Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.inputRef.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
});
app.mount("#app");
setTimeout(() => {
  app.unmount();
}, 5000);

/**
 *
 * createApp()
 *
 * beforeCreate()
 *
 * created() --> compiled template
 *
 * beforeMount()
 *
 * mounted() --> mounted vue instance -> data changes
 *
 * beforeUpdate()
 *
 * updated()
 *
 * beforeUnmount()
 *
 * unmounted()
 *
 */
