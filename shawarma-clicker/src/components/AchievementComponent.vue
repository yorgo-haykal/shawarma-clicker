<template>
  <div id="achievement-line">
    <p v-if="$store.getters.achievementsUnlocked.includes(achievement.id)">
      {{ achievement.title }}
    </p>
    <p v-else>Achievement locked</p>
  </div>
</template>

<script>
export default {
  props: ["achievement"],
};
</script>

<style>
#achievement-style {
  color: white;
}
</style>
