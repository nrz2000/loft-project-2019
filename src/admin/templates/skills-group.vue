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
            input(type="text" v-model="editedCategory.title").input.input_active
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
              input(type="text" v-model="skill.title" placeholder="Новый навык").input.input__new
            .skills__new-rate.skills__rate
              input(type="text" v-model="skill.percent" placeholder="100").input.input__rate.input__new
            button.skills__add(
              type="button"
              @click="addNewSkill"
            )
              img(src="~/images/content/add.png").plus.plus_large
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
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
    skillsItem: () => import('templates/skills-item.vue')
  },
  methods: {
    ...mapActions('skills',['addSkill']),
    async addNewSkill() {
      try {
        await this.addSkill(this.skill);
      } catch(error) {
        // error
      }
    },
    ...mapActions('categories',['editCategory','removeCategory']),
    async save() {
      try {
        await this.editCategory(this.editedCategory);
        this.editmode = false;
      } catch(error) {
        
      }
    },
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category.id)
        console.log(this.category.id)
      } catch (error) {
        
      }
    }
  }
}
</script>

