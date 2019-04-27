<template lang="pug">
  .work__edit(v-if="plain")
    slot(name="default")

  .work__edit(v-else)
    .section__edit-title.work__edit-title 
      span(v-text="title")
        slot(name="title" v-if="!!title === false")
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

