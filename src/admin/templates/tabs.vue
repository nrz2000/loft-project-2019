<template lang="pug">
  .container
    .navigation__wrap
      nav.nav
        ul.nav__list
          router-link(
            v-for="tab in tabs" 
            tag="li"
            :to="tab.href"
            exact-active-class="nav__child_active"
          ).nav__child
            a.nav__link {{ tab.title }}
            // router-link(
            //   :to="tab.href"
            //   exact-active-class="nav__child_active"
            // ).nav__link {{ tab.title }}
          // li.nav__child Работы
          // li.nav__child Отзывы
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
}
</script>

