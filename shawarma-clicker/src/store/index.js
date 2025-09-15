import { createStore } from "vuex";

export default createStore({
  state: {
    score: 0,
    scorePerClick: 1,
    scorePerSecond: 0,
    skewers: 0,
    skewerCost: 100,
    chefs: 0,
    chefCost: 200,
    branches: 0,
    branchCost: 300,
  },
  getters: {
    score: (state) => state.score,
    scorePerClick: (state) => state.scorePerClick,
    skewers: (state) => state.skewers,
    skewerCost: (state) => state.skewerCost,
    chefs: (state) => state.chefs,
    chefCost: (state) => state.chefCost,
    branches: (state) => state.branches,
    branchCost: (state) => state.branchCost,
  },
  mutations: {
    increment(state, amount) {
      state.score += amount;
    },
    addUpgrade(state, upgrade) {
      switch (upgrade) {
        case "skewer":
          if (state.score >= state.skewerCost) {
            state.skewers += 1;
            state.skewerCost *= 1.15;
            state.scorePerSecond += 1;
            state.score -= 100;
          }
          break;
        case "chef":
          if (state.score >= state.chefCost) {
            state.chefs += 1;
            state.chefCost *= 1.15;
            state.scorePerSecond += 3;
            state.score -= 200;
          }
          break;
        case "branch":
          if (state.score >= state.branchCost) {
            state.branches += 1;
            state.branchCost *= 1.15;
            state.scorePerSecond += 5;
            state.score -= 300;
          }
          break;
      }
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
