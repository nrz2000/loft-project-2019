<template lang="pug">
  .section__edit(v-if="plain")
    slot(name="default")

  .section__edit(v-else)
    .section__edit-title
      span(v-text="title")
      slot(v-if="!!this.title === false" name="title")
    slot(name="content")
</template>

<script>
export default {
  props: {
    title: String,
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>

