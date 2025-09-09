<template>
  <div>
    <img
      :src="shawarmaImg"
      class="shawarma"
      @click="$store.commit('increment', $store.getters.scorePerClick)"
    />
  </div>
</template>

<script>
import shawarmaImg from "@/assets/shawarma.png";

export default {
  data() {
    return {
      shawarmaImg,
    };
  },
};
</script>

<style>
.shawarma {
  height: 150px;
  width: auto;
}

.shawarma:active {
  transform: translateY(4px);
}
</style>
