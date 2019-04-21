<template lang="pug">
  .skills
    form.form.skills__form
      .skills__wrap
        .skills__top
          .skills__title
            input(type="text" v-model="skillTitle" placeholder="Название новой группы").input.input_active
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

export default {
  data() {
    return {
      skillTitle: ""
    }
  },
  methods: {
    ...mapActions('categories', ['addNewSkillGroup']),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
        this.$emit('close');
      } catch(error) {
        alert(error.message)
      }
    }
  },
}
</script>

