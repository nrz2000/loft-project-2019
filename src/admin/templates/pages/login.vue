<template lang="pug">
  .overlay
    .login
      .login__wrap
        .login__close
          button.close
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
            .login__btn
              input.btn.btn__login(
                type='submit'
                :disabled="disableSubmit"
              )
</template>

<script>
import $axios from "@/requests.js";

export default {
  components: {
    appInput: () => import('templates/input.vue')
  },
  data() {
    return {
      user: {
        name: "admin",
        password: "admin"
      }
    }
  },
  methods: {
    async login() {
      try {
        const {
          data: {token}
        } = await $axios.post('/login', this.user);
        
        localStorage.setItem('token', token);
        $axios.defaults.headers['Authorisation'] = `Bearer ${token}`;
        this.$router.replace('/');
      } catch(error) {
        //erroe handling
      }
    }
  }
}
</script>

<style lang="scss">
  
</style>


