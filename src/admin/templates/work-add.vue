
<template lang="pug">
  adding-form(
    :title="editFormTitle"
    @submit="mode === 'add' ? addNewWork() : editWork()"
    @cancel="cancelAdding"
  )
    template(slot="form-content")
      .work__area
        .work__loader
          label(
            for="loader"
            :class="{'error' : validation.hasError('work.photo')}"
          ).download
            input(type="file" @change="appendFileAndRenderPhoto" id="loader" name="loader")
            .download__label(
                :class="{'download__label_active' : this.renderedPhotoUrl.length}"
                :style="{'backgroundImage': workPhotoUrl}"
              )
              .download__title Перетащите или загрузите для загрузки изображения
              .btn.btn_small.download__btn Загрузить
            .work__add Изменить превью
            .download__error
              errors-tooltip
        .work__content
          .work__content-child.work__content-title
            app-input(
              title="Название"
              v-model="work.title"
              :errorText="validation.firstError('work.title')"
            )
            //- label(for="project-name").section__label Название
            //- input(
            //-   type="text" 
            //-   id="project-name" 
            //-   placeholder="Название сайта"
            //-   v-model="work.title"
            //-   :errorText="validation.firstError('work.title')"
            //- ).input.input__line
          .work__content-child.work__content-link
            label(for="project-link").section__label Ссылка 
            input(
              type="text"
              id="project-link"
              placeholder="Ссылка на сайт"
              v-model="work.link"
            ).input.input__line
          .work__content-child.work__content-descr
            label(for="project-descr").section__label Описание 
            textarea(
              type="text"
              id="project-descr"
              placeholder="Описание сайта"
              v-model="work.description"
            ).textarea.textarea__work
          add-tags(
            v-model="work.techs"
            @removeTag="value => this.work.techs = value"
          )
            
</template>

<script>
import { mapActions, mapState } from "vuex";
import { rendered, getAbsoluteImgPath } from "@/helpers/pictures";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "work.title": value => {
      return Validator.value(value).required('Заполните название')
    },
    "work.techs": value => {
      return Validator.value(value).required("Заполните технологии")
    },
    "work.link": value => {
      return Validator.value(value).required("Заполните ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Заполните описание");
    },
    "work.photo": value => {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  props: {
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
    tags: () => import("templates/tags.vue"),
    addTags: () => import("templates/add-tags.vue"),
    errorsTooltip: () => import("templates/errors-tooltip.vue"),
    appInput: () => import("templates/input.vue")
  },
  data() {
    return {
      disabledForm: this.disabled,
      renderedPhotoUrl: "",
      work: {
        id: 0,
        title: "",
        techs: "",
        link: "",
        photo: "",
        description: ""
      }
    }
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    }),
    workPhotoUrl() {
      return `url(${this.renderedPhotoUrl})`;
    },
    editFormTitle() {
      switch (this.mode) {
        case "edit":
          return "Редактирование работы";
        case "add":
          return "Добавление работы";
      }
    }
  },
  created() {
    if(this.mode === "edit") {
      this.fillFormWithCurrentWorkData();
    }
  },
  watch: {
    currentWork(value) {
      if (this.mode === "edit") {
        this.fillFormWithCurrentWorkData();
      }
    },
    mode(value) {
      if (value === "add") {
        this.clearFormFields();
      }
    }
  },
  methods: {
    ...mapActions("works",["addWork", "updateWork"]),
    ...mapActions('tooltips','showTooltip'),
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      try {
        const response = await this.addWork(this.work);

        this.clearFormFields();
      
        // this.showTooltip({
        //   text: "Добавлена Работа",
        //   type: "success"
        // });
      } catch (error) {
        alert('Работа не загружена');
      }
    },
    cancelAdding() {
      this.clearFormFields();
      this.$emit('closeWork');
    },
    clearFormFields() {
      this.work = {};
      this.renderedPhotoUrl = "";
    },
    async appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      const reader = new FileReader();
      try {
        const renderedResult = await rendered(file);
        this.renderedPhotoUrl = renderedResult;
      } catch (error) {
        alert('Фото не загрузилось')
      }
    },
    async editWork() {
      try {
        const response = await this.updateWork(this.work);
        this.$emit('closeWork');
      } catch (error) {
        alert("Ошибка при редактировании Работы")
      }
    },
    fillFormWithCurrentWorkData()  {
      this.work = {...this.currentWork};
      this.renderedPhotoUrl = getAbsoluteImgPath(this.currentWork.photo);
    }
  }
}
</script>



