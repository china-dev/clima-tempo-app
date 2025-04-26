<script setup lang="ts">
  import ConditionCity from './components/ConditionCity.vue';
  import HumidityCity from './components/HumidityCity.vue';
  import InfoCity from './components/InfoCity.vue';
  import MessageClimate from './components/MessageClimate.vue';
  import { onMounted } from "vue";
  import { useApi } from "./composables/UseApi";

  const { fetchRequest, data } = useApi();
  
  onMounted(() => {
    fetchRequest('?city=São Paulo');
  });
  
</script>

<template>
  <InfoCity v-if="data" :weather="data" />
  <MessageClimate v-if="data" :weather="data" />
  <ConditionCity v-if="data" :weather="data" />
  <HumidityCity 
    class="humidity"
    v-if="data"
    :weather="data"
  />
</template>

<style scoped src="./styles/App.css">
</style>
