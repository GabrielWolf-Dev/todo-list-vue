<template>
  <div class="mt-40" v-if="tasks">
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
      <label
        class="label"
        :class="{ 'task--completed': task.completed }"
        :for="task.id"
        >{{ task.value }}</label
      >
    </fieldset>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { api } from "@/helpers/api";

export default {
  name: "TaskList",
  props: ["tasks"],
  methods: {
    ...mapMutations(["UPDATE_TASKS"]),
    async checkTask(event) {
      const { id, checked } = event.target;
      const convertId = Number(id);
      const [objTask] = this.tasks.filter((task) => task.id === convertId);
      const otherTasks = this.tasks.filter((task) => task.id !== convertId);

      const { data } = await api.put(id, {
        ...objTask,
        completed: checked,
      });

      this.UPDATE_TASKS([...otherTasks, data]);
      if (this.$store.state.optionTasks !== "All")
        this.$store.dispatch("removeOldTasks", otherTasks);
    },
  },
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
