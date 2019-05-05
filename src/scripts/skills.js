import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      circle.style.animationDelay = `-${this.skillPercent}s`;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
}

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    category: Object,
    skills: Array
  }
}

new Vue ({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: [],
      categories: []
    }
  },
  methods: {
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
    async fetchCategories() {
        try {
          const response = await axios.get('/categories/137');
          this.categories = response.data;
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          )

        }
      },
    async fetchSkills() {
        try {
          const response = await axios.get('/skills/137');
          this.skills = response.data;
          return response;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          )

        }
      },
  },
  async created() {
    try {
      await this.fetchCategories();
    } catch (error) {
      console.log('error on load categories');
    }
    try {
      await this.fetchSkills();
    } catch (error) {
      console.log('error on load skills');
    }
  }
})
