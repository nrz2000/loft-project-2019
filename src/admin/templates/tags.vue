<template lang="pug">
  .work__tags
    template(v-if="interactive")
      .work__tags-child.work__tags-child_edit( 
        v-for="(tag, index) in tags"
        :key="tag.index"
      )
        span {{tag}}
        button.delete-light
    template(v-else)
      .work__tags-child( v-for="(tag, index) in tags"
        :key="tag.index"
      )
        span {{tag}}
</template>

<script>
export default {
  props: {
    tags: Array,
    interactive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

  