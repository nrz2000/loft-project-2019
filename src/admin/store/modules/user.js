export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    CLEAR_USER: state => {
      state.user = {};
    }
  },
  getters: {
    userIsLogged: state => {
      const userObj = state.user;
      const userObjectIsEmpty = 
        Object.keys(userObj).length === 0 && userObj.constructor === Object;
      return userObjectIsEmpty === false;
    }
  },
  actions: {
    async logout ({ commit }) {
      const response = await this.$axios.post('/logout');
      commit('CLEAR_USER');
      location.href = '/loft-project-2019/';
      return response;
    }
  }
}