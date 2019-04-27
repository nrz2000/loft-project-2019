<template lang="pug">
  section.work  
    .container
      .section__wrap.work__wrap
        h2.section__title.work__title Блок "Работы" 
        .section__form.work__form(
          v-if="showWork"
          :mode="mode"
        )
          work-add(
            @closeWork="showWork = false"
          )
        .section__list.work__list
          button(@click="createWork").section__card.work__card.section__card_add
            .section__icon 
              .section__icon-plus
            .section__prompt 
              span Добавить работу
          .section__card.work__card(v-for="work in works")
            work-item(
              :work="work"
              @updateWork="updateWork"
            )
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    workAdd: () => import("templates/work-add.vue"),
    workItem: () => import("templates/work-item.vue"),
  },
  data() {
    return {
      showWork: false,
      mode: "add"
    }
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    createWork() {
      this.showWork = true;
      this.mode = "add";
    },
    updateWork() {
      this.mode = "edit";
      this.showWork = true;
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  async created() {
    try {
      await this.fetchWorks();
    } catch (error) {
      alert('Произошла ошибка при загрузке Работ');
    }
  }
}
</script>

<style lang="scss">

</style>


