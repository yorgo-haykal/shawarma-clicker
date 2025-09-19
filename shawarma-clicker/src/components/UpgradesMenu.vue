<template>
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

li {
  display: flex;
  align-items: center;
  background-color: dimgray;
  gap: 5px;
}
</style>
