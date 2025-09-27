<template>
  <h2>Achievements</h2>
  <AchievementComponent
    v-for="achievement in $store.getters.achievementsAll"
    :key="achievement.id"
    :achievement="achievement"
  />
</template>

<script>
import AchievementComponent from "./AchievementComponent.vue";

export default {
  components: {
    AchievementComponent,
  },
};
</script>
