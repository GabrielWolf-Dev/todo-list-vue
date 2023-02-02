<template>
  <div class="todos">
    Hello world!
    <InputText name="task" id="task" placeholder="Adicionar uma tarefa" />
    <ButtonSubmit text="Adicionar" />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import InputText from "@/components/InputText.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "TodosView",
  components: {
    ButtonSubmit,
    InputText,
    TaskList,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          value: "Fazer exercícios",
          completed: true,
        },
        {
          id: 2,
          value: "Fazer cursos",
          completed: false,
        },
      ],
    };
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
