<template>
  <div class="todos">{{ this.$store.state.tasks }}</div>
</template>

<script>
export default {
  name: "TodosView",
  created() {
    this.$store.dispatch("fetchAPI");
  },
};
</script>

<style scoped>
.todos {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
