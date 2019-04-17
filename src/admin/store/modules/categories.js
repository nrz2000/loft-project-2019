
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    REMOVE_CATEGORY: (state, deletedCategoryId) => {
      state.categories = state.categories.filter( category => 
        category.id !== deletedCategoryId  
      )
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(
        category => category.id === editedCategory.id ? editedCategory : category
      )
    }
  },
  actions: {
    async userId() {
      try {
        const response = await this.$axios.get('/user')
          commit('SET_SKILLS', response.data);
          return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async addNewSkillGroup( state , groupTitle) {
      try {
        const response =  await this.$axios.post('/categories', {
          title: groupTitle
        });
        return response;
      } catch(error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get('/categories');
        commit('SET_CATEGORIES', response.data.reverse());
        return response;
      } catch(error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategory({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit('REMOVE_CATEGORY', categoryId);
        console.log(response.data.category );
        return response;
      } catch(error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory({ commit }, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, category);
        commit('EDIT_CATEGORY', response.data.category);
        return response;
      } catch(error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}