<template>
  <button @click.prevent="clickHandle">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'GlButton',
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  methods: {
    clickHandle() {
      this.$emit('click')
    }
  },
  components: {

  }
}
</script>

<style>

</style>
