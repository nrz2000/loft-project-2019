<template lang="pug">
  form.form
    card(
      :title="title"
    )
      template(slot="content")
        slot(name="form-content")
        .work__bottom
          button.btn.btn_transparent(type="button" @click="$emit('cancel')") Отмена
          button.btn(type="button" @click="$emit('submit')") Сохранить
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Форма добавления элемента"
    }
  },
  components: {
    card: () => import("templates/card.vue")
  }
}
</script>

