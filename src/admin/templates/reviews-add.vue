<template lang="pug">
  adding-form(
    :title="title"
    @submit="mode === 'add' ? addNewReview() : editReview()" 
    @cancel="cancelAdding"
    bottomWidth="80%"
  )
    template(slot="form-content")
      .feedback__area
        .feedback__user
          label.download
            input(type="file" @change="appendFileAndRenderPhoto").feedback__avatar-input
            .feedback__avatar-img(
              :class="{'feedback__avatar-img_active' : this.renderedAvatarUrl.length}"
              :style="{'backgroundImage' : userAvatarUrl }"
            )
            .feedback__add Добавить фото
        .feedback__content
          .feedback__content-child.feedback__content-name
            label(for="review-name").section__label Имя автора
            input(
              type="text" 
              id="review-name" 
              placeholder=""
              v-model="review.author"
            ).input.input__line
          .feedback__content-child.feedback__content-post
            label(for="review-post").section__label Титул автора
            input(
              type="text" 
              id="review-post" 
              placeholder=""
              v-model="review.occ"
            ).input.input__line
          .feedback__content-child.feedback__content-descr
            label(for="review-descr").section__label Отзыв
            textarea(
              type="text"
              id="review-descr"
              placeholder=""
              v-model='review.text'
            ).textarea.textarea__feedback

</template>

<script>
import { mapState, mapActions } from "vuex";
import { rendered, getAbsoluteImgPath } from "@/helpers/pictures";
export default {
  props: {
    title: {
      type: String,
      default: "Новый отзыв"
    },
    mode: {
      type: String,
      default: "add"
    }
  },
  components: {
    addingForm: () => import("templates/adding-form.vue")
  },
  data() {
    return {
      renderedAvatarUrl: "",
      review: {
        id: 0,
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    }
  },
  computed: {
    ...mapState('reviews', {
      currentReview: state => state.currentReview
    }),
    userAvatarUrl() {
      return `url(${this.renderedAvatarUrl})`
    }
  },
  methods: {
    clearFormFields() {
      this.review = {};
      this.renderedAvatarUrl = "";
    },
    cancelAdding() {
      this.clearFormFields();
      this.$emit("cancel");
    },
    ...mapActions("reviews",['addReview','updateReview']),
    async addNewReview() {
      try {
        const response = await this.addReview(this.review);

        this.clearFormFields();
      } catch (error) {
        
      }
    },
    async appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();
      try {
        const renderedResult = await rendered(file);
        this.renderedAvatarUrl = renderedResult;
      } catch (error) {
        alert('Фото не загрузилось')
      }
    },
    async editReview() {
      try {
        const response = await this.updateReview(this.review);
        this.$emit('cancel');
      } catch (error) {
        alert('Ошибка при редактировании работы');
      }
    },
    fillFormWithCurrentWorkData() {
      this.review = {...this.currentReview};
      this.renderedAvatarUrl = getAbsoluteImgPath(this.currentReview.photo);
    }
  },
  created() {
    if(this.mode === "edit") {
      this.fillFormWithCurrentWorkData();
    }
  },
  watch: {
    currentReview(value) {
      if (this.mode === "edit") {
        this.fillFormWithCurrentWorkData();
      }
    },
    mode(value) {
      if (value === "add") {
        this.clearFormFields();
      }
    }
  }
}
</script>

