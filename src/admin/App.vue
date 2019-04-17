<template lang="pug">
  .wrap
    .header
      .container
        .header__wrap
          .header__info
            .header__user
              .header__avatar
                img(src="../images/content/me.jpg").avatar
              .header__username
                span.username Никита Зиновьев
            span.header__subtitle Панель администрирования
          a(href="#").header__exit Выйти
    section.navigation
      tabs
      // .container
      //   .navigation__wrap
      //     nav.nav
      //       ul.nav__list
      //         li.nav__child.nav__child_active Обо мне
      //         li.nav__child Работы
      //         li.nav__child Отзывы
    main.main
      router-view
</template>

<script>
// import { Validator } from "simple-vue-validator";
// import axios from "axios";
// export default {
//   mixins: [require("simple-vue-validator").mixin],
//   validators: {
//     "user.name": value => {
//       return Validator.value(value).required("Введите имя пользователя");
//     },
//     "user.password": value => {
//       return Validator.value(value).required("Введите пароль");
//     }
//   },
//   data() {
//     return {
//       disableSubmit: false,
//       user: {
//         name: "",
//         password: ""
//       }
//     };
//   },
//   components: {
//     appInput: () => import("./templates/input")
//   },
//   methods: {
//     async login() {
//       if ((await this.$validate()) === false) return;
//       this.disableSubmit = true;
//       try {
//         axios
//           .post("//jsonplaceholder.typicode.com/posts", {
//             name: this.user.name,
//             password: this.user.password
//           })
//           .then(response => {
//             const report = JSON.stringify(response, null, 2);
//             console.log(report);
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// };
// import { mapState, mapActions, mapGetters } from "vuex";
// export default {
//   components: {
//     appHeader: () => import("components/header"),
//     tabs: () => import("components/tabs")
//   }
// };
</script>


<style lang="pcss">
  /* Общие стили */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  /* Стили для админки */
  @import "../styles/admin/interface.pcss";
  @import "../styles/admin/header.pcss";
  @import "../styles/admin/navigation.pcss";
  @import "../styles/admin/about.pcss";
  @import "../styles/admin/work.pcss";
  @import "../styles/admin/feedback.pcss";
  @import "../styles/admin/skills.pcss";
  @import "../styles/admin/login.pcss";
</style>
