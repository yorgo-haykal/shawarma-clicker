import { createStore } from "vuex";
const DEFAULT_STATE = {
  score: 0,
  scorePerClick: 1,
  scorePerSecond: 0,
  skewers: 0,
  skewerCost: 100,
  chefs: 0,
  chefCost: 200,
  branchs: 0,
  branchCost: 300,
  garlics: 0,
  garlicCost: 500,
  unlockedAchievements: [],
};
function saveState(state) {
  localStorage.setItem(
    "shawarma-clicker-state",
    JSON.stringify({
      score: state.score,
      scorePerClick: state.scorePerClick,
      scorePerSecond: state.scorePerSecond,
      skewers: state.skewers,
      skewerCost: state.skewerCost,
      chefs: state.chefs,
      chefCost: state.chefCost,
      branchs: state.branchs,
      branchCost: state.branchCost,
      garlics: state.garlics,
      garlicCost: state.garlicCost,
      unlockedAchievements: state.unlockedAchievements,
    })
  );
}

function loadState() {
  const saved = localStorage.getItem("shawarma-clicker-state");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Failed to parse saved state, using defaults.");
    }
  }
  return DEFAULT_STATE;
}

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
      alert("Achievement Unlocked!\n" + a.title);
    }
  }
}

export default createStore({
  state: loadState(),
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
    garlics: (state) => state.garlics,
    garlicCost: (state) => state.garlicCost,
    achievementsAll: () => ACHIEVEMENTS,
    achievementsUnlocked: (state) => state.unlockedAchievements,
  },
  mutations: {
    increment(state, amount) {
      state.score += amount;
      checkAchievements(state);
      saveState(state);
    },
    addUpgrade(state, upgrade) {
      switch (upgrade) {
        case "skewer":
          if (state.score >= state.skewerCost) {
            state.skewers += 1;
            state.score -= state.skewerCost;
            state.skewerCost = Math.round(state.skewerCost * 1.15);
            state.scorePerSecond += 1;
          }
          break;
        case "chef":
          if (state.score >= state.chefCost) {
            state.chefs += 1;
            state.score -= state.chefCost;
            state.chefCost = Math.round(state.chefCost * 1.15);
            state.scorePerSecond += 3;
          }
          break;
        case "branch":
          if (state.score >= state.branchCost) {
            state.branchs += 1;
            state.score -= state.branchCost;
            state.branchCost = Math.round(state.branchCost * 1.15);
            state.scorePerSecond += 5;
          }
          break;
        case "garlic":
          if (state.score > state.garlicCost) {
            state.garlics += 1;
            state.scorePerSecond *= 2;
            state.score -= state.garlicCost;
            state.garlicCost *= 2;
          }
          break;
      }
      checkAchievements(state);
      saveState(state);
    },
    resetProgress(state) {
      Object.assign(state, { ...DEFAULT_STATE });
      localStorage.setItem("shawarma-clicker-state", JSON.stringify(state));
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
