<template>
  <div class="todos">
    <form @submit.prevent="newTodo">
      <fieldset class="add-todo">
        <InputText
          name="addTodo"
          id="addTodo"
          placeholder="Adicionar uma tarefa"
        />
        <ButtonSubmit text="Adicionar" />
      </fieldset>
    </form>

    <TaskList v-if="tasks.length !== 0" />
    <WarningMessage :message="warningMsg" v-else />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { api } from "@/helpers/api";

import InputText from "@/components/InputText.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import TaskList from "@/components/TaskList.vue";
import WarningMessage from "@/components/WarningMessage.vue";

export default {
  name: "TodosView",
  components: {
    InputText,
    ButtonSubmit,
    TaskList,
    WarningMessage,
  },
  computed: {
    ...mapState(["tasks", "optionTasks"]),
    warningMsg() {
      let optionTranlatePT;

      if (this.optionTasks === "All") optionTranlatePT = "todos";
      else if (this.optionTasks === "Active") optionTranlatePT = "ativas";
      else optionTranlatePT = "completas";

      return `Não contém tarefas ${
        this.optionTasks === "All"
          ? `no momento. Adicione uma nova tarefa :)`
          : `${optionTranlatePT}.`
      }`;
    },
  },
  methods: {
    ...mapActions(["fetchAPI", "updateTasks", "setError"]),
    async newTodo(event) {
      const form = new FormData(event.target);
      const todo = form.get("addTodo");
      const id = this.tasks.length + 1;

      try {
        const { data } = await api.post({
          id: id,
          value: todo,
          completed: false,
          task: `task-${id}`,
        });
        this.updateTasks([...this.tasks, data]);

        event.target.reset();
        event.target[1].focus();
      } catch (error) {
        this.setError(
          "[ERRO NO SERVIDOR] Não foi possível adicionar uma nova tarefa"
        );
        console.error(error.message);

        setTimeout(() => {
          this.setError(null);
        }, 3000);
      }
    },
  },
  created() {
    this.fetchAPI();
  },
};
</script>

<style scoped>
.todos {
  width: 100%;
  height: 100%;
  padding-top: 12px;
  overflow-y: auto;
}

.add-todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
