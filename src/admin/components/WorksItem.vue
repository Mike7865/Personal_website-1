<template lang="pug">
  card.works-item(:class="{ 'works-item_active': isActive }")
    .works-item__header(slot="title")
      img.works-item__user-avatarimg(:src="require(`../../images/${work.photo}`)")
      .works-item__user-info
        .works-item__user-name {{ work.author }}
        .works-item__user-position {{ work.position }}
    template(slot="content")
      .works-item__text {{ work.text }}
      .works-item__controls
        button.works-item__button.works-item__button_edit(@click="$emit('edit')")
          .works-item__button-text Править
          icon.works-item__button-icon_edit(name="pencil")
        button.works-item__button.works-item__button_delete(@click="$emit('delete')")
          .works-item__button-text Удалить
          icon.works-item__button-icon_delete(name="cross")
</template>

<script>
import { getAbsoluteImgPath } from "../components/helpers/pictures";
export default {
  components: {
    Card: () => import("./Card.vue"),
    Icon: () => import("./Icon.vue")
  },
  props: {
    work: {
      type: Object,
      default: {}
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    imageSrc() {
      return getAbsoluteImgPath(this.work.photo);
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.works-item {
  position: relative;
  &_active::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 0.7);
  }
  &__header {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  &__user-avatar {
    object-fit: cover;
    object-position: center center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  &__user-info {
    margin-left: 20px;
  }
  &__user-name {
    color: $text-color;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
  }
  &__user-position {
    color: rgba($text-color, 0.5);
    font-size: 16px;
    font-weight: 700;
  }
  &__text {
    margin: 20px 0;
    color: rgba($text-color, 0.7);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
  }
  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
  }
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: white;
    &:hover {
      opacity: 0.7;
    }
  }
  &__button-text {
    margin-right: 10px;
    font-weight: 600;
    color: rgba($text-color, 0.5);
  }
  &__button-icon {
    &_edit {
      width: 17px;
      height: 17px;
      fill: $link-color;
    }
    &_delete {
      width: 15px;
      height: 15px;
      fill: $danger-color;
    }
  }
}
</style>