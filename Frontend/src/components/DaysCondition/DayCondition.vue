<script setup lang="ts">
	import { useDayCondition } from "../../composables/DaysCondition.ts";
  import type { ForecastItem } from "@/composables/UseApi.ts";

	const props = defineProps<{
    day: ForecastItem;
    index: number;
  }>()

	const { getDayNameFromToday } = useDayCondition();
</script>

<template>
  <div class="boxDays">
    <p class="dayTitle">
      {{ getDayNameFromToday(index)}}
    </p>
    <img :src="day.icon" alt="Condição climática">
    <div class="dayTemp">
      <p class="dayTempMax">
        {{  day.max_temp_c }}
      </p>
      <p class="dayTempMin">
        {{  day.min_temp_c }}
      </p>
    </div>
  </div> 
</template>

<style scoped src="../../styles/DaysCondition.css"></style>
