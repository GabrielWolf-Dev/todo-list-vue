<template>
  <div>
    <fieldset v-for="task in tasks" :key="task.id">
      <label :for="task.id">{{ task.value }}</label>
      <input
        type="checkbox"
        :name="task.task"
        :id="task.id"
        :value="task.value"
        :checked="task.completed"
      />
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: ["tasks"],
};
</script>

<style scoped></style>
