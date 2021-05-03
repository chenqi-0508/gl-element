<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "GlFormItem",
  inject: ["form"],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errorMessage: "",
    };
  },
  methods: {
    validate() {
      console.log("validate", this.prop)
      if (!this.prop) return;
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];

      const descriptor = { [this.prop]: rules };
      const asyncValidate = new AsyncValidator(descriptor);
      return asyncValidate.validate({ [this.prop]: value }, (error) => {
        if (error) {
          this.errorMessage = error[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    },
  },
  components: {},
};
</script>

<style>
</style>
