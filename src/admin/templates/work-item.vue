<template lang="pug">
  card(plain)
    .work__card_edit
      .work__card-img
        img(:src="imagePath")
        .work__card-tags
          tags( :tags="tagsArray" )
      .work__card-info
        .work__title 
          span {{ work.title }}
        .work__descr 
          p {{ work.description }}
        .work__link  
          a(:href="work.link") {{ work.link }}
        .section__card-btns
          button(@click="updateWork").section__card-btn.section__card-edit
            span Править
            .edit
          button.section__card-btn.section__card-delete(@click="removeExistedWork")
            span Удалить
            .delete
</template>

<script>
import requests from "@/requests";
import {mapActions, mapMutations} from "vuex";
import {getAbsoluteImgPath} from "@/helpers/pictures";

export default {
  components: {
    card: () => import("templates/card.vue"),
    tags: () => import('templates/tags.vue')
  },
  props: {
    work: Object
  },
  computed: {
    imagePath() {
      return getAbsoluteImgPath(this.work.photo);
    },
    tagsArray() {
      return this.work.techs.split(",");
    }
  },
  methods: {
    ...mapActions('works',['removeWork']),
    ...mapMutations('works',['SET_CURRENT_WORK']),
    async removeExistedWork() {
      if (confirm("Удалить работу?") === false) return;
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        alert('')
      }
    },
    updateWork() {
      this.SET_CURRENT_WORK(this.work.id);
      this.$emit('updateWork');
    }
  }
}
</script>

