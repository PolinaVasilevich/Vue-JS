<template>
  <div class="app">
    <nav-bar> </nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/UI/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
