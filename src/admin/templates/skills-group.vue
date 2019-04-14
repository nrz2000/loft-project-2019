<template lang="pug">
  .skills
    form.form
      .skills__wrap
        .skills__top
          .skills__title
            // input(type="text" placeholder="Название новой группы").input.input_active
            h2  {{category.category}}
          .skills__btns
            .skills__btn-child.skills__perform
              button.perform
            .skills__btn-child.skills__delete
              button.delete
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
              @click="addNewSkill")
            )
              img(src="../images/content/add.png").plus.plus_large
</template>

<script>
import {mapActions} from "vuex;"

export default {
  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {
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
    }
  }
}
</script>

