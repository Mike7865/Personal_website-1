<template lang="pug">
  .reviews-page
    .reviews-page__title
      page-title
    .reviews-page__form(ref="form" v-if="isShowForm")
      review-form(
        :current-review="currentReview"
        @reset="cancelReviewChanges"
        @create="createReview"
        @update=""
      )
    .reviews-page__grid
      card-gradient-button.reviews-page__item(
        :is-disabled="isShowForm && !currentReview"
        @click="addReview"
      ) Добавить #[br] отзыв
      review-item.reviews-page__item(
        v-for="item in reviews"
        :key="item.id"
        :review="item"
        :is-active="item === currentReview"
        @edit="editReview(item)"
        @delete=""
      )
</template>

<script>
import reviews from "../../../data/reviews.json";
export default {
  components: {
    PageTitle: () => import("../PageTitle.vue"),
    CardGradientButton: () => import("../CardGradientButton.vue"),
    ReviewForm: () => import("../ReviewForm.vue"),
    ReviewItem: () => import("../ReviewItem.vue")
  },
  data() {
    return {
      reviews: [],
      currentReview: null,
      isShowForm: false
    };
  },
  methods: {
    showForm() {
      this.isShowForm = true;
    },
    hideForm() {
      this.isShowForm = false;
    },
    addReview() {
      this.currentReview = null;
      this.showForm();
    },
    cancelReviewChanges() {
      this.currentReview = null;
      this.hideForm();
    },
    editReview(review) {
      this.currentReview = review;
      this.showForm();
    },
    createReview(review) {
      console.log(review);
    }
  },
  created() {
    this.reviews = reviews;
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.reviews-page {
  padding: 60px;
  @include desktop {
    padding: 50px 30px;
  }
  @include phones {
    padding: 40px 20px;
  }
  &__title {
    margin-bottom: 60px;
    @include phones {
      padding: 0 20px;
      margin-bottom: 48px;
    }
  }
  &__form {
    margin-bottom: 32px;
  }
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    @include desktop {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
    @include phones {
      grid-template-columns: 1fr;
    }
  }
}
</style>