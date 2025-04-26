import { ref, onMounted, onUnmounted } from "vue";

export function useLoadingIcons() {

  const weatherIcons = [
    "☀️", 
    "⛅", 
    "🌧️", 
    "⛈️",
    "❄️",
    "🌫️" 
  ];

  const currentIcon = ref(weatherIcons[0]);
  let intervalId: number;

  onMounted(() => {
    let index = 0;
    intervalId = setInterval(() => {
      currentIcon.value = weatherIcons[index];
      index = (index + 1) % weatherIcons.length;
    }, 240);
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return { currentIcon };
}