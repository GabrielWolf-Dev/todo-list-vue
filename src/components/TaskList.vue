<template>
  <div class="mt-40">
    <div class="container-task" v-for="task in tasks" :key="task.id">
      <fieldset class="fieldset">
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

      <button class="trash-btn" v-if="optionTasks === 'Completed'">
        <img class="img-trash" src="@/assets/trash.svg" alt="Trash icon" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { api } from "@/helpers/api";

export default {
  name: "TaskList",
  computed: {
    ...mapState(["optionTasks", "tasks"]),
  },
  methods: {
    ...mapMutations(["UPDATE_TASKS"]),
    ...mapActions(["setError"]),
    async checkTask(event) {
      const { id, checked } = event.target;
      const convertId = Number(id);
      const [objTask] = this.tasks.filter((task) => task.id === convertId);
      const otherTasks = this.tasks.filter((task) => task.id !== convertId);

      try {
        const { data } = await api.put(id, {
          ...objTask,
          completed: checked,
        });

        this.UPDATE_TASKS([...otherTasks, data]);
        if (this.$store.state.optionTasks !== "All")
          this.$store.dispatch("removeOldTasks", otherTasks);
      } catch (error) {
        this.setError(
          "[ERRO NO SERVIDOR] Não foi possível trocar o estado da tarefa"
        );
        console.error(error.message);

        setTimeout(() => {
          this.setError(null);
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.container-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trash-btn {
  width: 32px;
  height: 32px;
}

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
