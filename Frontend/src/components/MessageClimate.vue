<script setup lang="ts">
  import { useMessageClimate } from "../composables/MessageClimate.ts";
  import type { WeatherData } from "../composables/UseApi";

  const { weather } = defineProps<{
    weather: WeatherData;
  }>();

  const { message } = useMessageClimate(weather);
</script>

<template>
  <div class="boxWrapper messageCard">
    <div class="box">
      <section class="messageCard">
          <p class="messageText">
            {{ message }}
          </p>
        </section>
    </div>
  </div>
</template>

<style scoped src="../styles/MessageClimate.css"></style>
