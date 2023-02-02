<template>
  <button type="submit" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonSubmit",
  props: {
    text: {
      type: String,
      required: true,
      default: "Add",
    },
  },
};
</script>

<style scoped>
.button {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-white);
  padding: 20px 40px;
  border-radius: 12px;
  background-color: var(--color-primary);
  box-shadow: var(--box-shadow-01);
}
</style>
