import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/helpers/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    optionTasks: "All",
    tasks: [],
  },
  getters: {},
  mutations: {
    FILTER_TASKS(state, payload) {
      state.optionTasks = String(payload);
    },
    UPDATE_TASKS(state, payload) {
      state.tasks = payload;
    },
  },
  actions: {
    filterTasks(context, payload) {
      context.commit("FILTER_TASKS", payload);
    },
    updateTasks(context, payload) {
      context.commit("UPDATE_TASKS", payload);
    },
    removeOldTasks(context, payload) {
      let filterTasks;

      if (this.optionTasks === "Completed")
        filterTasks = payload.filter((task) => task.completed === true);
      else if (this.optionTasks === "Active")
        filterTasks = payload.filter((task) => task.completed === false);
      else filterTasks = payload;

      context.commit("UPDATE_TASKS", filterTasks);
    },
    async fetchAPI(context) {
      const isCompleted =
        this.state.optionTasks !== "Active" && this.state.optionTasks !== "All";
      const query_path =
        this.state.optionTasks !== "All" ? `?completed=${isCompleted}` : "";
      const { data } = await api.get(query_path);

      context.commit("UPDATE_TASKS", data);
    },
  },
  modules: {},
});
