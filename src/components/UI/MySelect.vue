<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled selected value="">Change from list</option>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  //   props: {
  //     modelValue: {
  //       type: String,
  //     },
  //     options: {
  //       type: Array,
  //       default: () => [],
  //     },
  //   },

  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
