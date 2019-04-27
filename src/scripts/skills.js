import Vue from "vue";
import axios from 'axios';

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
    skill: Object
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
      skills: {}
    }
  },
  async created() {
  //   try {
  //     const response = await this.$axios.get('/user/137')
  //   } catch (error) {
      
  //   }
    const data = require("../data/skills.json");
    this.skills = data;
  }
})
