<template lang="pug">
  .login__input(
    :class="{'error' : !!errorText}"
  )   
    label(:for="icon").input__label.section__label(v-if="title") {{title}}
      .form__input
        input.input.input__login(
          :type="type" 
          :id="icon"
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
          name="fullname"
          required
        )
        .form__input-icon(
          :class="`form__input-icon_${icon}`"
        )
        errors-tooltip(
          :errorText="errorText"
        )
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    errorText: {
      type: String,
      default: ""
    },
    value: String | Number,
    icon: {
      type: String,
      default: ""
    }
  },
  components: {
    errorsTooltip: () => import("./errors-tooltip.vue")
  }
}
</script>
