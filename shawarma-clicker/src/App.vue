<template>
  <h1>SHAWARMA CLICKER</h1>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("incrementPerSecond");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #c5d43e;
}

html,
body {
  background-color: black;
  margin: 0;
  padding: 0;
}
</style>
