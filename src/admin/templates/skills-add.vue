<template lang="pug">
  .skills
    form.form.skills__form
      .skills__wrap
        .skills__top
          .skills__title
            app-input(
              type="text"
              v-model="skillTitle"
              placeholder="Название новой группы"
              :errorText="validation.firstError('skillTitle')"
            )
            //- input(type="text" v-model="skillTitle" placeholder="Название новой группы").input.input_active
          .skills__btns
            .skills__btn-child.skills__perform
              button.perform(type="button" @click="addSkillGroup")
            .skills__btn-child.skills__delete
              button.delete(type="button" @click="$emit('close')")
        .skills__bottom
          .skills__new 
            .skills__new-title
              input(type="text" placeholder="Новый навык").input.input__new
            .skills__new-rate.skills__rate
              input(type="text" placeholder="100").input.input__rate.input__new
            button.skills__add
              img(src="~/images/content/add.png").plus.plus_large
</template>


<script>
import {mapActions, mapState} from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    skillTitle: value => {
      return Validator.value(value).required("Заполните название");
    }
  },
  props: {
    errorText: String
  },
  components: {
    appInput: () => import("templates/input.vue")
  },
  data() {
    return {
      skillTitle: ""
    }
  },
  methods: {
    ...mapActions('categories', ['addNewSkillGroup']),
    ...mapActions('tooltips',['showTooltip']),
    async addSkillGroup() {
      if ((await this.$validate()) === false) return;
      try {
        const response = await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
        this.$emit('close');

        this.showTooltip({
          type: "success",
          text: "Группа создана"
        })
      } catch(error) {
        this.showTooltip({
          type: "error",
          text: error.message
        })
      } finally {
        this.validation.reset();
      }
    }
  },
}
</script>

