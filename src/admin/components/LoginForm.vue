<template lang="pug">
  .login-form
    .login-form__title Авторизация
    button.login-form__close
    form.login-form__body(@submit.prevent="signIn")
      .login-form__control
        input(v-model="login" required)
      .login-form__control
        input(v-model="password" type="password" required)
      .login-form__control
        button Отправить
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      axios.post("https//webdev-api.loftschool.com/login", {
        name: this.login,
        password: this.password,
      }) 
      .then(response => {
        conslole.log(response);
      })
      .catch(e => {
        conlole.log(e.response.data.error);
      })
    }
  }
};
</script>

<style lang="postcss">
.login-form {
  background-color: white;
  padding: 50px;
}
</style>