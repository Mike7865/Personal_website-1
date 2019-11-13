<template lang="pug">
  .tags-input
    simple-input(
      :value="value"
      @input="$emit('input', $event)"
    )
    tags(
      :tags="tags"
      :is-readonly="false"
      color="gray"
      @remove="onRemoveTag"
    )
</template>

<script>
export default {
  components: {
    SimpleInput: () => import("./SimpleInput.vue"),
    Tags: () => import("./Tags.vue")
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    tags() {
      return this.value
        .split(",")
        .map(substr => substr.trim())
        .filter(tag => !!tag);
    }
  },
  methods: {
    onRemoveTag(index) {
      const filteredTags = this.tags.filter((tag, i) => i !== index);
      this.$emit("input", filteredTags.join(", "));
    }
  }
};
</script>