<template lang="pug">
  ul.skills__list
    li.skills__child
      .skills__info
        .skills__subtitle
          input( type="text" value="{{skill.title}}").input
        .skills__rate
          input( type="text" value="{{skills.percent}}").input.input__rate
      .skills__btns
        .skills__btn-child.skills__edit
          button.edit
        .skills__btn-child.skills__remove
          button.remove(type="button" @click="removeExistedSkill")
    li.skills__child
      .skills__info
        .skills__subtitle
          input( type="text" value="Terminal").input
        .skills__rate
          input( type="text" value="90").input.input__rate
      .skills__btns
        .skills__btn-child.skills__edit
          button.edit
        .skills__btn-child.skills__remove
          button.remove
    li.skills__child
      .skills__info
        .skills__subtitle
          input( type="text" value="Gulp").input
        .skills__rate
          input( type="text" value="90").input.input__rate
      .skills__btns
        .skills__btn-child.skills__edit
          button.edit
        .skills__btn-child.skills__remove
          button.remove
    li.skills__child
      .skills__info
        .skills__subtitle
          input( type="text" value="Webpack").input
        .skills__rate
          input( type="text" value="90").input.input__rate
      .skills__btns  
        .skills__btn-child.skills__edit
          button.edit
        .skills__btn-child.skills__remove
          button.remove
</template>

<script>
import {mapActions} from "vuex"

export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapActions('skills',['removeSkill']),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id)
      } catch(error) {
        
      }
    }
  }
}
</script>

