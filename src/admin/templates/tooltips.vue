<template lang="pug">
  .tooltip(
    :class="type"
  )
    .tooltip__title 
      span {{text}}
    button.tooltip__close(type="button" @click="closeTooltip")
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  computed: {
    ...mapState('tooltips', {
      text: state => state.text,
      type: state => state.type
    })
  },
  methods: {
    ...mapActions('tooltips',['closeTooltip'])
  }
}
</script>

