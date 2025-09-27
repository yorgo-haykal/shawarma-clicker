import { createStore } from "vuex";

const ACHIEVEMENTS = [
  {
    id: "first_point",
    title: "First Shawarma",
    condition: (s) => s.score >= 1,
  },
  {
    id: "hundred",
    title: "Street Vendor",
    condition: (s) => s.score >= 100,
  },
  {
    id: "thousand",
    title: "Shawarmanji",
    condition: (s) => s.score >= 1000,
  },
  {
    id: "first_skewer",
    title: "First Skewer",
    condition: (s) => s.skewers >= 1,
  },
  {
    id: "first_chef",
    title: "Sous-Chef",
    condition: (s) => s.chefs >= 1,
  },
  {
    id: "first_branch",
    title: "Franchise",
    condition: (s) => s.branchs >= 1,
  },
];

function checkAchievements(state) {
  for (const a of ACHIEVEMENTS) {
    if (!state.unlockedAchievements.includes(a.id) && a.condition(state)) {
      state.unlockedAchievements.push(a.id);
      alert(a.title);
    }
  }
}

export default createStore({
  state: {
    score: 0,
    scorePerClick: 1,
    scorePerSecond: 0,
    skewers: 0,
    skewerCost: 100,
    chefs: 0,
    chefCost: 200,
    branchs: 0,
    branchCost: 300,
    unlockedAchievements: [],
  },
  getters: {
    score: (state) => state.score,
    scorePerClick: (state) => state.scorePerClick,
    scorePerSecond: (state) => state.scorePerSecond,
    skewers: (state) => state.skewers,
    skewerCost: (state) => state.skewerCost,
    chefs: (state) => state.chefs,
    chefCost: (state) => state.chefCost,
    branchs: (state) => state.branchs,
    branchCost: (state) => state.branchCost,
    achievementsAll: () => ACHIEVEMENTS,
    achievementsUnlocked: (state) => state.unlockedAchievements,
  },
  mutations: {
    increment(state, amount) {
      state.score += amount;
      checkAchievements(state);
    },
    addUpgrade(state, upgrade) {
      switch (upgrade) {
        case "skewer":
          if (state.score >= state.skewerCost) {
            state.skewers += 1;
            state.skewerCost = Math.round(state.skewerCost * 1.15);
            state.scorePerSecond += 1;
            state.score -= 100;
          }
          break;
        case "chef":
          if (state.score >= state.chefCost) {
            state.chefs += 1;
            state.chefCost = Math.round(state.chefCost * 1.15);
            state.scorePerSecond += 3;
            state.score -= 200;
          }
          break;
        case "branch":
          if (state.score >= state.branchCost) {
            state.branchs += 1;
            state.branchCost = Math.round(state.branchCost * 1.15);
            state.scorePerSecond += 5;
            state.score -= 300;
          }
          break;
        case "garlic":
          if (state.score > 100) {
            state.scorePerClick += 1;
          }
          break;
      }
      checkAchievements(state);
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
