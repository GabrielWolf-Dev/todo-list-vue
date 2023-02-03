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
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { api } from "@/helpers/api";

import InputText from "@/components/InputText.vue";
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "TodosView",
  components: {
    InputText,
    ButtonSubmit,
    TaskList,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["fetchAPI", "updateTasks"]),
    async newTodo(event) {
      const form = new FormData(event.target);
      const todo = form.get("addTodo");
      const id = this.tasks.length + 1;

      const { data } = await api.post({
        id: id,
        value: todo,
        completed: false,
        task: `task-${id}`,
      });
      this.updateTasks([...this.tasks, data]);
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
