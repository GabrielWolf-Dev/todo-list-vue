<template>
  <div class="success-msg" v-if="success !== null">
    {{ success }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SuccessMessage",
  computed: {
    ...mapState(["success"]),
  },
};
</script>

<style scoped>
.success-msg {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-black);
  padding: 20px 40px;
  border-radius: 12px;
  background-color: var(--color-success);
  box-shadow: var(--box-shadow-success);
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
