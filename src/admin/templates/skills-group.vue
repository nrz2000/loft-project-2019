<template lang="pug">
  .skills
    form.form.skills__form
      .skills__wrap
        .skills__top(v-if="editmode === false")
          .skills__title
            h2  {{category.category}}
          .skills__btns
            .skills__btn-child.skills__edit
              button.edit(type="button" @click="editmode = true")
            .skills__btn-child.skills__remove
              button.remove( type="button" @click="removeExistedCategory")
        .skills__top(v-else)
          .skills__title
            app-input(
              type="text"
              v-model="editedCategory.title"
              :errorText="validation.firstError('editedCategory.title')"    
              placeholder="Новое название"          
            )
            //- input(type="text" v-model="editedCategory.title").input.input_active
          .skills__btns
            .skills__btn-child.skills__perform
              button.perform(type="button" @click="save")
            .skills__btn-child.skills__delete
              button.delete(type='button' @click="editmode = false")
        .skills__middle
          skills-item(
            v-for="skill in skills"
            :key="skill.id"
            :skill="skill"
          )
        .skills__bottom
          .skills__new 
            .skills__new-title
              app-input(
                type="text"
                v-model="skill.title"
                :errorText="validation.firstError('skill.title')"
                placeholder="Новый навык"
                nopadding=true
              )
              //- input(type="text" v-model="skill.title" placeholder="Новый навык").input.input__new
            .skills__new-rate.skills__rate
              app-input(
                type="text"
                v-model="skill.percent"
                :errorText="validation.firstError('skill.percent')"
                nopadding=true
                placeholder="100"
              )
              //- input(type="text" v-model="skill.percent" placeholder="100").input.input__rate.input__new
            button.skills__add(
              type="button"
              @click="addNewSkill"
            )
              img(src="~/images/content/add.png").plus.plus_large
</template>

<script>
import {mapActions, mapState} from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    'editedCategory.title': value => {
      return Validator.value(value).required("Заполните название");
    },
    'skill.title': value => {
      return Validator.value(value).required("Заполните навык");
    },
    'skill.percent': value => {
      return Validator.value(value)
        .integer("Должно быть числом")
        .between(0, 100, "Некорректное значение для процентов")
        .required("Уровень знания")
    }
  },
  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {
      editmode: false,
      editedCategory: {...this.category},
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    skillsItem: () => import('templates/skills-item.vue'),
    appInput: () => import('templates/input.vue')
  },
  methods: {
    ...mapActions('skills',['addSkill']),
    ...mapActions('tooltips',['showTooltip']),
    async addNewSkill() {
      try {
        const response = await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
        this.showTooltip({
          type: "success",
          text: "Скилл добавлен"
        })
      } catch(error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      } finally {
        this.validation.reset();
      }
    },
    ...mapActions('categories',['editCategory','removeCategory']),
    async save() {
      try {
        const response = await this.editCategory(this.editedCategory);
        this.editmode = false;
        this.showTooltip({
          type: "success",
          text: "Группа отредактирована"
        })
      } catch(error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      } finally {
        this.validation.reset();
      }
    },
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category.id)
        this.showTooltip({
          type: "success",
          text: "Группа удалена"
        })
      } catch (error) {
         this.showTooltip({
          type: "error",
          text: error.message
        })
      } finally {
        this.validation.reset();
      }
    }
  }
}
</script>

