import { ref } from "vue";

export function useSearchCity () {
  const city = ref<string>("");

  function handleSearch (emit: (e: 'search', city: string) => void) {
    if (!city.value.trim()) {
      alert("Digite uma cidade!!!");
      return;
    }

    emit('search', city.value)
    city.value = "";
  }

  return { city, handleSearch}
}