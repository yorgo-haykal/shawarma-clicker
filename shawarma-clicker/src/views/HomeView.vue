<template>
  <div class="home">
    <aside id="upgrade-menu">
      <UpgradesMenu />
    </aside>
    <main>
      <h2>{{ $store.getters.score }} shawarmas</h2>
      <ShawarmaButton />
    </main>
  </div>
</template>

<script>
import ShawarmaButton from "@/components/ShawarmaButton.vue";
import UpgradesMenu from "@/components/UpgradesMenu.vue";

export default {
  name: "HomeView",
  components: {
    ShawarmaButton,
    UpgradesMenu,
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
</style>
