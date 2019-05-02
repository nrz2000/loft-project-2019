<template lang="pug">
  form.form
    card(
      :title="title"
    )
      template(slot="content")
        slot(name="form-content")
        .form__bottom(
          :style="{'width': bottomWidth}"
        )
          button.btn.btn_transparent(type="button" @click="$emit('cancel')") Отмена
          button.btn(type="button" @click="$emit('submit')") Сохранить
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Форма добавления элемента"
    },
    bottomWidth: {
      type: String,
      default: '100%'
    }
  },
  components: {
    card: () => import("templates/card.vue")
  }
}
</script>

