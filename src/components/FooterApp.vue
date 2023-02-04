<template>
  <footer class="footer">
    Desenvolvido por
    <a target="_blank" href="https://github.com/GabrielWolf-Dev/todo-list-vue" class="developer"
      >GabrielWolf-Dev</a
    >
    - devChallenges.io
  </footer>
</template>

<script>
export default {
  name: "FooterApp",
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-base-2);
}

.developer {
  font-weight: 700;
  color: var(--color-base-2);
}

@media (max-width: 768px) {
  .footer {
    width: 100%;
  }
}
</style>
