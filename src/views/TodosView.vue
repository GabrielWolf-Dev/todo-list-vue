<template>
  <div class="todos">
    Hello world!
    <InputText name="task" id="task" placeholder="Adicionar uma tarefa" />
    <ButtonSubmit text="Adicionar" />
  </div>
</template>

<script>
import ButtonSubmit from "@/components/ButtonSubmit.vue";
import InputText from "@/components/InputText.vue";

export default {
  name: "TodosView",
  components: {
    ButtonSubmit,
    InputText,
  }
};
</script>

<style scoped>
.todos {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
