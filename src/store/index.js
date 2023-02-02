import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    default_path: "http://localhost:3000/todos",
    optionTasks: "All",
    tasks: [],
  },
  getters: {},
  mutations: {
    FILTER_TASKS(state, payload) {
      state.optionTasks = String(payload);
    },
    FETCH_API(state, payload) {
      state.tasks = payload;
    },
  },
  actions: {
    filterTasks(context, payload) {
      context.commit("FILTER_TASKS", payload);
    },
    async fetchAPI(context) {
      const isCompleted =
        this.state.optionTasks !== "Active" && this.state.optionTasks !== "All";
      const query_path =
        this.state.optionTasks !== "All" ? `?completed=${isCompleted}` : "";
      const response = await fetch(`${this.state.default_path}${query_path}`);
      const data = await response.json();

      context.commit("FETCH_API", data);
    },
  },
  modules: {},
});
