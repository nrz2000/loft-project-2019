<template lang="pug">
  section.feedback  
    .container
      .section__wrap.feedback__wrap
        h2.section__title.work__title Блок «Отзывы»
        .section__form.feedback__form
          form.form
            .feedback__edit
              .section__edit-title.feedback__edit-title 
                span Новый отзыв
              .feedback__area
                .feedback__user
                  .feedback__avatar 
                    img(src="../images/content/fb-1.png").avatar
                  button.feedback__add Добавить фото
                .feedback__content
                  .feedback__content-child.feedback__content-name
                    label(for="project-name").section__label Имя автора
                    input(type="text" id="project-name" placeholder="Название сайта").input.input__line
                  .feedback__content-child.feedback__content-post
                    label(for="project-name").section__label Титул автора
                    input(type="text" id="project-name" placeholder="Название сайта").input.input__line
                  .feedback__content-child.feedback__content-descr
                    label(for="project-tags").section__label Отзыв
                    textarea(type="text" id="project-tags" placeholder="").textarea.textarea__feedback
            .feedback__bottom
              button.btn.btn_transparent Отмена
              button.btn Сохранить
        .section__list.feedback__list
          button.section__card.feedback__card.section__card_add
            .feedback__icon.section__icon
              .section__icon-plus
            .section__prompt 
              span Добавить отзыв
          .section__card.feedback__card.feedback__card_edit
            .feedback__top
              .feedback__card-user
                .feedback__card-avatar 
                  img(src="../images/content/fb-1.png").avatar
                .feedback__card-info
                  .feedback__card-name
                    span Владимир Сабанцев
                  .feedback__card-post
                    span Преподаватель
              p.feedback__card-descr Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .section__card-btns
              button.section__card-btn.section__card-edit
                | Править
              button.section__card-btn.section__card-delete
                span Удалить
                .delete
          .section__card.feedback__card.feedback__card_edit
            .feedback__top
              .feedback__card-user
                .feedback__card-avatar 
                  img(src="../images/content/fb-2.png").avatar
                .feedback__card-info
                  .feedback__card-name
                    span Владимир Сабанцев
                  .feedback__card-post
                    span Преподаватель
              p.feedback__card-descr Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .section__card-btns
              button.section__card-btn.section__card-edit
                | Править
                // img.__btn 
              button.section__card-btn.section__card-delete
                span Удалить
                .delete
                // img.__btn 
          .section__card.feedback__card.feedback__card_edit
            .feedback__top
              .feedback__card-user
                .feedback__card-avatar 
                  img(src="../images/content/fb-1.png").avatar
                .feedback__card-info
                  .feedback__card-name
                    span Владимир Сабанцев
                  .feedback__card-post
                    span Преподаватель
              p.feedback__card-descr Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .section__card-btns
              button.section__card-btn.section__card-edit
                | Править
              button.section__card-btn.section__card-delete
                span Удалить
                .delete    
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

</style>
