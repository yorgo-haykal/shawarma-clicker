<template>
  <div
    class="upgrade-line"
    :class="{
      disabled: $store.getters.score < $store.getters[`${upgrade}Cost`],
    }"
    @click="$store.commit('addUpgrade', upgrade)"
  >
    <img class="upgrade-icon" :src="imageSrc" />
    <p v-if="$store.getters[`${upgrade}s`] <= 1">
      {{ $store.getters[`${upgrade}s`] }}
      {{ upgradeString }}
    </p>
    <p v-else-if="upgrade === 'branch'">
      {{ $store.getters[`${upgrade}s`] }}
      {{ upgradeString }}es
    </p>
    <p v-else>
      {{ $store.getters[`${upgrade}s`] }}
      {{ upgradeString }}s
    </p>
    <p>Price: {{ $store.getters[`${upgrade}Cost`] }}</p>
    <span class="tooltip-text">{{ tooltipText }}</span>
  </div>
</template>

<script>
export default {
  name: "UpdateComponent",
  props: {
    upgrade: String,
  },
  computed: {
    imageSrc() {
      return require(`@/assets/${this.upgrade}.png`);
    },
    upgradeString() {
      let s = "";
      switch (this.upgrade) {
        case "skewer":
          s = "Skewer";
          break;
        case "chef":
          s = "Chef";
          break;
        case "branch":
          s = "Branch";
          break;
        case "garlic":
          s = "Extra Garlic";
          break;
      }
      return s;
    },
    tooltipText() {
      switch (this.upgrade) {
        case "skewer":
          return "Produces 1 shawarma per second.";
        case "chef":
          return "Produces 3 shawarmas per second.";
        case "branch":
          return "Produces 5 shawarmas per second.";
        case "garlic":
          return "Doubles shawarmas per second!";
        default:
          return "";
      }
    },
  },
};
</script>

<style>
.upgrade-icon {
  width: 60px;
  height: 60px;
}

.upgrade-line.disabled {
  filter: grayscale(100%);
  opacity: 0.6;
}

.upgrade-line {
  position: relative;
  padding-left: 10px;
  background-color: dimgray;
  display: flex;
  align-items: center;
  width: 250px;
  height: 75px;
  gap: 8px;
  cursor: pointer;
}

.tooltip-text {
  visibility: hidden;
  background-color: #f1c40f;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 8px;
  font-size: 0.85rem;
  white-space: nowrap;

  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 8px;
  z-index: 10;

  opacity: 0;
  transition: opacity 0.15s ease;
}

.upgrade-line:hover {
  background-color: #f1c40f;
}

.upgrade-line:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
