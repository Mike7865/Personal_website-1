<template lang="pug">
  .root-container
    template(v-if="$route.meta.public")
      router-view
    .inner-page(v-else)
      .inner-page__panel
        app-header
      .inner-page__navbar
        app-tabs
      .inner-page__content
        router-view
</template>

<script>
export default {
  components: {
    AppHeader: () => import("./components/AppHeader.vue"),
    AppTabs: () => import("./components/Tabs.vue")
  }
};
</script>


<style lang="postcss">
@import "./styles/main.pcss";
.admin-wrapper {
  background-image: url("../images/content/train-bridge.jpg");
  background-size: 100vw 100vh;
}
.inner-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  &__panel {
    flex-shrink: 0;
  }
  &__navbar {
    padding: 0 60px;
    background-color: white;
    @include phones {
      padding: 0 20px;
    }
  }
  &__content {
    flex-grow: 1;
    overflow-y: auto;
  }
}
</style>