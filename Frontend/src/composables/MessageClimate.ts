import { computed, type Ref } from "vue";
import type { WeatherData } from "../composables/UseApi";

export function useMessageClimate( weather: Ref<WeatherData | null>, errorRequest: Ref<any>) {
  const message = computed(() => {
    console.log("Mensagem atualizada:");
    console.log("Erro atual:", errorRequest.value);
    console.log("Clima atual:", weather.value);
    if (errorRequest.value) {
      if (errorRequest.value?.response?.data?.error) {
        return errorRequest.value.response.data.error;
      }
      return "Ocorreu um erro ao buscar o clima. 🌩️ Tente novamente mais tarde.";
    }

    if (!weather.value) return '';

    const { feelslike_c, humidity } = weather.value;

    if (feelslike_c < 18) 
      return "Está friozinho 🧥 Leve um casaco!";
    else if (feelslike_c > 30)
      return "Dia quente! ☀️ Hidrate-se bastante!";
    else if (humidity > 90) 
      return "Alta umidade no ar ☔ Pode chover!";
    else 
      return "Clima agradável 😎 Aproveite o dia!";

  });

  return { message };
}