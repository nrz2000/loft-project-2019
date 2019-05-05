export default {
  namespaced: true,
  state: {
    showed: false,
    text: "Текст тултипа",
    type: "success"
  },
  mutations: {
    SET_TYPE: (state, type) => {
      state.type = type
    },
    SET_SHOWED: (state, boolean) => {
      state.showed = boolean
    },
    SET_TEXT: (state, text) => {
      state.text = text
    }
  },
  actions: {
    showTooltip({commit}, payload) {
      const availableTypeOptions = ["success","warning","error"];
      if (availableTypeOptions.includes(payload.type) === false) {
        console.warn("Передан не допустимый тип для тултипов");
      }
      commit('SET_TYPE', payload.type);
      commit('SET_SHOWED', true);
      commit('SET_TEXT', payload.text)
    },
    closeTooltip({commit}) {
      commit("SET_SHOWED", false)
    }
  }
}