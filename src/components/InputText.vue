<template>
  <input
    class="input"
    type="text"
    :name="name"
    :id="id"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    name: {
      type: String,
      default: "handleValue",
    },
    id: {
      type: String,
      default: "handleValue",
    },
    placeholder: {
      type: String,
      default: "add details",
    }
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  max-width: 500px;
  height: 60px;
  border-radius: 12px;
  border: 1px solid var(--color-base-1);
  padding-left: 12px;
  outline-color: var(--color-primary);
}
</style>
