<script setup lang="ts">
	import type { WeatherData } from "../composables/UseApi";
	import { useDayCondition } from "../composables/DaysCondition.ts"
	import DayCondition from "./DaysCondition/DayCondition.vue";

	const { weather } = defineProps<{
		weather: WeatherData;
	}>();

	const { getDayNameFromToday } = useDayCondition();
	
</script>

<template>
  <section class="boxWrapper">
  	<div class="box">
			<DayCondition 
				v-for="(day, index) in weather.forecast"
				:day="day"
				:index="index"
				:key="index"
			/>
    </div>
  </section>  
</template>

<style scoped src="../styles/DaysCondition.css"></style>
