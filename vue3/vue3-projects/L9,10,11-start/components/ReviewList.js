app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html */
    `
  <div class="review-container">
  <ul>
  <li v-for="(review,index) in reviews" :key="index">{{review.name}} gave this review "{{review.review}}" & a rating of {{review.rating}}
  <br />
  </li>
  </ul>
  </div>
  `,
});
