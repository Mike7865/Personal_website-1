<template lang="pug">
  .app
    .login-page 
      .login-page__form
        login-form
    .inner-page 
      .inner-page__panel
        header.header
          .header__avatar
            img.header__image(src="images/content/user.jpg")
          .header__content
            .header__username Михаил Шаров
            .header__title Панель администрирования
            a.header__exit-link Выйти
        .inner-page__navbar
          .tabs
            - var tabs = ["Обо мне", "Работы", "Отзывы"];
              each tab, i in tabs
                a.tabs__item(class=`${i === 0 ? "tabs__item_active" : ""}`) #{tab}
      .inner-page__content
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "Main",
  components: {
    LoginForm
  }
};
</script>

<style lang="pcss">
@import "./styles/main.pcss";
</style>