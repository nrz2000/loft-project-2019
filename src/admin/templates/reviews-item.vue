<template lang="pug">
  card(plain)
    user(
      :user="constructUserObj(review)"
    )
    .section__card-btns
      button.section__card-btn.section__card-edit(
        @click="updateReview"
      )
        span Править
        .edit
      button.section__card-btn.section__card-delete(
        @click="removeExistedReview"
      )
        span Удалить
        .delete
</template>

<script>
import { macAction, mapActions, mapMutations } from "vuex";
import { getAbsoluteImgPath } from "@/helpers/pictures";
export default {
  props: {
    review: Object
  },
  components: {
    card: () => import('templates/card.vue'),
    user: () => import('templates/user.vue')
  },
  methods: {
    constructUserObj(data) {
      return {
        name: data.author,
        occ: data.occ,
        avatar: getAbsoluteImgPath(data.photo),
        text: data.text
      }
    },
    ...mapActions('reviews', ['removeReview']),
    ...mapActions('tooltips',['showTooltip']),
    async removeExistedReview () {
      if (confirm('Удалить отзыв?') === false) return;
      try {
        await this.removeReview(this.review.id);
        this.showTooltip({
          type: "success",
          text: "Отзыв удален"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Ошибка при удалении"
        })
      }
    },
    ...mapMutations('reviews',['SET_CURRENT_REVIEW']),
    updateReview() {
      this.SET_CURRENT_REVIEW(this.review.id);
      this.$emit('updateReview');
    }
  }
}
</script>

