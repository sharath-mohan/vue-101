const app = Vue.createApp({
  data() {
    return {
      title: "Components",
    };
  },
});
app.component("friend-contact", {
  template: `
    <li>
    <h2> Mohan </h2>
    <button @click="toggleVisibility">show details</button>
    <section v-if="visible">
    some morfe dettails of mohan
    </section>
    </li>
    `,
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
});
app.mount("#app");
