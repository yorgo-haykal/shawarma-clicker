<template>
  <div class="home">
    <aside id="upgrade-menu">
      <UpgradesMenu />
    </aside>
    <main>
      <button @click="$store.commit('resetProgress')">Reset progress</button>
      <h2>{{ $store.getters.score }} shawarmas</h2>
      <ShawarmaButton />
    </main>
    <aside id="achievements-menu">
      <AchievementsMenu />
    </aside>
  </div>
</template>

<script>
import ShawarmaButton from "@/components/ShawarmaButton.vue";
import UpgradesMenu from "@/components/UpgradesMenu.vue";
import AchievementsMenu from "@/components/AchievementsMenu.vue";

export default {
  name: "HomeView",
  components: {
    ShawarmaButton,
    UpgradesMenu,
    AchievementsMenu,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

main {
  flex: 1;
}

button {
  background-color: #ccd848;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease, transform 0.1s ease;
}

button:hover {
  background-color: #d9534f;
}

#upgrade-menu {
  width: 250px; /* adjust as needed */
  background-color: #ccd848;
  color: black;
  padding: 20px;
  border-left: 1px solid #ccc;
}

#achievements-menu {
  width: 250px;
  background-color: #ccd848;
  color: black;
  padding: 20px;
}
</style>
