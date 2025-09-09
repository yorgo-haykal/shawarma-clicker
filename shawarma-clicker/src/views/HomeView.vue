<template>
  <div class="home">
    <h2>{{ $store.getters.score }} shawarmas</h2>
    <ShawarmaButton />
  </div>
</template>

<script>
import ShawarmaButton from "@/components/ShawarmaButton.vue";

export default {
  name: "HomeView",
  components: {
    ShawarmaButton,
  },
};
</script>
