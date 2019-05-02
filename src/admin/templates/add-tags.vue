<template lang="pug">
  .work__content-child.work__content-tags
    label(for="project-tags").section__label Добавление тэга
    //- pre {{ value }}
    input(
      type="text"
      id="project-tags"
      :value="tags"
      @input="handleInput"
      placeholder="Теги через запятую"
    ).input.input__line
    .work__content-child
      tags(
        :tags="tagsArray"
        :interactive="true"
        @remove="removeTag"
      )
</template>

<script>
export default {
  props: {
    value: String
  },
  components: {
    tags: () => import("templates/tags.vue")
  },
  data() {
    return {
      tagsString: this.value
    }
  },
  computed: {
    tagsArray() {
      if(!!this.tags.lenght === false) return [];
      return this.tags.split(",");
    },
    tags: {
      get() {
        return this.value;
      },
      set(value) {
        this.tagsString = value;
      }
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event.target.value);
      this.tags = $event;
    },
    removeTag(index) {
      const tagsArray = [...this.tagsArray];
      tagsArray.splice(index, 1);

      this.$emit("removeTag", tagsArray.join(","));
    }
  }
}
</script>

