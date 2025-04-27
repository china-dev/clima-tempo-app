import { computed, type Ref } from "vue";
import type { WeatherData } from "../composables/UseApi";

export function useMessageClimate(
  weather: Ref<WeatherData | null>,
  errorRequest: Ref<any>
) {
  
  const message = computed(() => {
    if (errorRequest.value?.response?.data)
      return errorRequest.value.response.data.error;
    
    if (errorRequest.value)
      return "Ocorreu um erro ao buscar o clima. 🌩️ Tente novamente mais tarde.";

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