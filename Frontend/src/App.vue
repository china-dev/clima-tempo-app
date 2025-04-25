<script setup lang="ts">
  import ConditionCity from './components/ConditionCity.vue';
  import { onMounted } from "vue";
  import { useApi } from "./composables/useApi.ts";

  const { fetchRequest, data, teste } = useApi();
  
  onMounted( async() => {
    await fetchRequest('?city=São Paulo');
  });
  
</script>

<template>
  <ConditionCity v-if="data"/>
</template>

<style scoped src="./styles/App.css">
</style>
