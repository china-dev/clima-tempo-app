import { computed, type Ref } from "vue";

import type { WeatherData } from "../composables/UseApi";

export function useMessageClimate(weather: Ref<WeatherData | null>) {
  
  const message = computed(() => {
    if (!weather.value) return '';
  
    if (weather.value.feelslike_c < 18) 
      return "Está friozinho 🧥 Leve um casaco!";
    else if (weather.value.feelslike_c > 30)
      return "Dia quente! ☀️ Hidrate-se bastante!";
    else if (weather.value.humidity > 90) 
      return "Alta umidade no ar ☔ Pode chover!";
    else 
      return "Clima agradável 😎 Aproveite o dia!";
    });
  
  return { message };
}