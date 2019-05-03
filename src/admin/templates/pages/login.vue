<template lang="pug">
  .overlay
    .login
      .login__wrap
        .login__close
          button.close(@click.prevent="back")
        h1.login__title Авторизация
        .login__form
          form.form(@submit.prevent="login" novalidate)
            app-input(
              title="Логин"
              icon="login"
              type="text"
              v-model="user.name"
              :errorText="validation.firstError('user.name')"
            )         
            app-input(
              title="Пароль"
              icon="password"
              type="password"
              v-model="user.password"
              :errorText="validation.firstError('user.password')"
            )
            .form__btn.form__child.login__btn
              input.btn.btn__login(
                type='submit'
                :disabled="disableSubmit"
              )
</template>

<script>
import $axios from "@/requests.js";
import { Validator } from "simple-vue-validator";
import axios from "axios";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
  components: {
    appInput: () => import('templates/input.vue')
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name: "kit032019",
        password: "polina19"
      }
    }
  },
  methods: {
    back() {
      location.href = "/";
    },
    async login() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;
      try {
        const {
          data: {token}
        } = await $axios.post('/login', this.user);
        
        localStorage.setItem('token', token);
        $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        this.$router.replace('/');
      } catch(error) {
        //error handling
      }
    }
  }
}
</script>

<style lang="scss">
  
</style>


