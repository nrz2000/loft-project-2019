<template lang="pug">   
  .form__child.form__input(v-if="fieldType === 'input'")
    label.input__label.section__label(
      :for="icon"
      :class="[{'no-padding' : nopadding},{'error' : !!errorText}]"
    )
      .input__title {{title}}
      .input__form
        input.input(
          :type="type" 
          :id="icon"
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
          :placeholder="placeholder"
          required
        )
        .form__input-icon(
          v-if="icon"
          :class="`form__input-icon_${icon}`"
        )
        errors-tooltip(
          :errorText="errorText"
        )
  .form__child.form__textarea(v-else-if="fieldType === 'textarea'")
    label.textarea__label.section__label(
      v-if="title"
      :class="[{'error' : !!errorText}]"
    )
      .textarea__title {{title}}
      .textarea__form
        textarea.textarea(
          v-bind="$attrs"
          :value="value"
          @input="$emit('input', $event.target.value)"
          :style="{'height':heightTextarea}"
          required
        )
        .form__textarea-icon(
          v-if="icon"
          :class="`form__textarea-icon_${icon}`"
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
    },
    nopadding: {
      type: Boolean,
      default: false
    },
    fieldType: {
      type: String,
      default: "input"
    },
    heightTextarea: {
      type: String,
      default: '150px'
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  components: {
    errorsTooltip: () => import("./errors-tooltip.vue")
  }
}
</script>

<style>
  .no-padding {
    padding: 0;
  }
</style>

