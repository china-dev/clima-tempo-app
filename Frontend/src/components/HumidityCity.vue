<script setup lang="ts">
  import type { WeatherData } from "../composables/UseApi";

const { weather } = defineProps<{
   weather: WeatherData;
}>();
</script>

<template>
  <section class="boxWrapper">
    <div class="box">
      <div class="boxWrapperHumidity">
        <div>
          <div class="boxHumidityHead">
            <div class="boxHumidityHeadImg">
              <img src="../assets/gota.png" alt="Humidad">
            </div>
             <p class="boxHumidityHeadText">Humidade do ar</p>
          </div>
          <div class="boxHumidityPercent">
            {{ weather.humidity }} %
          </div>
        </div>
        <div class="boxGrafic">
          <div
            class="boxGraficPercent"
             :style="{height: `${weather.humidity}%`}"
          >
            <div class="boxGraficPercentIcon"></div>
          </div>
        </div>
      </div>
    </div>
  </section>  
</template>

<style scoped src="../styles/HumidityCity.css"></style>
