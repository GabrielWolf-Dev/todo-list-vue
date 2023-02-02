<template>
  <header class="header">
    <h1 class="title mb-40">#todo</h1>

    <ul class="list-options">
      <li class="item-option">All</li>
      <li class="item-option">Active</li>
      <li class="item-option">Completed</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderApp",
};
</script>

<style scoped>
.header {
  width: 100%;
  max-width: 600px;
}

.title {
  font-family: "Raleway", sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-base-4);
}

.list-options {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 0 38px;
  border-bottom: 1px solid var(--color-base-1);
}

.item-option {
  widows: 100%;
  padding: 20px 40px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-base-4);
}

.item-option--active {
  border-bottom: 2px solid var(--color-primary);
}
</style>
