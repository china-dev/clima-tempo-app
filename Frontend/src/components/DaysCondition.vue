<script setup lang="ts">
	import type { WeatherData } from "../composables/UseApi";
	import { useDayCondition } from "../composables/DaysCondition.ts"

	const { weather } = defineProps<{
		weather: WeatherData;
	}>();

	const { getDayNameFromToday } = useDayCondition();
	
</script>

<template>
  <section class="boxWrapper">
  	<div class="box">
			<div 
				class="boxDays" 
				v-for="(day, index) in weather.forecast"
				:key="index"
			>
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
    </div>
  </section>  
</template>

<style scoped src="../styles/DaysCondition.css"></style>
