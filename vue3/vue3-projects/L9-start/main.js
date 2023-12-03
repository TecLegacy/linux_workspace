const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      details: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
