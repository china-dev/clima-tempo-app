import { computed } from "vue";

import type { WeatherData } from "../composables/UseApi";

export function useMessageClimate(weather: WeatherData) {
  const message = computed(() => {
    if (!weather) return '';
  
    if (weather.feelslike_c < 18) 
      return "Está friozinho 🧥 Leve um casaco!";
    else if (weather.feelslike_c > 30)
      return "Dia quente! ☀️ Hidrate-se bastante!";
    else if (weather.humidity > 90) 
      return "Alta umidade no ar ☔ Pode chover!";
    else 
      return "Clima agradável 😎 Aproveite o dia!";
    });
  
  return { message };
}