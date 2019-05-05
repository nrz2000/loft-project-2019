<template lang="pug">
  .work__content-child.work__content-tags
    app-input(
      title="Добавление тега"
      type="text"
      :value="tags"
      placeholder="Теги через запятую"
      :errorText="errorText"
      @input="handleInput"
      nopadding=true
    )
    tags(
      :tags="tagsArray"
      :interactive="true"
      @remove="removeTag"
    )
</template>

<script>
export default {
  props: {
    value: String,
    errorText: String
  },
  components: {
    tags: () => import("templates/tags.vue"),
    appInput: () => import("templates/input.vue")
  },
  data() {
    return {
      tagsString: this.value
    }
  },
  computed: {
    tagsArray() {
      if(!!this.tags.length === false) return [];
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
      this.$emit("input", $event);
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

