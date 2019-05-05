<template lang="pug">
  section.about
    .container
      .section__wrap.about__wrap
        .about__top 
          h2.section__title.about__title Блок «Обо мне»    
          .about__add
            button.add(
              @click="showAddingForm = true",
              v-if="showAddingForm === false"
            )
              .add__icon
                img(src="~/images/content/add.png").plus
              span.add__title Добавить группу

        .about__bottom
          .about__card(v-if="showAddingForm")
            skills-add(
              @close="close"
              :errorText="validation.firstError('skilltitle')"
            )
          .about__card(
            v-for= "category in categories"
            :key="category.id"
          )
            skills-group(
              :category="category"
              :skills="filterSkillsByCategoryId(category.id)"
            )
</template>

<script>
import {mapActions, mapState} from 'vuex';
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    skilltitle: value => {
      return Validator.value(value).required("Заполните название");
    }
  },
  components: {
    skillsAdd: () => import('templates/skills-add.vue'),
    skillsGroup: () => import('templates/skills-group.vue')
  },
  data() {
    return {
      showAddingForm: false,
      category: {
        title: ""
      }
    }
  },
  methods: {
    ...mapActions('categories',['fetchCategories']),
    ...mapActions('tooltips',['showTooltip']),  
    ...mapActions('skills',['fetchSkills']),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
    close() {
      this.showAddingForm = false;
      this.title = "";
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  async created() {
    try {
      await this.fetchCategories();
    } catch(error) {
      alert('Произошла ошибка при загрузке категорий')
    }
    try {
      await this.fetchSkills();
    } catch(error) {
      alert('Произошла ошибка при загрузке скиллов')
    }
  }
}
</script>

<style lang="scss">

</style>