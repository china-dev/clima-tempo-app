import { ref } from "vue";
import { useApi } from "./UseApi";

export function useCitySearch() {
  const { fetchRequest, data, loading, errorRequest } = useApi();
  const showLoading = ref(false);
  const isFirstLoad = ref(true);

  async function initialLoad() {
    await fetchRequest('?city=São Paulo');
    isFirstLoad.value = false;
  }

  async function searchCity(cityName: string) {
    if (!isFirstLoad.value) {
      showLoading.value = true;
    }
    await fetchRequest(`?city=${cityName}`);
    showLoading.value = false;
  }

  return { 
    data,
    errorRequest,
    loading,
    showLoading,
    initialLoad,
    searchCity
  };
}
