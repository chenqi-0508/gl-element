<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  name: "GlForm",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter((child) => child.prop)
        .map((child) => child.validate());
      Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
    },
    // valid(children) {
    //   for (let index = 0; index < children.length; index++) {
    //     const child = children[index];
    //     if (child.$options.name === "GlFormItem") {
    //       child.validate();
    //     } else {
    //       this.valid(child.$children);
    //     }
    //   }
    // },
  },
  components: {},
};
</script>

<style>
</style>
