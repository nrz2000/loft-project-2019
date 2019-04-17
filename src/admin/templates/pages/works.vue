<template lang="pug">
  section.work  
    .container
      .section__wrap.work__wrap
        h2.section__title.work__title Блок "Работы" 
        .section__form.work__form
          form.form
            .work__edit
              .section__edit-title.work__edit-title 
                span Редактирование работы
              .work__area
                .work__loader
                  input(type="file" id="loader" name="loader").download
                  .download__label  
                    label(for="loader").download__title Перетащите или загрузите для загрузки изображения
                    label(for="loader").btn.btn_small.download__btn Загрузить
                  button.work__add Изменить превью
                .work__content
                  .work__content-child.work__content-title
                    label(for="project-name").section__label Название
                    input(type="text" id="project-name" placeholder="Название сайта").input.input__line
                  .work__content-child.work__content-link
                    label(for="project-link").section__label Ссылка 
                    input(type="text" id="project-link" placeholder="Ссылка на сайт").input.input__line
                  .work__content-child.work__content-descr
                    label(for="project-descr").section__label Описание 
                    textarea(type="text" id="project-descr" placeholder="Описание сайта").textarea.textarea__work
                  .work__content-child.work__content-tags
                    label(for="project-tags").section__label Добавление тэга
                    input(type="text" id="project-tags" placeholder="Теги через запятую").input.input__line
                  .work__content-child.work__tags
                    .work__tags-child.work__tags-child_edit
                      span HTML
                      button.delete-light
                    .work__tags-child.work__tags-child_edit
                      span HTML
                      button.delete-light
                    .work__tags-child.work__tags-child_edit
                      span HTML
                      button.delete-light
            .work__bottom
              button.btn.btn_transparent Отмена
              button.btn Сохранить
        .section__list.work__list
          button.section__card.work__card.section__card_add
            .section__icon 
              .section__icon-plus
            .section__prompt 
              span Добавить работу
          .section__card.work__card.work__card_edit
            .work__card-img
              img(src="images/content/work-1.jpg")
              .work__card-tags.work__tags
                .work__tags-child 
                  span HTML
                .work__tags-child 
                  span HTML
                .work__tags-child 
                  span HTML
            .work__card-info
              .work__title 
                span Сайт школы образования
              .work__descr 
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .work__link  
                a(href="") http://loftschool.ru
              .section__card-btns
                button.section__card-btn.section__card-edit
                  span Править
                  .edit
                button.section__card-btn.section__card-delete
                  span Удалить
                  .delete
          .section__card.work__card.work__card_edit
            .work__card-img
              img(src="images/content/work-1.jpg")
              .work__card-tags.work__tags
                .work__tags-child 
                  span HTML
                .work__tags-child 
                  span HTML
                .work__tags-child 
                  span HTML
            .work__card-info
              .work__title 
                span Сайт школы образования
              .work__descr 
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .work__link  
                a(href="") http://loftschool.ru
              .section__card-btns
                button.section__card-btn.section__card-edit
                  span Править
                  .edit
                button.section__card-btn.section__card-delete
                  span Удалить
                  .delete
          .section__card.work__card.work__card_edit
            .work__card-img
              img(src="images/content/work-1.jpg")
              .work__card-tags.work__tags
                .work__tags-child 
                  span HTML
                .work__tags-child 
                  span HTML
                .work__tags-child 
                  span HTML
            .work__card-info
              .work__title 
                span Сайт школы образования
              .work__descr 
                p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .work__link  
                a(href="") http://loftschool.ru
              .section__card-btns
                button.section__card-btn.section__card-edit
                  span Править
                  .edit
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


