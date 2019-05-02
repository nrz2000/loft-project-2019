import { wrapIntoFormData } from "@/helpers/form";

export default {
  namespaced: true,
  state: {
    reviews: [],
    currentReview: {}
  },
  mutations: {
    ADD_REVIEW: (state, review) => {
      state.reviews.push(review);
    },
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    },
    REMOVE_REVIEW: (state, deletedWorkId) => {
      state.reviews = state.reviews.filter( review => review.id !== deletedWorkId);
    },
    SET_CURRENT_REVIEW: (state, updatedReviewId) => {
      state.currentReview = state.reviews.filter(review => review.id === updatedReviewId)[0];
    },
    EDIT_REVIEW: (state, updatedReview) => {
      state.reviews = state.reviews.map(review => 
        review.id === updatedReview.id ? updatedReview : review  
      )
    }
  },
  actions: {
    async addReview({commit}, payload) {
      const data = wrapIntoFormData(payload)
      try {
        const response = await this.$axios.post('/reviews', data);
        commit('ADD_REVIEW', response.data);
        return response;
      } catch (error) {
        
      }
    },
    async fetchReviews({commit}) {
      try {
        const response = await this.$axios.get('/reviews/137');
        commit('SET_REVIEWS', response.data.reverse());
        return response;
      } catch (error) {
        
      }
    },
    async removeReview({commit}, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit('REMOVE_REVIEW', reviewId)
        return response;
      } catch (error) {
        
      }
    },
    async updateReview({commit}, review) {
      const data = wrapIntoFormData(review);
      try {
        const response = await this.$axios.post(`/reviews/${review.id}`, data);
        commit('EDIT_REVIEW', response.data.review);
        return response;
      } catch (error) {
        
      }
    }
  }
}