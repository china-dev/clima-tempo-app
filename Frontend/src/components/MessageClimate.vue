<script setup lang="ts">
  import { useMessageClimate } from "../composables/MessageClimate.ts";
  import type { WeatherData } from "../composables/UseApi";
  import { toRef } from "vue";

  const props  = defineProps<{
    weather: WeatherData;
    errorRequest: any;
  }>();

  const { message } = useMessageClimate(
    toRef(props, 'weather'),
    toRef(props, "errorRequest")
  );
</script>

<template>
  <div
   v-if="message"
   :class="[
    'boxWrapper', 'messageCard', { 'messageError': !!props.errorRequest }
    ]"
  >
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
