import { createStore } from "vuex";

export default createStore({
  state: {
    score: 0,
    scorePerClick: 1,
    scorePerSecond: 0,
  },
  getters: {
    score: (state) => state.score,
    scorePerClick: (state) => state.scorePerClick,
  },
  mutations: {
    increment(state, amount) {
      state.score += amount;
    },
  },
  actions: {
    incrementPerSecond({ commit, state }) {
      setInterval(() => {
        commit("increment", state.scorePerSecond);
      }, 1000);
    },
  },
  modules: {},
});
