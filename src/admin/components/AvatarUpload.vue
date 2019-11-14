<template lang="pug">
  .avatar-upload
    label.avatar-upload__control(
      for="file-input"
      :class="{ 'avatar-upload__control_drag': isDragImage }"
      @dragenter.prevent="dragenterFocusIn"
      @dragover.prevent="dragenterFocusIn"
      @dragleave.prevent="dragenterFocusOut"
      @drop.prevent="handleDrop"
    )
      img.avatar-upload__image(
        v-if="renderedPhoto && !isDragImage"
        :src="renderedPhoto"
      )
    input.avatar-upload__file#file-input(
      ref="file-input"
      type="file"
      accept="image/jpeg,image/png"
      @change="handlePhotoUpload"
    )
    basic-button.avatar-upload__button(
      size="small"
      display="flat"
      @click="uploadFile($event.target.files[0])"
    ) {{ value ? 'Изменить фото' : 'Добавить фото' }}
    transition(name="slide-up")
      .avatar-upload__error(v-if="errorMessage")
        error-tooltip {{ errorMessage }}
</template>

<script>
import { renderer, getAbsoluteImgPath } from "../components/helpers/pictures";
export default {
  components: {
    ErrorTooltip: () => import("./ErrorTooltip.vue"),
    BasicButton: () => import("./BasicButton.vue")
  },
  props: {
    value: {
      type: File | String,
      default: null
    },
    maxSize: {
      type: Number,
      default: 1500000
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  watch: {
    value(value) {
      this.setRenderedPhoto();
    }
  },
  data() {
    return {
      isDragImage: false,
      renderedPhoto: null
    };
  },
  methods: {
    uploadFile() {
      this.$refs["file-input"].click();
    },
    setRenderedPhoto() {
      if (typeof this.value === "string") {
        this.renderedPhoto = getAbsoluteImgPath(this.value);
      } else {
        if (this.value) {
          this.renderPhoto(this.value);
        } else {
          this.renderedPhoto = null;
        }
      }
    },
    async renderPhoto(file) {
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
      } catch (error) {
        alert(error.message);
        this.$emit("input", null);
      }
    },
    dragenterFocusIn(e) {
      this.isDragImage = true;
    },
    dragenterFocusOut() {
      this.isDragImage = false;
    },
    handleDrop({ dataTransfer }) {
      const file = dataTransfer.files[0];
      this.handlePhotoUpload(file);
      this.isDragImage = false;
    },
    async handlePhotoUpload(file) {
      if (file.size > this.maxSize) {
        alert("Слишком большой размер файла (максимум 1.5MB)");
        return;
      }
      this.$emit("input", file);
    }
  },
  created() {
    this.setRenderedPhoto();
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.avatar-upload {
  position: relative;
  &__control {
    position: relative;
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: $placeholder-color;
    background-image: url("../images/content/user.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 85px 113px;
    transition: opacity 0.2s ease;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      opacity: 0.7;
    }
    &_drag {
      background-color: gray;
    }
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  &__file {
    display: none;
  }
  &__button {
    width: 100%;
    white-space: nowrap;
  }
  &__error {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
}
.slide-up {
  &-enter-to,
  &-leave {
    transition: all 0.3s ease;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
}
</style>