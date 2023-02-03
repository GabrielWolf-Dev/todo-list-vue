<template>
  <div class="error-msg" v-if="error !== null">
    {{ error }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ErrorMessage",
  computed: {
    ...mapState(["error"]),
  },
};
</script>

<style scoped>
.error-msg {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-white);
  padding: 20px 40px;
  border-radius: 12px;
  background-color: var(--color-error);
  box-shadow: var(--box-shadow-error);
  animation: show-message 0.6s forwards;
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes show-message {
  to {
    bottom: 80px;
  }
}
</style>
