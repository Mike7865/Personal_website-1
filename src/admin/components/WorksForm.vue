<template lang="pug">
  card.new-work
    .new-work__header(slot="title") Редактирование работы
    template(slot="content")
      form.new-work__form(@submit.prevent="onSubmit")
        .new-work__photo
          avatar-upload(
            v-model="workData.photo"
            :error-message="validation.firstError('workData.photo')"
          )
        .new-work__title
          simple-input(
            label="Название"
            v-model="workData.title"
            :error-message="validation.firstError('reviewData.title')"
          )
        .new-work__link
          simple-input(
            label="Ссылка"
            v-model="workData.link"
            :error-message="validation.firstError('workData.link')"
          )
        .new-work__text
          simple-textarea(
            label="Описание"
            v-model="workData.text"
            :error-message="validation.firstError('workData.text')"
          )
        .new-work__tags
          tags-input(
            v-model="technologies"
          )
        .new-work__controls
          basic-button.new-work__button(
            size="small"
            display="flat"
            @click="$emit('reset')"
          ) Отмена
          basic-button.new-work__button.new-work__button_save(
            type="submit"
            size="small"
            :bordered="true"
          ) Сохранить
</template>

<script>
import SimpleVueValidation, { Validator } from "simple-vue-validator";
const emptyWorkData = {
  title: "",
  link: "",
  text: "",
  photo: null
};
export default {
  components: {
    Card: () => import("./Card.vue"),
    SimpleInput: () => import("./SimpleInput.vue"),
    SimpleTextarea: () => import("./SimpleTextarea.vue"),
    BasicButton: () => import("./BasicButton.vue"),
    //WorkUpload: () => import("./WorkUpload.vue"),
    TagsInput: () => import("./TagsInput")
  },
  props: {
    currentReview: {
      type: Object,
      default: null
    }
  },
  watch: {
    currentReview() {
      this.updateReviewData();
      this.validation.reset();
    }
  },
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      reviewData: {},
      technologies: "HTML, CSS, JS"
    };
  },
  validators: {
    "reviewData.author": value => {
      return Validator.value(value).required("Введите автора");
    },
    "reviewData.occ": value => {
      return Validator.value(value).required("Введите титул");
    },
    "reviewData.text": value => {
      return Validator.value(value).required("Введите текст отзыва");
    },
    "reviewData.photo": value => {
      return Validator.value(value).required("Загрузите фото");
    }
  },
  computed: {
    title() {
      return this.currentReview ? "Редактирование отзыва" : "Новый отзыв";
    }
  },
  methods: {
    updateReviewData() {
      this.reviewData = this.currentReview
        ? { ...this.currentReview }
        : { ...emptyReviewData };
    },
    onSubmit() {
      this.$validate().then(success => {
        if (success) {
          const eventType = this.currentReview ? "update" : "create";
          this.$emit(eventType, this.reviewData);
          this.validation.reset();
        }
      });
    }
  },
  created() {
    this.updateReviewData();
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.new-work {
  &__header {
    font-size: 18px;
    padding: 10px;
  }
  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 30px;
    max-width: 841px;
    font-weight: 700;
    margin: 20px 0;
  }
  &__photo {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
  &__name {
  }
  &__position {
  }
  &__text {
    grid-column: 2 / 4;
  }
  &__button_save {
    text-transform: uppercase;
  }
  &__controls {
    grid-column: 2 / 4;
    display: flex;
    justify-content: flex-end;
  }
}
</style>