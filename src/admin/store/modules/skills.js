export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILLS: (state,skills) => {
      state.skills = skills
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill);
    },
    REMOVE_SKILL: (state, deletedSkillId) => {
      state.skills = state.skills.filter(skill => skill.id !== deletedSkillId)
    }
  },
  actions: {
    async addSkill({commit}, skill) {
      try {
        const response = await $axios.post('/skills', skill);
        commit('ADD_SKILL', response.data.skill);
        return response
      } catch(eror) {
        //error handling
      }
    },
    async fetchSkills({commit}, skill) {
      try {
        const response = await $axios.get('/skills/1', skill);
        commit('SET_SKILLS', response.data)
        return response
      } catch(eror) {
        //error handling
      }
    },
    async removeSkills({commit}, skillId) {
      try {
        const response = await $axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId)
        return response
      } catch(eror) {
        //error handling
      }
    }
  }
}