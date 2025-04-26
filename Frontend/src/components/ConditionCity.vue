<script setup lang="ts">
  import type { WeatherData } from "../composables/UseApi";

  const { weather } = defineProps<{
     weather: WeatherData;
  }>();
  
</script>

<template>
  <section class="boxWrapper">
    <div class="box">
      <div class="boxImg">
        <img :src="weather.icon" :alt="weather.condition">
      </div>
      <div class="boxCondition">
        <h2 class="boxConditionCity">
          {{ weather.city }}
        </h2>
        <p class="boxConditionTempc">
          {{  weather.temp_c }} 
        </p>
      </div>
      <div class="boxDescriptions">
        <div class="boxDescriptionsWrapper">
          <p class="boxDescritionTitle">
            Condição
          </p>
          <p class="boxDescritionValue">
            {{  weather.condition }}
          </p>
        </div>
        <div class="boxDescriptionsWrapper">
          <p class="boxDescritionTitle">
            Sensação térmica
          </p>
          <p class="boxDescritionValue boxDescritionValueTempc">
            {{  weather.feelslike_c }}
          </p>
        </div>
      </div>
    </div>
  </section>  
</template>

<style scoped src="../styles/ConditionCity.css"></style>
