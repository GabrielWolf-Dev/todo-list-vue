<template>
  <div class="mt-40">
    <fieldset class="fieldset" v-for="task in tasks" :key="task.id">
      <input
        class="check"
        type="checkbox"
        :name="task.task"
        :id="task.id"
        :value="task.value"
        :checked="task.completed"
        @change="checkTask"
      />
      <label class="label" :class="{'task--completed': task.completed}" :for="task.id">{{ task.value }}</label>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: ["tasks"],
  methods: {
    checkTask(event) {
      const { id, checked } = event.target;
      console.log(id, checked);
    },
  }
};
</script>

<style scoped>
.fieldset {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 30px 0;
}

.fieldset:first-child {
  margin: 0 0 30px 0;
}

.fieldset:last-child {
  margin: 30px 0 0 0;
}

.check {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-black);
}

.task--completed {
  text-decoration: line-through;
}
</style>
