<template lang="pug">
  .feedback__card_edit
    .feedback__top
      .feedback__card-user
        .feedback__card-avatar 
          img(:src="user.avatar").avatar
        .feedback__card-info
          .feedback__card-name
            span {{ user.name }}
          .feedback__card-post
            p {{ user.occ }}
      p.feedback__card-descr {{ user.text}}
</template>

<script>
export default {
  props: {
    user: Object
  }
}
</script>
