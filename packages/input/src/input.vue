<template>
  <input v-bind="$attrs" :type="type" :value="value" @input="inputHandle" />
</template>

<script>
export default {
  inheritAttrs: false,
  name: "GlInput",
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {};
  },
  methods: {
    inputHandle(e) {
      this.$emit("input", e.target.value);
      const findParent = parent => {
        while(!parent.prop) {
          findParent(parent.$parent)
        }
        parent.validate();
      };
      findParent(this.$parent)
    },
  },
  components: {},
};
</script>

<style>
</style>
