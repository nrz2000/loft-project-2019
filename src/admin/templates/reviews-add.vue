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
          label.download(
            :class="{'error' : validation.hasError('review.photo')}"
          )
            input(type="file" @change="appendFileAndRenderPhoto").feedback__avatar-input
            .feedback__avatar-img(
              :class="{'feedback__avatar-img_active' : this.renderedAvatarUrl.length}"
              :style="{'backgroundImage' : userAvatarUrl }"
            )
            .feedback__add Добавить фото
            errors-tooltip(
              :errorText="validation.firstError('review.photo')"
            )
        .feedback__content
          .feedback__content-child.feedback__content-name
            app-input(
              title="Имя автора"
              v-model="review.author"
              fieldType="input"
              nopadding=true
              :errorText="validation.firstError('review.author')"
            )
          .feedback__content-child.feedback__content-post
            app-input(
              title="Титул автора"
              v-model="review.occ"
              fieldType="input"
              nopadding=true
              :errorText="validation.firstError('review.occ')"
            )
          .feedback__content-child.feedback__content-descr
            app-input(
              title="Отзыв"
              v-model="review.text"
              fieldType="textarea"
              nopadding=true
              :errorText="validation.firstError('review.text')"
            )
</template>

<script>
import { mapState, mapActions } from "vuex";
import { rendered, getAbsoluteImgPath } from "@/helpers/pictures";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "review.author": value => {
      return Validator.value(value).required('Заполните имя')
    },
    "review.occ": value => {
      return Validator.value(value).required("Заполните титул")
    },
    "review.text": value => {
      return Validator.value(value).required("Заполните отзыв");
    },
    "review.photo": value => {
      return Validator.value(value).required("Вставьте аватар");
    }
  },
  props: {
    title: {
      type: String,
      default: "Новый отзыв"
    },
    mode: {
      type: String,
      default: "add"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    addingForm: () => import("templates/adding-form.vue"),
    appInput: () => import("templates/input.vue"),
    errorsTooltip: () => import("templates/errors-tooltip.vue"),
  },
  data() {
    return {
      disabledForm: this.disabled,
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
      this.validation.reset();
    },
    cancelAdding() {
      this.clearFormFields();
      this.$emit("cancel");
    },
    ...mapActions("reviews",['addReview','updateReview']),
    ...mapActions('tooltips',['showTooltip']),
    async addNewReview() {
      this.disableForm = true;
      try {
        const response = await this.addReview(this.review);

        this.clearFormFields();
        this.showTooltip({
          type: "success",
          text: "Добавлен отзыв"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      } finally {
        this.validation.reset();
      }
    },
    async appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();
      try {
        const renderedResult = await rendered(file);
        this.renderedAvatarUrl = renderedResult;
        this.showTooltip({
          type: "success",
          text: "Фото загружено"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Ошибка обработки фото"
        })
      }
    },
    async editReview() {
      try {
        const response = await this.updateReview(this.review);
        this.$emit('cancel');
        this.showTooltip({
          type: "success",
          text: "Отзыв отредактирован"
        })
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Ошибка редактирования"
        })
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

