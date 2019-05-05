import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";


const btns = {
  template: "#slider-btns",
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  }

};

const thumbs = {
  template: "#slider-thumbs",
  components: {
    btns
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  }
};

const display = {
  template: "#slider-display",
  components: {
    thumbs
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    currentWork: Object,
    tagsArray: Array
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.techs.split(', ');
    }
  }
};

new Vue ({
  template: "#slider-container",
  el: "#slider-component",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      render: false
    };
  },
  computed: {
    currentWork() {
      return this.works[0];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForCurIndex(value);
    }
  },
  methods: {
    makeInfiniteLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;
      if(value > worksAmount) this.currentIndex = 0
      if(value < 0) this.currentIndex = worksAmount;
    },
    makeArrWithRequiredImages(data) {
      return data.map((item,index) => {
        const requiredPic = (`https://webdev-api.loftschool.com/${item.photo}`);
        item.photo = requiredPic;
        item.index = index;

        return item;
      })
    },
     handleChangeIndex(index) {
       const arr = this.works.splice(0, index);
       this.works = [...this.works, ...arr];
     },
    handleSlide(direction) {
      switch (direction) {
        case "next" :
          this.works.push(this.works[0]);
          this.works.shift()
          this.currentIndex++;
          break;
        case "prev" :
          const lastItem = this.works[this.works.length - 1];
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--;
          break;
      }
    },
    async fetchWorks() {
      try {
        const response = await axios.get('/works/137');
        this.works = response.data;
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        )

      }
    }
  },
  async created() {
    try {
      await this.fetchWorks();
    } catch (error) {
      console.log('error on load works');
    }
    this.works = this.makeArrWithRequiredImages(this.works);
    this.render = true;
  }
});