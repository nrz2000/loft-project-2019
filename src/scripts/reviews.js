import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
  el: '#reviews',
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
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
    }
  },
  // screenSize() {
  //   if (matchMedia('screen and (max-width: 768px)').matches) {
  //     this.flickityOptions.groupCells = 1;
  //   }
  // }
});