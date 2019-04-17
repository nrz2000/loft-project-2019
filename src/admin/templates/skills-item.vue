<template lang="pug">
  ul.skills__list(v-if="editmode === false")
    li.skills__child
      .skills__info
        .skills__subtitle {{skill.title}}
        .skills__rate {{skill.percent}}
      .skills__btns
        .skills__btn-child.skills__edit
          button.edit(type="button" @click="editmode = true")
        .skills__btn-child.skills__remove
          button.remove(type="button" @click="removeExistedSkill")

  ul.skills__list(v-else)
    li.skills__child
      .skills__info
        .skills__subtitle
          input( type="text" v-model="editedSkill.title").input
        .skills__rate
          input( type="text" v-model="editedSkill.percent").input.input__rate
      .skills__btns
        .skills__btn-child.skills__perform
          button.perform(type="button" @click="save")
        .skills__btn-child.skills__delete
          button.delete(type="button" @click="editmode = false")
</template>

<script>
import {mapActions} from "vuex"

export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editmode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions('skills',['removeSkill','editSkill']),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id)
      } catch(error) {
        
      }
    },
    async save() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch(error) {
        
      }
    }
  }
}
</script>

