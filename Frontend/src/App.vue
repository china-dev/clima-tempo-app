<script setup lang="ts">
  import ConditionCity from './components/ConditionCity.vue';
  import HumidityCity from './components/HumidityCity.vue';
  import InfoCity from './components/InfoCity.vue';
  import MessageClimate from './components/MessageClimate.vue';
  import LoadingApp from './components/LoadingApp.vue';
  import Searchcity from "./components/SearchCity.vue";
  import DaysCondition from "./components/DaysCondition.vue";
  import IconsClimate from "./components/IconsClimate.vue";
  
  import { onMounted } from "vue";
  import { useCitySearch } from "./composables/UseCitySearch.ts";

  const { data, showLoading, initialLoad, searchCity, errorRequest } = useCitySearch();

  onMounted(() => {
    initialLoad();
  });

  function handleCitySearch(cityName: string) {
    searchCity(cityName);
  }

</script>

<template>
  <main>
    <LoadingApp v-if="showLoading"/>
    
    <Searchcity @search="handleCitySearch" />
    <InfoCity v-if="data" :weather="data" />
    <MessageClimate
       v-if="data || errorRequest"
      :weather="data"
      :errorRequest="errorRequest"
    />
  
    <div class="flexAppWrapper">
      <div>
        <ConditionCity v-if="data" :weather="data" />
        <div class="flexAppWrapperRow">
          <HumidityCity 
            v-if="data"
            class="humidity"
            :weather="data"
          />
          <IconsClimate />
        </div>
      </div>
      <DaysCondition class="daysCondition" v-if="data" :weather="data" />
    </div>
  </main>

</template>

<style scoped src="./styles/App.css">
</style>
