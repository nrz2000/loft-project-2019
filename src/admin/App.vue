<template lang="pug">
  .wrap
    .header
      .container
        .header__wrap
          .header__info
            .header__user
              .header__avatar
                img(src="../images/content/me.jpg").avatar
              .header__username
                span.username Никита Зиновьев
            span.header__subtitle Панель администрирования
          a(href="#").header__exit Выйти
    section.navigation
      .container
        .navigation__wrap
          nav.nav
            ul.nav__list
              li.nav__child.nav__child_active Обо мне
              li.nav__child Работы
              li.nav__child Отзывы
    main.main
      section.about
        .container
          .section__wrap.about__wrap
            .about__top 
              h2.section__title.about__title Блок «Обо мне»    
              .about__add
                button.add
                  .add__icon
                    img(src="../images/content/add.png").plus
                  span.add__title Добавить группу
            .about__bottom
              .about__card
                .skills
                  form.form.skills__form
                    .skills__wrap
                      .skills__top
                        .skills__title
                          input(type="text" placeholder="Название новой группы").input.input_active
                        .skills__btns
                          .skills__perform
                            button.perform
                              // img(src="" alt="#")
                          .skills__delete
                            button.delete
                              // img(src="" alt="#")
                      .skills__middle
                        ul.skills__list
                      .skills__bottom
                        .skills__new 
                          .skills__new-title
                            input(type="text" placeholder="Новый навык").input.input__new
                          .skills__new-rate.skills__rate
                            input(type="text" placeholder="100").input.input__rate.input__new
                          button.skills__add
                            img(src="../images/content/add.png").plus.plus_large
              .about__card
                .skills
                  form.form
                    .skills__wrap
                      .skills__top
                        .skills__title
                          input(type="text" placeholder="Название новой группы").input.input_active
                        .skills__btns
                          .skills__perform
                            button.perform
                              // img(src="" alt="#")
                          .skills__delete
                            button.delete
                              // img(src="" alt="#")
                      .skills__middle
                        ul.skills__list
                          li.skills__child
                            .skills__info
                              .skills__subtitle
                                input( type="text" value="Git").input
                              .skills__rate
                                input( type="text" value="100").input.input__rate
                            .skills__btns
                              .skills__edit
                                button.edit
                                  // img(src="" alt="#")
                              .skills__remove
                                button.remove
                                  // img(src="" alt="#")
                          li.skills__child
                            .skills__info
                              .skills__subtitle
                                input( type="text" value="Terminal").input
                              .skills__rate
                                input( type="text" value="90").input.input__rate
                            .skills__btns
                              .skills__edit
                                button.edit
                                  // img(src="" alt="#")
                              .skills__remove
                                button.remove
                                  // img(src="" alt="#")
                          li.skills__child
                            .skills__info
                              .skills__subtitle
                                input( type="text" value="Gulp").input
                              .skills__rate
                                input( type="text" value="90").input.input__rate
                            .skills__btns
                              .skills__edit
                                button.edit
                                  // img(src="" alt="#")
                              .skills__remove
                                button.remove
                                  // img(src="" alt="#")
                          li.skills__child
                            .skills__info
                              .skills__subtitle
                                input( type="text" value="Webpack").input
                              .skills__rate
                                input( type="text" value="90").input.input__rate
                            .skills__btns
                              .skills__edit
                                button.edit
                                  // img(src="" alt="#")
                              .skills__remove
                                button.remove
                                  // img(src="" alt="#")
                      .skills__bottom
                        .skills__new 
                          .skills__new-title
                            input(type="text" placeholder="Новый навык").input.input__new
                          .skills__new-rate.skills__rate
                            input(type="text" placeholder="100").input.input__rate.input__new
                          button.skills__add
                            img(src="../images/content/add.png").plus.plus_large
              .about__card
                .skills
                  form.form
                    .skills__wrap
                      .skills__top
                        .skills__title
                          input(type="text" placeholder="Название новой группы").input.input_active
                        .skills__btns
                          .skills__edit
                          .skills__perform
                            button.perform
                          //     // img(src="" alt="#")
                          .skills__delete
                            button.delete
                          //     // img(src="" alt="#")
                      .skills__middle
                        ul.skills__list
                          li.skills__child
                            .skills__info
                              .skills__subtitle
                                input( type="text" value="Git").input
                              .skills__rate
                                input( type="text" value="100").input.input__rate
                            .skills__btns
                              .skills__edit
                                button.edit
                                  // img(src="" alt="#")
                              .skills__remove
                                button.remove
                                  // img(src="" alt="#")
                          li.skills__child
                            .skills__info
                              .skills__subtitle
                                input( type="text" value="CSS3").input
                              .skills__rate
                                input( type="text" value="90").input.input__rate
                            .skills__btns
                              .skills__edit
                                button.edit
                                  // img(src="" alt="#")
                              .skills__remove
                                button.remove
                                  // img(src="" alt="#")
                      .skills__bottom
                        .skills__new 
                          .skills__new-title
                            input(type="text" placeholder="Новый навык").input.input__new
                          .skills__new-rate.skills__rate
                            input(type="text" placeholder="100").input.input__rate.input__new
                          button.skills__add
                            img(src="../images/content/add.png").plus.plus_large
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
                          button.delete-tags
                        .work__tags-child.work__tags-child_edit
                          span HTML
                          button.delete-tags
                        .work__tags-child.work__tags-child_edit
                          span HTML
                          button.delete-tags
                .work__bottom
                  button.btn.btn_transparent Отмена
                    // img(src="/images/icons/tick.svg")
                  button.btn Сохранить
            .section__list.work__list
              button.section__card.work__card.section__card_add
                .section__icon 
                  .section__icon-plus
                .section__prompt 
                  span Добавить работу
              .section__card.work__card.work__card_edit
                .work__card-img
                  img(src="../images/content/work-1.jpg")
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
                      | Править
                      // img.__btn 
                    button.section__card-btn.section__card-delete
                      | Удалить
                      // img.__btn 
              .section__card.work__card.work__card_edit
                .work__card-img
                  img(src="../images/content/work-1.jpg")
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
                      | Править
                      // img.__btn 
                    button.section__card-btn.section__card-delete
                      | Удалить
                      // img.__btn 
              .section__card.work__card.work__card_edit
                .work__card-img
                  img(src="../images/content/work-1.jpg")
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
                      | Править
                      // img.__btn 
                    button.section__card-btn.section__card-delete
                      | Удалить
                      // img.__btn 
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
                    // img.__btn 
                  button.section__card-btn.section__card-delete
                    | Удалить
                    // img.__btn 
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
                    | Удалить
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
                    // img.__btn 
                  button.section__card-btn.section__card-delete
                    | Удалить
                    // img.__btn 
</template>

<style lang="pcss">
  /* Общие стили */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  /* Стили для админки */
  @import "../styles/admin/interface.pcss";
  @import "../styles/admin/header.pcss";
  @import "../styles/admin/navigation.pcss";
  @import "../styles/admin/about.pcss";
  @import "../styles/admin/work.pcss";
  @import "../styles/admin/feedback.pcss";
  @import "../styles/admin/skills.pcss";
</style>
