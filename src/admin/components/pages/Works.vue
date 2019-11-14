<template lang="pug">
  .works-page
    .works-page__title
      page-title
    .works-page__form(ref="form" v-if="isShowForm")
      works-form(
        :current-review="currentWork"
        @reset="cancelWorkChanges"
        @create="createWork"
        @update=""
      )
    .works-page__grid
      card-gradient-button.works-page__item(
        :is-disabled="isShowForm && !currentWork"
        @click="addWork"
      ) Добавить #[br] работу
      works-item.works-page__item(
        v-for="item in works"
        :key="item.id"
        :work="item"
        :is-active="item === currentWork"
        @edit="editWork(item)"
        @delete=""
      )
</template>

<script>
import works from "../../../data/works.json";
export default {
  components: {
    PageTitle: () => import("../PageTitle.vue"),
    CardGradientButton: () => import("../CardGradientButton.vue"),
    WorksForm: () => import("../WorksForm.vue"),
    WorksItem: () => import("../WorksItem.vue")
  },
  data() {
    return {
      works: [],
      currentWork: null,
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
    addWork() {
      this.currentWork = null;
      this.showForm();
    },
    cancelWorkChanges() {
      this.currentWork = null;
      this.hideForm();
    },
    editWork(work) {
      this.currentWork = work;
      this.showForm();
    },
    createWork(work) {
      console.log(work);
    }
  },
  created() {
    this.works = works;
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.works-page {
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