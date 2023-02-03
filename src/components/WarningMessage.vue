<template>
  <div class="msg-warning">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "WariningMessage",
  props: {
    message: {
      type: String,
      default: "Warining message",
      require: true,
    },
  },
};
</script>

<style scoped>
.msg-warning {
  width: auto;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-white);
  padding: 20px 40px;
  border-radius: 12px;
  background-color: var(--color-warning);
  box-shadow: var(--box-shadow-warning);
  transition: 0.3s;
}
</style>
