import Vue from "vue";
import Flickity from "vue-flickity";
import reviews from "../data/reviews";

new Vue({
  el: "#reviews-slider",
  components: {
    Flickity,
  },
  data: {
    reviews,
    currentIndex: 0,
    flickityOptions: {
      prevNextButtons: false,
      pageDots: false,
      cellAlighn: "left",
      groupCells: window.innerWidth > 768 ? 2 : 1,
    
    },
  },
  computed: {
    slidesLength() {
      return window.innerWidth > 768 ? Math.ceil(this.reviews.length / 2) : this.reviews.length; 
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next(); 
    },
    previous() {
      this.$refs.flickity.previous(); 
    },
  },
  created() {
    this.reviews = reviews.map((review) => ({
      ...review,
      photo: require(`images/${review.photo}`),
    }));
  },
  mounted() {
    this.$refs.flickity.on("change", (index) => {
      this.currentIndex = index;
      console.log(this.currentIndex);
    });
  },
});