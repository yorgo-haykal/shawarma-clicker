<template>
  <div
    class="upgrade-line"
    :class="{ disabled: $store.state.score < $store.state[`${upgrade}Cost`] }"
    @click="$store.commit('addUpgrade', upgrade)"
  >
    <img class="upgrade-icon" :src="imageSrc" />
    <p>
      {{ $store.getters[`${upgrade}s`] }}
      {{ upgrade.charAt(0).toUpperCase() + upgrade.slice(1) }}s
    </p>
    <p>Price: {{ $store.getters[`${upgrade}Cost`] }}</p>
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
  padding-left: 10px;
  background-color: dimgray;
  display: flex;
  align-items: center;
  width: 250px;
  height: 75px;
  gap: 8px;
}
</style>
