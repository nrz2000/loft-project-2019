<template lang="pug">
  section.feedback  
    .container
      .section__wrap.feedback__wrap
        h2.section__title.work__title Блок «Отзывы»
        .section__form.feedback__form(
          v-if="showReview"
        )
          reviews-add(
            :title="formTitle"
            @cancel="showReview = false"
            :mode="mode"
          )
        .section__list.feedback__list
          button(@click="createReview").section__card.feedback__card.section__card_add
            .feedback__icon.section__icon
              .section__icon-plus
            .section__prompt 
              span Добавить отзыв
          .section__card.feedback__card(v-for="review in reviews")
            reviews-item(
              :review="review"
              @updateReview="updateReview"
            )
          
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    reviewsAdd: () => import("templates/reviews-add.vue"),
    reviewsItem: () => import("templates/reviews-item.vue")
  },
  data() {
    return {
      showReview: false,
      mode: "add"
    }
  },
  computed: {
    ...mapState("reviews",{
      reviews: state => state.reviews
    }),
    formTitle() {
      switch (this.mode) {
        case "add":
          return "Добавить отзыв";
        case "edit":
          return "Изменить отзыв";
        default:
          return "";
          console.warn("не верное значение поля mode в reviews");
      }
    }
  },
  methods: {
    ...mapActions("reviews",['fetchReviews']),
    createReview() {
      this.showReview = true;
      this.mode = "add";
    },
    updateReview() {
      this.mode = "edit";
      this.showReview = true;
    }
  },
  async created() {
    try {
      await this.fetchReviews();
    } catch (error) {
      alert("Ошибка при загрузке Отзывов");
    }
  }
}
</script>

<style lang="scss">

</style>
