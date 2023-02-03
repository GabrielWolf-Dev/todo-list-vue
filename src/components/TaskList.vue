<template>
  <div class="mt-40" :style="{ textAlign: 'right' }">
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

      <abbr title="Excluir tarefa">
        <button
          @click="deleteItem"
          class="trash-btn"
          v-if="optionTasks === 'Completed'"
          :data-id="task.id"
        >
          <img
            class="img-trash"
            src="@/assets/trash.svg"
            alt="Trash icon"
          /></button
      ></abbr>
    </div>
    <button
      @click="deleteAll"
      class="delete-all-btn"
      v-if="optionTasks === 'Completed' && tasks.length !== 0"
    >
      Excluir tudo
    </button>
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
    ...mapActions(["setError", "setSuccess", "updateTasks"]),
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
    async deleteItem(event) {
      const { id } = event.currentTarget.dataset;
      try {
        const { status } = await api.delete(id);
        const convertId = Number(id);
        const tasksFiltered = this.tasks.filter(
          (task) => task.id !== convertId
        );

        if (status === 200) {
          this.setSuccess("Tarefa excluída com sucesso!");

          setTimeout(() => {
            this.setSuccess(null);
          }, 3000);
        }
        this.updateTasks(tasksFiltered);
      } catch (error) {
        this.setError("Houve algum erro no servidor ao excluir a tarefa.");
        console.error(error.message);

        setTimeout(() => {
          this.setError(null);
        }, 3000);
      }
    },
    async deleteAll() {
      const confirmDelete = confirm(
        "Tem certeza que deseja excluir todas as tarefas?"
      );

      if (confirmDelete)
        try {
          const ids = this.tasks.map((task) => task.id);
          ids.forEach(async (id) => await api.delete(`${id}`));

          this.setSuccess("Tarefas excluídas com sucesso!");

          setTimeout(() => {
            this.setSuccess(null);
          }, 3000);
          this.updateTasks([]);
        } catch (error) {
          this.setError("Houve algum erro no servidor ao excluir as tarefas.");
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

.delete-all-btn {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-white);
  padding: 20px 40px;
  border-radius: 12px;
  background-color: var(--color-danger);
  box-shadow: var(--box-shadow-danger);
  transition: 0.3s;
  margin-top: 40px;
}

.delete-all-btn:hover {
  transform: translateY(-2px);
}
</style>
