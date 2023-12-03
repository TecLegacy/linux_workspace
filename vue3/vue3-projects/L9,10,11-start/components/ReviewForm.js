app.component('review-form', {
  template:
    /*html */
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    
    <label for="recommend">Would you recommend this product?</label>
 
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    
      

    <input class="button" type="submit" value="Submit">  

  </form>
    `,
  data() {
    return {
      name: '',
      review: '',
      recommend: '',
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === '' ||
        this.review === '' ||
        this.recommend === '' ||
        this.rating === null
      ) {
        alert('Kindly fill all the required fields');
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        recommend: this.recommend,
        rating: this.rating,
      };

      //Emit to products-display
      this.$emit('review-submitted', productReview);

      // Clean UP fields
      this.name = '';
      this.review = '';
      this.recommend = '';
      this.rating = null;
    },
  },
});
