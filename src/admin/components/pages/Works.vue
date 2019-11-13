<template lang="pug">
  .works-page
    tags-input(
      v-model="technologies"
    )
</template>

<script>
export default {
  components: {
    TagsInput: () => import("../TagsInput")
  },
  data() {
    return {
      technologies: "HTML, CSS, JS"
    };
  }
};
</script>