<script setup lang="ts">
  import { useLoadingIcons } from "../composables/LoadingApp";

  const { currentIcon } = useLoadingIcons();
</script>

<template>
  <div class="loadingWrapper">
    <div class="weatherIcon">{{ currentIcon }}</div>
  </div>
</template>

<style scoped src="../styles/LoadingApp.css">
</style>
