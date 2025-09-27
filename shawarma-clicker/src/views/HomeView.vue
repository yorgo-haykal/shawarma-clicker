<template>
  <div class="home">
    <aside id="upgrade-menu">
      <UpgradesMenu />
    </aside>
    <main>
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
