import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/';

new Vue({
  el: '#reviews',
  components: {
    Flickity
  },

  data() {
    return {
      reviews: [],
      render: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        resize: true,
        groupCells: true
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },

    async fetchReviews() {
      try {
        const response = await axios.get('/reviews/137');
        this.reviews = response.data;
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )

      }
    },
    makeArrWithRequiredImages(data) {
      return data.map((item, index) => {
        const requiredPic = (`https://webdev-api.loftschool.com/${item.photo}`);
        item.photo = requiredPic;
        // item.index = index;

        return item;
      })
    },
  },
  async created() {
    try {
      await this.fetchReviews();
    } catch (error) {
      console.log('error on load works');
    }
    this.reviews = this.makeArrWithRequiredImages(this.reviews);
    this.render = true;
  }
});