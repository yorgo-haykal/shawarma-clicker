<template>
  <h2>{{ $store.getters.scorePerSecond }} shawarmas/s</h2>
  <h2>Upgrades</h2>
  <ul>
    <li>
      <upgrade-component upgrade="skewer" />
    </li>
    <li>
      <upgrade-component upgrade="chef" />
    </li>
    <li>
      <upgrade-component upgrade="branch" />
    </li>
    <li>
      <upgrade-component upgrade="garlic" />
    </li>
  </ul>
</template>

<script>
import UpgradeComponent from "./UpgradeComponent.vue";

export default {
  components: {
    UpgradeComponent,
  },
};
</script>

<style>
.upgrade-icon {
  width: 60px;
  height: auto;
}

.upgrade-icon.disabled {
  filter: grayscale(100%);
  opacity: 0.6;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
}
</style>
