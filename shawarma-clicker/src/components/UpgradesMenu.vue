<template>
  <h2>Upgrades</h2>
  <ul>
    <li>
      <img
        class="upgrade-icon"
        :class="{ disabled: $store.state.score < $store.state.skewerCost }"
        @click="$store.commit('addUpgrade', 'skewer')"
        src="@/assets/skewer.png"
      />
      <p>Skewers</p>
      <p>(Owned: {{ $store.getters.skewers }})</p>
    </li>
    <li>
      <img
        class="upgrade-icon"
        :class="{ disabled: $store.state.score < $store.state.chefCost }"
        @click="$store.commit('addUpgrade', 'chef')"
        src="@/assets/chef.png"
      />
      <p>Chefs</p>
      <p>(Owned: {{ $store.getters.chefs }})</p>
    </li>
    <li>
      <img
        class="upgrade-icon"
        :class="{ disabled: $store.state.score < $store.state.branchCost }"
        @click="$store.commit('addUpgrade', 'branch')"
        src="@/assets/restaurant.png"
      />
      <p>Branches</p>
      <p>(Owned: {{ $store.getters.branches }})</p>
    </li>
  </ul>
</template>

<script></script>

<style>
.upgrade-icon {
  width: 60px;
  height: auto;
}

.upgrade-icon.disabled {
  filter: grayscale(100%);
  opacity: 0.6;
}

li {
  display: flex;
  align-items: center;
  background-color: dimgray;
}
</style>
