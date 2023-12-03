const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 0,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 50,
        },
      ],
      selected: 0,

      a: true,
      m: 'red',
      reed: 'blue',
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selected = index;
    },
    colorInvoke() {
      return { color: this.reed };
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    inStock() {
      return this.variants[this.selected].quantity;
    },
    image() {
      return this.variants[this.selected].image;
    },
    sale() {
      return this.title + ' ' + 'is on SALE';
    },
    colorNonInvoke() {
      return { color: this.reed };
    },
  },
});
