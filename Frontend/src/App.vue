<script setup lang="ts">
  import ConditionCity from './components/ConditionCity.vue';
  import HumidityCity from './components/HumidityCity.vue';
  import { onMounted } from "vue";
  import { useApi } from "./composables/UseApi";

  const { fetchRequest, data } = useApi();
  
  onMounted(() => {
    fetchRequest('?city=São Paulo');
  });
  
</script>

<template>
  <ConditionCity v-if="data" :weather="data" />
  <HumidityCity 
    class="humidity"
    v-if="data"
    :weather="data"
  />
</template>

<style scoped src="./styles/App.css">
</style>
