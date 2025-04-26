<script setup lang="ts">
  import type { WeatherData } from "../composables/UseApi";
  import { useFormatDate } from "../composables/InfoCity"

const { weather } = defineProps<{
   weather: WeatherData;
}>();

const { formatDateTime } = useFormatDate();
</script>

<template>
  <section class="infoCity">
    <div>
      <h1 class="infoCityTitle">
        {{ weather.city }} 🏙️
      </h1>
      <p class="infoCityRegion">
        {{ weather.region }} - {{ weather.country }}
      </p>
    </div>
    <p class="infoCityCalendarHour">
      🕰️{{formatDateTime(weather.localtime)}} 📅
    </p>
  </section>  
</template>

<style scoped src="../styles/InfoCity.css"></style>
