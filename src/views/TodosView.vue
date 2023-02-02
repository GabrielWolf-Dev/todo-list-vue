<template>
  <div class="todos">
    <form>
      <fieldset class="add-todo">
        <InputText
          name="addTodo"
          id="addTodo"
          placeholder="Adicionar uma tarefa"
        />
        <ButtonSubmit text="Adicionar" />
      </fieldset>
      <TaskList :tasks="tasks" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
    ...mapActions(["fetchAPI"]),
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
