<template>
  <img
    class="upgrade-icon"
    :class="{ disabled: $store.state.score < $store.state[`${upgrade}Cost`] }"
    @click="$store.commit('addUpgrade', upgrade)"
    :src="imageSrc"
  />
  <p>{{ $store.getters[`${upgrade}s`] }} Skewers</p>
  <p>Price: {{ $store.getters[`${upgrade}Cost`] }}</p>
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
  height: auto;
}

.upgrade-icon.disabled {
  filter: grayscale(100%);
  opacity: 0.6;
}
</style>
