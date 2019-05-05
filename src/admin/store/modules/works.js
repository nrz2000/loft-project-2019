import { wrapIntoFormData } from "@/helpers/form";

export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    ADD_WORK: (state, work) => {
      state.works.push(work);
    },
    SET_WORKS: (state, works) => {
      state.works = works;
    },
    REMOVE_WORK: (state, deletedWorkId) => {
      state.works = state.works.filter(work => work.id !== deletedWorkId);
    },
    SET_CURRENT_WORK: (state, updatedWorkId) => {
      state.currentWork = state.works.filter(work => work.id === updatedWorkId)[0];
    },
    EDIT_WORK: (state, updatedWork) => {
      state.works = state.works.map(work => 
        work.id === updatedWork.id ? updatedWork : work  
      )
    }
  },
  actions: {
    async addWork({commit}, payload ) {
      const data = wrapIntoFormData(payload)
      try {
        const response = await this.$axios.post('/works', data);
        commit("ADD_WORK", response.data);
        return response;
      } catch(error) {
      }
    },
    async fetchWorks({commit}) {
      try {
        const response = await this.$axios.get('/works/137');
        commit('SET_WORKS', response.data.reverse());
        return response;
      } catch (error) {
        
      }
    },
    async removeWork({commit}, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit('REMOVE_WORK', workId);
        return response; 
      } catch (error) {
        alert('Ошибка при удалении Работы')
      }
    },
    async updateWork({commit}, work) {
      const data = wrapIntoFormData(work);
      try {
        const response = await this.$axios.post(`/works/${work.id}`, data);
        commit('EDIT_WORK', response.data.work);
        return response;
      } catch (error) {
        
      }
    }
  }
}