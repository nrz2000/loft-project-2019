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
          a(@click="logout").header__exit Выйти
    section.navigation
      tabs
    main.main
      router-view
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    tabs: () => import("templates/tabs")
  },
  methods: {
    ...mapActions('user',["logout"])
  }
};
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
